const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const STYLE_HREF = "https://assets.calendly.com/assets/external/widget.css";

type CalendlyApi = {
  initPopupWidget: (options: { url: string }) => void;
  closePopupWidget: () => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyApi;
  }
}

let loading: Promise<CalendlyApi> | null = null;

function loadCalendly() {
  if (window.Calendly) return Promise.resolve(window.Calendly);

  loading ??= new Promise<CalendlyApi>((resolve, reject) => {
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = STYLE_HREF;
    document.head.append(style);

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
      if (window.Calendly) resolve(window.Calendly);
      else reject(new Error("Calendly widget did not initialise"));
    };
    script.onerror = () => {
      loading = null;
      script.remove();
      style.remove();
      reject(new Error("Calendly widget failed to load"));
    };
    document.head.append(script);
  });

  return loading;
}

export async function openCalendlyPopup(url: string, trigger: HTMLElement | null) {
  let calendly: CalendlyApi;
  try {
    calendly = await loadCalendly();
  } catch {
    window.location.assign(url);
    return;
  }

  calendly.initPopupWidget({ url });

  // Calendly's popup closes only from its own close button and overlay, and never restores focus.
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") calendly.closePopupWidget();
  };
  const observer = new MutationObserver(() => {
    if (document.querySelector(".calendly-overlay")) return;
    observer.disconnect();
    document.removeEventListener("keydown", onKeyDown);
    trigger?.focus();
  });

  document.addEventListener("keydown", onKeyDown);
  observer.observe(document.body, { childList: true });
}

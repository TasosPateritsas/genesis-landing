"use client";

import { Bell, Lock } from "lucide-react";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";

type Role = "couple" | "venue" | "pro";
type Source = "home" | "weddingflow";

const copy = {
  en: {
    title: "Want to be first to know when it launches?",
    roleLabel: "I'm a:",
    roles: [
      { value: "couple" as const, label: "Couple" },
      { value: "venue" as const, label: "Venue" },
      { value: "pro" as const, label: "Wedding pro" },
    ],
    placeholder: "Your email",
    submit: "Notify me",
    note: "We'll only use your email to tell you about the launch.",
    privacy: "Privacy policy",
    invalid: "Please enter a valid email.",
    successTitle: "You're on the list!",
    successText: "We'll let you know as soon as Weddingflow launches.",
  },
  el: {
    title: "Θέλετε να μάθετε πρώτοι πότε κυκλοφορεί;",
    roleLabel: "Είμαι:",
    roles: [
      { value: "couple" as const, label: "Ζευγάρι" },
      { value: "venue" as const, label: "Χώρος" },
      { value: "pro" as const, label: "Επαγγελματίας" },
    ],
    placeholder: "Το email σας",
    submit: "Ενημερώστε με",
    note: "Θα χρησιμοποιήσουμε το email σας μόνο για να σας ενημερώσουμε για το launch.",
    privacy: "Πολιτική απορρήτου",
    invalid: "Συμπληρώστε ένα έγκυρο email.",
    successTitle: "Είστε στη λίστα!",
    successText: "Θα σας ενημερώσουμε μόλις κυκλοφορήσει το Weddingflow.",
  },
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({ source }: { source: Source }) {
  const { locale } = useLocale();
  const hrefFor = useLocalizedPath();
  const t = copy[locale];
  const privacyHref = hrefFor("/privacy");
  const consentPage = locale === "el" ? "/el/privacy" : "/privacy";

  const [role, setRole] = useState<Role | null>(null);
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const showTitle = source === "home";

  const valid = useMemo(() => EMAIL_RE.test(email.trim()), [email]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setError(t.invalid);
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          role,
          locale,
          source,
          consent_text: t.note,
          consent_page: consentPage,
          company_website: honeypot,
        }),
      });
      if (!res.ok) {
        setError(t.invalid);
        return;
      }
      setSuccess(true);
    } catch {
      setError(t.invalid);
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className={`wl-card is-${source} is-success`} role="status">
        <div className="wl-success">
          <span className="wl-success-check" aria-hidden>
            ✓
          </span>
          <p className="wl-success-title">{t.successTitle}</p>
          <p className="wl-success-text">{t.successText}</p>
        </div>
      </div>
    );
  }

  return (
    <form className={`wl-card is-${source}`} onSubmit={onSubmit} noValidate>
      {showTitle ? (
        <div className="wl-title-row">
          <span className="wl-bell" aria-hidden>
            <Bell size={16} strokeWidth={2} />
          </span>
          <p className="wl-title">{t.title}</p>
        </div>
      ) : null}

      <div className="wl-role">
        <p className="wl-role-label">{t.roleLabel}</p>
        <div className="wl-role-options" role="radiogroup" aria-label={t.roleLabel}>
          {t.roles.map((item) => {
            const checked = role === item.value;
            return (
              <label key={item.value} className={`wl-role-option${checked ? " is-checked" : ""}`}>
                <input
                  type="radio"
                  name={`wl-role-${source}`}
                  value={item.value}
                  checked={checked}
                  onChange={() => setRole(item.value)}
                />
                <span className="wl-radio" aria-hidden />
                <span>{item.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className={`wl-field${error ? " is-invalid" : ""}`}>
        <label className="home-sr" htmlFor={`wl-email-${source}`}>
          {t.placeholder}
        </label>
        <input
          id={`wl-email-${source}`}
          type="email"
          name="email"
          autoComplete="email"
          placeholder={t.placeholder}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError("");
          }}
          disabled={loading}
        />
        <button type="submit" className="wl-submit" disabled={loading || (!valid && email.length > 0 && Boolean(error))}>
          {loading ? <span className="wl-spinner" aria-hidden /> : null}
          <span>
            {t.submit}
            <span aria-hidden> →</span>
          </span>
        </button>
      </div>
      {error ? (
        <p className="wl-error" role="alert">
          {error}
        </p>
      ) : null}

      <p className="wl-note">
        <Lock size={13} strokeWidth={2} aria-hidden />
        <span>
          {t.note}{" "}
          <Link href={privacyHref} className="wl-privacy">
            {t.privacy}
          </Link>
        </span>
      </p>

      <input
        type="text"
        name="company_website"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="wl-honeypot"
        aria-hidden
      />
    </form>
  );
}

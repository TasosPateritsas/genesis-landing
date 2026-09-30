import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { localizePath, stripLocalePrefix } from "@/lib/routes";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const lang = url.searchParams.get("lang");

  if (lang === "el" || lang === "en") {
    url.searchParams.delete("lang");
    const bare = stripLocalePrefix(url.pathname);
    url.pathname = localizePath(bare, lang);
    return NextResponse.redirect(url, 301);
  }

  if (url.pathname === "/en" || url.pathname.startsWith("/en/")) {
    url.pathname = stripLocalePrefix(url.pathname.replace(/^\/en(?=\/|$)/, "") || "/");
    return NextResponse.redirect(url, 301);
  }

  const requestHeaders = new Headers(request.headers);
  const locale =
    url.pathname === "/el" || url.pathname.startsWith("/el/") ? "el" : "en";
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
};

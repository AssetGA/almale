import { NextResponse } from "next/server";

let locales = ["kz", "en", "ru"];
let defaultLocale = "kz";

// Get the preferred locale, similar to the above or using a library
function getLocale() {
  return defaultLocale;
}

export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/img") || pathname.startsWith("/favicon.ico")) {
    return NextResponse.next();
  }
  if (
    pathname.startsWith("/fonts") ||
    pathname.endsWith(".woff2") ||
    pathname.endsWith(".ttf")
  ) {
    return NextResponse.next();
  }
  if (pathname.endsWith(".css")) {
    // Здесь вы можете добавить логику для обработки стилей, например:
    // - Логирование
    // - Кэширование
    // - Добавление заголовков

    // В случае необходимости измените URL или обработайте запрос
    return NextResponse.next();
  }
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};

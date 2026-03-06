import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const isLoggedIn = false;

  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

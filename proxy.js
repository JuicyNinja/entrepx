import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Keeps the Supabase session fresh for the admin app and sends signed-out visitors to the login page.
export async function proxy(request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return NextResponse.next(); // not connected yet: the app shows a setup screen

  let response = NextResponse.next({ request });
  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(list) {
        list.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        list.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  const { data } = await supabase.auth.getClaims();
  const signedIn = Boolean(data?.claims?.sub);
  const path = request.nextUrl.pathname;
  if (!signedIn && path !== "/command/login") {
    const to = request.nextUrl.clone();
    to.pathname = "/command/login";
    to.search = "";
    return NextResponse.redirect(to);
  }
  return response;
}

export const config = { matcher: ["/command", "/command/:path*"] };

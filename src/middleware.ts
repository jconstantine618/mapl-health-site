import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Skip password check for the password page itself, API routes, and static files
  if (
    request.nextUrl.pathname === '/password' ||
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/docs/') ||
    request.nextUrl.pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('mapl-auth');
  if (authCookie?.value === 'authorized') {
    return NextResponse.next();
  }

  // Redirect to password page
  return NextResponse.redirect(new URL('/password', request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

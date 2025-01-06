import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/signin', '/signup', '/verify'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token');
  const { pathname } = request.nextUrl;

  // Allow public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Redirect to signin if not authenticated
  if (!token && !publicPaths.includes(pathname)) {
    const signinUrl = new URL('/signin', request.url);
    return NextResponse.redirect(signinUrl);
  }

  return NextResponse.next();
}
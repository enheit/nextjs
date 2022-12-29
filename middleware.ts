import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/sign-in') {
    return NextResponse.next()
  }

  const accessToken = request.cookies.get('accessToken');

  if (!accessToken) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  } 

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|favicon.ico).*)',
  ]
}

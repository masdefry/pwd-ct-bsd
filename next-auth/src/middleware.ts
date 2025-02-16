import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const role = req.nextauth.token?.role;

    // Proteksi Halaman `/admin` Agar Bisa di Akses 
    // oleh User dengan Role `admin` Saja!
    if (pathname.startsWith('/admin') && role !== 'admin') {
      return NextResponse.redirect(new URL('/', req.url));
    }

    if (pathname.startsWith('/api') && pathname !== '/api/protected' && role !== 'admin') {
      return NextResponse.redirect(new URL('/api/protected', req.url));
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Memastikan User Login
    },
  }
);

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'], // Proteksi Semua Halaman di `/admin`
};

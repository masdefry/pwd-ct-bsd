// >>>>> NEXT-AUTH with BASIC AUTHENTICATION


import prisma from '@/lib/prisma.client'
import bcrypt from 'bcrypt'
import type { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Credentials({
      
        // Prop `credentials` di NextAuth tidak digunakan untuk membuat form input secara otomatis. 
        // NextAuth hanya menggunakan `credentials` sebagai referensi untuk data yang perlu dikirim 
        // saat autentikasi, tetapi tidak akan merender input form secara otomatis. 

        // Konfigurasi ini hanya mendefinisikan struktur input yang diperlukan, 
        // tetapi tidak digunakan untuk membuat UI login.
      
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing email or password');
        }

        const user = await prisma.user.findUnique({ where: { email: credentials.email } })

        if (!user) throw new Error('Email is not registered');

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error('Invalid password');
        }
        
        return {
          role: user.role,
          name: user.name,
          email: user.email, 
          id: user.id
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, account }) {

      // Conditional untuk User yang Login dengan Google Account
      if(account){
        // Daftarkan Google Account User (Simpan Data User ke Database)
      }

      if (!user) return { ...token } 

      return {
        ...token,
        role: user.role,
        name: user.name,
        email: user.email,
        id: user.id
      };
    },
    session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.id,
          name: token.name,
          email: token.email,
          role: token.role
        }
      };
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

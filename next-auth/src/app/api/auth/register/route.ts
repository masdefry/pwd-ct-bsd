import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma.client';
import bcrypt from 'bcrypt';

export async function POST(req: NextRequest) {
  const { email, password, name }: { email: string, password: string, name: string }= await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
  }

  const findExistingUser = await prisma.user.findUnique({ where: { email } });
  if (findExistingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 200 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const createdUser = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ message: 'User registered successfully', user: createdUser }, { status: 201 });
}

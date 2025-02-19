import { NextResponse } from 'next/server';

export async function GET() {
  const data = [
    { title: 'Hello' },
    { title: 'Welcome' }
  ];

  return NextResponse.json(data);
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    return NextResponse.json({ message: 'Unauthorized User' }, { status: 401 })
}
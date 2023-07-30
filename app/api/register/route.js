import { NextResponse } from 'next/server';
import prisma from '../../lib/prismadb';
import bcrypt from 'bcrypt';

export const POST = async (request) => {
  const body = await request.json();
  const { email, password, name } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
};

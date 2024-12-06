import { prisma } from '@/lib/db/prisma';
import { NextResponse } from 'next/server';
import { customerSchema, Customer } from '@/lib/zodSchema';
import { z } from 'zod';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const data = (await req.json()) as unknown;

    const validatedData = customerSchema.parse(data);

    const newCustomer = await prisma.customer.create({
      data: {
        name: validatedData.name,
        company: validatedData.company,
        phone: validatedData.phone,
        email: validatedData.email,
        country: validatedData.country,
        status: validatedData.status,
      },
    });

    return NextResponse.json(newCustomer, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => err.message).join(', ');
      return NextResponse.json({ message: errorMessages }, { status: 400 });
    }

    console.error(
      'Customer creation error:',
      error instanceof Error ? error.message : String(error),
    );

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET(req: Request) {
  try {
    const customers = await prisma.customer.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });
    return NextResponse.json(customers, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 },
    );
  }
}

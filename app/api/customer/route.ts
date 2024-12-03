import { prisma } from '@/lib/db/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { name, company, phone, email, country, status } = await req.json();
        if (!name || !company || !phone || !email || !country || !status) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }
        const newCustomer = await prisma.customer.create({
            data: { name, company, phone, email, country, status },
        });
        return NextResponse.json(newCustomer, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

export async function GET(req: Request) {
    try {
        const customers = await prisma.customer.findMany();
        return NextResponse.json(customers, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

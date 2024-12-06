import { z } from 'zod';

export const customerSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    company: z.string().min(1, 'Company is required'),
    phone: z.string().min(1, 'Phone is required'),
    email: z.string().email('Invalid email format'),
    country: z.string().min(1, 'Country is required'),
    status: z.string().min(1, 'Status is required'),
});

export type Customer = z.infer<typeof customerSchema>;

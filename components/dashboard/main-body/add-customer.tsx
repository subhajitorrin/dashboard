'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useCustomerStore from '@/lib/store/useCustomerStore';
import { z } from 'zod';
import { customerSchema } from '@/lib/zodSchema';

const COUNTRY_LIST = [
  'Australia',
  'Brazil',
  'Canada',
  'China',
  'Curaçao',
  'Egypt',
  'France',
  'Germany',
  'Greece',
  'India',
  'Iran',
  'Israel',
  'Japan',
  'Kiribati',
  'Mexico',
  'New Zealand',
  'Nigeria',
  'Réunion',
  'Russia',
  'South Africa',
  'South Korea',
  'Spain',
  'United States',
  'Åland Islands',
];

export default function AddCustomerModal() {
  const { addCustomer } = useCustomerStore();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('ABC Company');
  const [phone, setPhone] = useState('1234567890');
  const [email, setEmail] = useState('testing@gmail.com');
  const [country, setCountry] = useState('India');
  const [status, setStatus] = useState('active');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const customer = {
      name,
      company,
      phone,
      email,
      country,
      status,
    };
    try {
      customerSchema.parse(customer);
      setIsLoading(true);
      await addCustomer(customer);
      setName('');
      setOpen(false);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const errorMessage = error.errors.map((err) => err.message).join(', ')
        console.error("Validation error", errorMessage);
      } else {
        console.error("Unknown error", error.response.data.message || error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="decoration-skip-ink-none ml-[3.25rem] rounded-[10px] bg-[#F9FBFF] pl-[2.125rem] pr-[2.25rem] text-left text-[0.75rem] font-normal leading-[1.125rem] tracking-[-0.01em] text-[#7E7E7E]">
          Add customer
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-xl bg-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Customer</DialogTitle>
          <DialogDescription>
            Enter the customer details below to add them to your customer list.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Customer Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter customer name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-[8px] border border-[#00000028]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              placeholder="Enter company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="rounded-[8px] border border-[#00000028]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="rounded-[8px] border border-[#00000028]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-[8px] border border-[#00000028]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="country">Country</Label>
            <Select
              name="country"
              onValueChange={(value) => setCountry(value)}
              value={country}
              required>
              <SelectTrigger
                id="country"
                className="rounded-[8px] border border-[#00000028]">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {COUNTRY_LIST.map((item, index) => {
                  return (
                    <SelectItem
                      key={index}
                      value={item}
                      className="cursor-pointer">
                      {item}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Status</Label>
            <RadioGroup
              defaultValue="active"
              name="status"
              value={status}
              onValueChange={(value) => setStatus(value)}
              required>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="active" id="active" />
                <Label htmlFor="active" className="text-sm font-normal">
                  Active
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="inactive" id="inactive" />
                <Label htmlFor="inactive" className="text-sm font-normal">
                  Inactive
                </Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex justify-end">
            <Button
              disabled={isLoading}
              type="submit"
              className="min-w-[150px] rounded-[10px] bg-[#5932EA] text-white hover:bg-[#5630df]">
              {isLoading ? 'Loading...' : 'Add Customer'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

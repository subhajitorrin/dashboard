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

export default function AddCustomerModal() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="decoration-skip-ink-none ml-[3.25rem] rounded-[10px] bg-[#F9FBFF] pl-[2.125rem] pr-[2.25rem] text-left text-[0.75rem] font-normal leading-[1.125rem] tracking-[-0.01em] text-[#7E7E7E]">
          Add customer
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white sm:max-w-[425px]">
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
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              placeholder="Enter company name"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(xxx) xxx-xxxx"
              pattern="$$\d{3}$$ \d{3}-\d{4}"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email address"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="country">Country</Label>
            <Select name="country" required>
              <SelectTrigger id="country">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="br">Brazil</SelectItem>
                <SelectItem value="ir">Iran</SelectItem>
                <SelectItem value="il">Israel</SelectItem>
                <SelectItem value="ki">Kiribati</SelectItem>
                <SelectItem value="re">Réunion</SelectItem>
                <SelectItem value="cw">Curaçao</SelectItem>
                <SelectItem value="ax">Åland Islands</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Status</Label>
            <RadioGroup defaultValue="active" name="status" required>
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
            <Button type="submit">Add Customer</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

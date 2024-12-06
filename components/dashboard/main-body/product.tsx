'use client';

import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import AddCustomerModal from './add-customer';
import { TablePagination } from './pagination';
import useCustomerStore from '@/lib/store/useCustomerStore';
import { useEffect, useState, useTransition } from 'react';
import { Icon14 } from '@/lib/icons/icons';
import { CustomerInfo } from "@/types/index"

const TABLE_HEAD = [
  'Customer Name',
  'Company',
  'Phone Number',
  'Email',
  'Country',
  'Status',
] as const;

export default function Product() {
  const { getCustomer, customerList } = useCustomerStore() as {
    getCustomer: () => Promise<void>;
    customerList: CustomerInfo[];
  };
  const [isLoading, setIsLoading] = useState(true);
  const [filteredList, setFilteredList] = useState<CustomerInfo[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    let result = [...customerList];

    if (searchTerm) {
      result = result.filter((customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

    setFilteredList(result);
  }, [customerList, searchTerm, sortBy]);

  useEffect(() => {
    async function handleGetCustomers() {
      try {
        setIsLoading(true);
        await getCustomer();
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    handleGetCustomers();
  }, [getCustomer]);

  return (
    <div className="mt-[2.5rem] rounded-[30px] bg-white pb-[2.5rem] pl-[2.375rem] pr-[2.5rem] pt-[1.875rem] shadow-[0px_10px_60px_0px_#E2ECF980]">
      <div className="">
        {/* Header */}
        <div className="mb-[40px] flex flex-col space-y-4 sm:flex-row sm:items-end sm:justify-between sm:space-y-0">
          <div>
            <h1 className="text-left text-[1.375rem] font-semibold leading-[2.0625rem] tracking-[-0.01em]">
              All Customers
            </h1>
            <p className="mt-[0.438rem] text-left text-[0.875rem] font-normal leading-[1.3125rem] tracking-[-0.01em] text-[#16C098]">
              Active Members
            </p>
          </div>

          <div className="flex h-[2.375rem] w-full items-center rounded-[12px] bg-[#F9FBFF] px-[0.5rem] py-[0.438rem] sm:w-[13.5rem]">
            <Icon14 />
            <Input
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              value={searchTerm}
              type="text"
              placeholder="Search"
              className="placeholder:text-custom-color ml-[0.5rem] h-[1.313rem] border-none bg-transparent pl-0"
            />
          </div>

          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:gap-4 sm:space-y-0">
            <div className="flex w-full items-center justify-center rounded-[10px] bg-[#F9FBFF] pl-[0.938rem] sm:w-auto">
              <span className="text-nowrap text-[0.75rem] text-[#7E7E7E]">
                Short by :&nbsp;
              </span>
              <Select
                defaultValue={sortBy}
                onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="border-none p-0 pr-[0.75rem] text-left text-[0.75rem] font-semibold leading-[1.125rem] tracking-[-0.01em]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className='rounded-[8px] bg-white'>
                  <SelectItem value="newest" className='cursor-pointer'>Newest</SelectItem>
                  <SelectItem value="oldest" className='cursor-pointer'>Oldest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <AddCustomerModal />
          </div>
        </div>

        <div className="rounded-lg">
          <Table>
            <TableHeader className="">
              <TableRow className="border-b">
                {TABLE_HEAD.map((item, index) => {
                  return (
                    <TableHead
                      key={index}
                      className="text-left text-[0.875rem] font-medium leading-[1.3125rem] tracking-[-0.01em] text-[#B5B7C0]">
                      {item}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>
            <TableBody className="border-b">
              {filteredList.map((customer, index) => (
                <TableRow key={index} className="border-b py-[1.25rem]">
                  <TableCell className="text-left text-[0.875rem] font-medium leading-[1.3125rem] tracking-[-0.01em] text-[#292D32]">
                    {customer.name}
                  </TableCell>
                  <TableCell className="text-left text-[0.875rem] font-medium leading-[1.3125rem] tracking-[-0.01em] text-[#292D32]">
                    {customer.company}
                  </TableCell>
                  <TableCell className="text-left text-[0.875rem] font-medium leading-[1.3125rem] tracking-[-0.01em] text-[#292D32]">
                    {customer.phone}
                  </TableCell>
                  <TableCell className="text-left text-[0.875rem] font-medium leading-[1.3125rem] tracking-[-0.01em] text-[#292D32]">
                    {customer.email}
                  </TableCell>
                  <TableCell className="text-left text-[0.875rem] font-medium leading-[1.3125rem] tracking-[-0.01em] text-[#292D32]">
                    {customer.country}
                  </TableCell>
                  <TableCell className="text-left text-[0.875rem] font-medium leading-[1.3125rem] tracking-[-0.01em]">
                    <div
                      className={`${customer.status === 'active'
                        ? ' border-[#00B087]  bg-[#16C09861] text-[#008767]'
                        : ' border-[#DF0404] bg-[#FFC5C5] text-[#DF0404]'
                        } h-[1.813rem] w-[5.25rem] rounded-[4px] border-[1px] py-[4px] text-center capitalize`}>
                      {customer.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-[1.875rem] flex flex-col-reverse items-center justify-between gap-6 md:flex-row md:gap-0">
          <p className="text-left text-[0.875rem] font-medium leading-[1.3125rem] tracking-[-0.01em] text-[#B5B7C0]">
            Showing data 1 to 8 of 256K entries
          </p>
          <div className="flex items-center gap-1">
            <TablePagination />
          </div>
        </div>
      </div>
    </div>
  );
}

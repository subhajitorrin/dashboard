import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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
import { ChevronLeft, ChevronRight, Search } from 'lucide-react';
import AddCustomerModal from './add-customer';
import { TablePagination } from './pagination';

const TABLE_HEAD = [
  'Customer Name',
  'Company',
  'Phone Number',
  'Email',
  'Country',
  'Status',
];

export default function Product() {
  return (
    <div className="mt-[2.5rem] rounded-[30px] bg-white pb-[2.5rem] pl-[2.375rem] pr-[2.5rem] pt-[1.875rem] shadow-[0px_10px_60px_0px_#E2ECF980]">
      <div className="">
        {/* Header */}
        <div className="mb-[40px] flex items-end justify-between">
          <div>
            <h1 className="text-left text-[1.375rem] font-semibold leading-[2.0625rem] tracking-[-0.01em]">
              All Customers
            </h1>
            <p className="mt-[0.438rem] text-left text-[0.875rem] font-normal leading-[1.3125rem] tracking-[-0.01em] text-[#16C098]">
              Active Members
            </p>
          </div>

          <div className="flex h-[2.375rem] w-[13.5rem] items-center rounded-[12px] bg-[#F9FBFF] px-[0.5rem] py-[0.438rem]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#7E7E7E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 21L16.65 16.65"
                stroke="#7E7E7E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Input
              type="text"
              placeholder="Search"
              className="placeholder:text-custom-color ml-[0.5rem] h-[1.313rem] border-none bg-transparent pl-0"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-[10px] bg-[#F9FBFF] pl-[0.938rem]">
              <span className="text-nowrap text-[0.75rem] text-[#7E7E7E]">
                Short by :&nbsp;
              </span>
              <Select defaultValue="newest">
                <SelectTrigger className="border-none p-0 pr-[0.75rem] text-left text-[0.75rem] font-semibold leading-[1.125rem] tracking-[-0.01em]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="">
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
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
              {customers.map((customer) => (
                <TableRow
                  key={customer.email}
                  className="border-b py-[1.25rem]">
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
                      className={`${
                        customer.status === 'Active'
                          ? ' border-[#00B087]  bg-[#16C09861] text-[#008767]'
                          : ' border-[#DF0404] bg-[#FFC5C5] text-[#DF0404]'
                      } h-[1.813rem] w-[5.25rem] rounded-[4px] border-[1px] py-[4px] text-center`}>
                      {customer.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-[1.875rem] flex items-center justify-between">
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

const customers = [
  {
    name: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: 'Active',
  },
  {
    name: 'Floyd Miles',
    company: 'Yahoo',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    country: 'Kiribati',
    status: 'Inactive',
  },
  {
    name: 'Ronald Richards',
    company: 'Adobe',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    country: 'Israel',
    status: 'Inactive',
  },
  {
    name: 'Marvin McKinney',
    company: 'Tesla',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    country: 'Iran',
    status: 'Active',
  },
  {
    name: 'Jerome Bell',
    company: 'Google',
    phone: '(629) 555-0129',
    email: 'jerome@google.com',
    country: 'Réunion',
    status: 'Active',
  },
  {
    name: 'Kathryn Murphy',
    company: 'Microsoft',
    phone: '(406) 555-0120',
    email: 'kathryn@microsoft.com',
    country: 'Curaçao',
    status: 'Active',
  },
  {
    name: 'Jacob Jones',
    company: 'Yahoo',
    phone: '(208) 555-0112',
    email: 'jacob@yahoo.com',
    country: 'Brazil',
    status: 'Active',
  },
  {
    name: 'Kristin Watson',
    company: 'Facebook',
    phone: '(704) 555-0127',
    email: 'kristin@facebook.com',
    country: 'Åland Islands',
    status: 'Inactive',
  },
];

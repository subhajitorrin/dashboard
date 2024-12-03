import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function TablePagination() {
  return (
    <Pagination>
      <PaginationContent className="gap-2 overflow-hidden">
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-[4px] bg-[#EEEEEE] hover:bg-[#e6e6e6]">
            <ChevronLeft className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="decoration-skip-none flex h-[25px] w-[25px] items-center justify-center rounded-[4px] bg-[#6C27FF] p-0 text-left text-[0.75rem] font-medium leading-[0.75rem] tracking-[-0.01em] text-white hover:bg-[#6C27FF]/90">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="hover:bg-[#e6e6e6]text-[0.75rem] flex h-[25px] w-[25px] items-center justify-center rounded-[4px] bg-[#EEEEEE] text-left font-medium leading-[0.75rem] tracking-[-0.01em]">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-[4px] bg-[#EEEEEE] text-left text-[0.75rem] font-medium leading-[0.75rem] tracking-[-0.01em] hover:bg-[#e6e6e6]">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-[4px] bg-[#EEEEEE] text-left text-[0.75rem] font-medium leading-[0.75rem] tracking-[-0.01em] hover:bg-[#e6e6e6]">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <div className="relative flex h-[25px] w-[25px] items-center justify-center rounded-[4px]">
            <p className="absolute bottom-[6px] text-left text-[0.75rem] font-bold leading-[0.75rem] tracking-[-0.01em]">
              ...
            </p>
          </div>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-[4px] bg-[#EEEEEE] text-left text-[0.75rem] font-medium leading-[0.75rem] tracking-[-0.01em] hover:bg-[#e6e6e6]">
            40
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            className="flex h-[25px] w-[25px] items-center justify-center rounded-[4px] bg-[#EEEEEE] text-left text-[0.75rem] font-medium leading-[0.75rem] tracking-[-0.01em] hover:bg-[#e6e6e6]">
            <ChevronRight className="h-4 w-4" />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

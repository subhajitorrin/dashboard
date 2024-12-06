import React from 'react';
import Mainheading from './main-heading';
import { Input } from '@/components/ui/input';
import Product from './product';
import { Icon11 } from '@/lib/icons/icons';

const Mainbody = () => {
  return (
    <div className="h-full w-full flex-1 overflow-y-auto bg-[#f9faff] p-4 md:py-[2.5rem] md:pl-[4.438rem] md:pr-[5.938rem]">
      <div className="mb-[2.438rem] flex items-center justify-between">
        <h2 className="text-left text-lg font-medium leading-[2.25rem] text-[#000000] md:text-[1.5rem]">
          Hello Evano 👋🏼,
        </h2>
        <div className="hidden h-[2.375rem] w-[13.5rem] items-center rounded-[12px] px-[0.5rem] py-[0.438rem] shadow-[0px_10px_60px_0px_#E2ECF980] md:flex">
          <Icon11 />
          <Input
            type="text"
            placeholder="Search"
            className="placeholder:text-custom-color ml-[0.5rem] h-[1.313rem] border-none bg-transparent pl-0"
          />
        </div>
      </div>
      <Mainheading />
      <Product />
    </div>
  );
};

export default Mainbody;

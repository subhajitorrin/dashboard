import React from 'react';
import Mainheading from './main-heading';
import { Input } from '@/components/ui/input';

const Mainbody = () => {
  return (
    <div className="h-full w-full flex-1 bg-[#f9faff] pl-[4.438rem] pr-[5.938rem] pt-[2.5rem]">
      <div className="mb-[2.438rem] flex items-center justify-between">
        <h2 className="text-left text-[1.5rem] font-medium leading-[2.25rem] text-[#000000]">
          Hello Evano 👋🏼,
        </h2>
        <div className="flex h-[2.375rem] w-[13.5rem] items-center rounded-[12px] px-[0.5rem] py-[0.438rem] shadow-[0px_10px_60px_0px_rgba(226,_236,_249,_0.5)]">
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
      </div>
      <Mainheading />
    </div>
  );
};

export default Mainbody;

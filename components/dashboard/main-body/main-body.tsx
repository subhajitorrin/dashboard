import React from 'react';
import Mainheading from './main-heading';
import { Input } from '@/components/ui/input';

const Mainbody = () => {
  return (
    <div className="h-full w-full flex-1 bg-[#f8faff] px-20 py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-[400]">Hello Evano 👋🏼,</h2>
        <div className="">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="#7E7E7E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Input type="text" placeholder="Search" />
        </div>
      </div>
      <Mainheading />
    </div>
  );
};

export default Mainbody;

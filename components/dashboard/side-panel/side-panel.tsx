"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Profile from "./profile";
import { Icon1, Icon10, Icon2, Icon3, Icon4, Icon6, Icon7, Icon8, Icon9 } from "@/lib/icons/icons";

const ITEMS = [
  {
    name: "Dashboard",
    icon: Icon1
  },
  {
    name: "Product",
    icon: Icon2
  },
  {
    name: "Customers",
    icon: Icon3
  },
  {
    name: "Income",
    icon: Icon4
  },
  {
    name: "Promote",
    icon: Icon6
  },
  {
    name: "Help",
    icon: Icon7
  }
];

const Sidepanel = () => {
  const [active, setActive] = useState(2);
  return (
    <div className="hidden w-[19.125rem] flex-col  shadow-[0px_10px_60px_0px_#E2ECF980] md:flex">
      <div className="flex flex-col">
        {/* sidebar heading */}
        <div className="flex w-fit items-center md:ml-[1.75rem] md:mt-[2.25rem]">
          <Icon8 />
          <h1 className="mr-[0.25rem] w-[150px] text-[26px] font-[600] leading-[2.438rem]">
            Dashboard
          </h1>
          <p className="relative top-[5.8px] text-[0.625rem] font-[400] text-[#838383]">
            v.01
          </p>
        </div>
        {/* sidebar items */}
        <ul className="mt-[3.5rem] flex flex-col items-start gap-[1.125rem]">
          {ITEMS.map((item, index) => (
            <Button
              style={{
                backgroundColor: index === active ? "#5932EA" : ""
              }}
              key={index}
              className="mx-[1.75rem] flex h-[2.875rem] w-[15.625rem] items-center justify-between rounded-[8px] py-[0.688rem] pl-[0.688rem] pr-[0.5rem] text-[#9197b3]"
            >
              <div
                style={{ color: index === active ? "#fff" : "" }}
                className="flex items-center text-[14px]"
              >
                <item.icon />
                <span className="ml-[0.875rem] text-[0.875rem] font-[500]">
                  {item.name}
                </span>
              </div>
              {index !== 0 &&
                (index === active ? (
                  <Icon9 />
                ) : (
                  <Icon10 />
                ))}
            </Button>
          ))}
        </ul>
      </div>
      <div className="mt-[5rem]">
        <div
          style={{ background: "linear-gradient(110deg, #eaabf0, #4623e9)" }}
          className="mx-[1.75rem] flex h-[9.375rem] w-[15.625rem] flex-col rounded-[20px] pl-[1.5rem] pr-[1.438rem] pt-[1.625rem] text-center text-white"
        >
          <p className="mb-[1.25rem] text-center text-[0.875rem] font-[600] leading-[1.313rem] tracking-[0.01em]">
            Upgrade to PRO to get access all Features!
          </p>
          <Button className="mb-[1.375rem] flex h-[2.5rem] w-[12.688rem] items-center justify-center rounded-[20px] bg-[#FFFFFF] hover:bg-[#fffffff1]">
            <p className="font-poppins decoration-skip-ink-none text-center text-sm font-semibold leading-[21px] tracking-[0.01em] text-[#4925E9]">
              Get Pro Now!
            </p>
          </Button>
        </div>
        <Profile />
      </div>
    </div>
  );
};

export default Sidepanel;

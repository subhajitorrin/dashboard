import React from 'react';
import profile from '@/public/dashboard-assets/profile.png';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="mb-[4.75rem] mt-[2.875rem] flex w-full items-center justify-between px-[1.75rem]">
      <div className="flex">
        <Image
          src={profile}
          alt="profile"
          height={42}
          width={42}
          className="rounded-full"
        />
        <div className="ml-[0.75rem]">
          <h2 className="text-[0.875rem] font-[400] leading-[1.313rem] tracking-[0.01em]">
            Evano
          </h2>
          <p className="text-[0.75rem] font-[400] leading-[1.125rem] text-[#757575]">
            Project Manager
          </p>
        </div>
      </div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L12 15L18 9"
          stroke="#757575"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Profile;

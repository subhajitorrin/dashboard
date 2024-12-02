import React from 'react';
import profile from '@/public/dashboard-assets/profile.png';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="mt-8 flex w-full items-center justify-between">
      <div className="flex gap-3">
        <Image
          src={profile}
          alt="profile"
          height={42}
          width={42}
          className="rounded-full"
        />
        <div className="">
          <h2 className="text-[14px] font-[500]">Evano</h2>
          <p className="text-[12px] font-[500] text-[#757575]">
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

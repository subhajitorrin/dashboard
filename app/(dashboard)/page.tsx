import Mainbody from '@/components/dashboard/main-body/main-body';
import Sidepanel from '@/components/dashboard/side-panel/side-panel';
import React from 'react';

const Page = () => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidepanel />
      <Mainbody />
    </div>
  );
};

export default Page;

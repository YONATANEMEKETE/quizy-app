import { SignUp } from '@clerk/nextjs';
import React from 'react';

const Page = () => {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <SignUp />
    </div>
  );
};

export default Page;

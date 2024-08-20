import React from 'react';
import { SignIn } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <SignIn />
    </div>
  );
};

export default Page;

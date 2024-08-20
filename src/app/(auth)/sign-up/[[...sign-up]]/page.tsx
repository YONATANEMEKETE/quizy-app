import { SignUp } from '@clerk/nextjs';
import React from 'react';

const Page = () => {
  return (
    <div className="relative overflow-hidden w-screen h-screen grid place-content-center">
      <div className="absolute -z-10 bottom-0 lg:-bottom-32 left-1/2 lg:left-1/4 -translate-x-1/2 w-40 h-40 rounded-t-full bg-[#3eae0a]"></div>
      <div className="absolute -z-10 top-20 -left-2   w-20 h-40 rounded-e-full bg-[#2ec7ff]"></div>
      <div className="absolute -z-10 -top-20 lg:-top-28 left-1/2 lg:left-1/3 -translate-x-1/2  w-40 h-40 rounded-b-full hidden md:block bg-[#1a6eb7]"></div>
      <SignUp />
    </div>
  );
};

export default Page;

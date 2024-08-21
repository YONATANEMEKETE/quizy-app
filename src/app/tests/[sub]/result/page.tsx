'use client';

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
// import Lottie from 'lottie-react';
import confetti from '@/data/Lottie/confetti.json';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const DynamicLottie = dynamic(() => import('lottie-react'), { ssr: false });

const result = () => {
  return (
    <main className="relative flex-1 mt-10 min-[1200px]:mt-40 py-10 px-4 space-y-16">
      <div className="w-fit mx-auto">
        <div className="w-max mx-auto  font-heading text-mytext text-5xl md:text-7xl font-bold mb-6">
          Great !!!
        </div>
        <div className="text-xl md:text-3xl text-mytext text-center font-semibold max-w-[600px] mx-auto]">
          You have Answered 6/10 questions right. Congra!!!
        </div>
      </div>
      <div className="flex items-center gap-4 w-max mx-auto">
        <Button
          size={'lg'}
          className="text-lg font-semibold bg-mytext hover:bg-mytext/70"
        >
          <Link href={'..'}>Retake</Link>
        </Button>
        <Button
          size={'lg'}
          className="text-lg font-semibold bg-myaccent hover:bg-myaccent/70"
        >
          <Link href={'/tests'}>Back to Tests</Link>
        </Button>
      </div>
      {/* lotties */}
      <div className="absolute -top-3/4 ">
        <DynamicLottie
          animationData={confetti}
          loop={true}
          autoPlay={true}
          width={50}
          height={50}
        />
      </div>
      <div className="absolute -top-3/4 left-1/2 ">
        <DynamicLottie animationData={confetti} loop={true} autoPlay={true} />
      </div>
    </main>
  );
};

export default result;

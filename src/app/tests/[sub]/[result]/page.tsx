'use client';

import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
// import Lottie from 'lottie-react';
import confetti from '@/data/Lottie/confetti.json';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const DynamicLottie = dynamic(() => import('lottie-react'), { ssr: false });

const result = ({ params }: { params: { result: number } }) => {
  const message = params.result >= 8 ? 'Well Done' : 'Better Luck Next Time';

  return (
    <main className="relative flex-1 mt-10 min-[1200px]:mt-40 py-10 px-4 space-y-40">
      <div className="w-fit mx-auto">
        <div className="w-max mx-auto  font-heading text-mytext text-5xl md:text-7xl font-bold mb-6">
          {message}
        </div>
        <div className="text-xl md:text-3xl text-mytext text-center font-semibold max-w-[600px] mx-auto]">
          {`You scored ${params.result} out of 10`}
        </div>
      </div>
      <div className="flex items-center gap-4 w-max mx-auto">
        <Link href={'..'}>
          <Button
            size={'lg'}
            className="text-lg font-semibold bg-mytext hover:bg-mytext/70"
          >
            Retake
          </Button>
        </Link>

        <Link href={'/tests'}>
          <Button
            size={'lg'}
            className="text-lg text-white font-semibold bg-myaccent hover:bg-myaccent/70"
          >
            Back to Tests
          </Button>
        </Link>
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

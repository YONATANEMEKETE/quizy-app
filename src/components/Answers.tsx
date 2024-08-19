'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import a from '../../public/a.png';
import wrong from '../../public/wrong.png';
import check from '../../public/check.png';

const Answers = () => {
  const [answer, setAnswer] = useState<string>('right');

  return (
    <div
      className={`min-w-[300px] mx-auto w-[350px] px-4 py-4 rounded-xl shadow-md ${
        answer === 'right'
          ? 'ring-1 ring-myaccent'
          : answer === 'wrong'
          ? 'ring-1 ring-red-600'
          : ''
      } bg-white flex items-center justify-between cursor-pointer`}
    >
      <div className="flex items-center gap-x-4">
        <div className="relative size-8 rounded-full overflow-hidden">
          <Image src={a} alt="choice" fill className="" />
        </div>
        <p className="text-mytext text-xl font-semibold">Gary Killer</p>
      </div>
      <div className="size-6 rounded-full overflow-hidden relative">
        {answer === 'right' ? (
          <Image src={check} alt="answer" fill className="" />
        ) : answer === 'wrong' ? (
          <Image src={wrong} alt="answer" fill className="" />
        ) : null}
      </div>
    </div>
  );
};

export default Answers;

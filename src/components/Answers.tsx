'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import a from '../../public/a.png';
import b from '../../public/b.png';
import c from '../../public/c.png';
import d from '../../public/d.png';
import wrong from '../../public/wrong.png';
import check from '../../public/check.png';
import { useRouter } from 'next/router';

type Props = {
  text: string;
  answer: string;
  choice: number;
};

const Answers = ({ text, choice, answer }: Props) => {
  const [isAnswer, setIsAnswer] = useState<string>('');

  // use choice - 1 to get the right mark of the choice
  const marks = [a, b, c, d];

  const handleAnswer = () => {
    if (answer === text) {
      setIsAnswer('right');
    } else {
      setIsAnswer('wrong');
    }
  };

  return (
    <div
      onClick={handleAnswer}
      className={`min-w-[300px] mx-auto w-[350px] px-4 py-4 rounded-xl shadow-md ${
        isAnswer === 'right'
          ? 'ring-1 ring-myaccent'
          : isAnswer === 'wrong'
          ? 'ring-1 ring-red-600'
          : ''
      } bg-white flex items-center justify-between cursor-pointer`}
    >
      <div className="flex items-center gap-x-4">
        <div className="relative size-6 rounded-full overflow-hidden">
          <Image src={marks[choice - 1]} alt="choice" fill className="" />
        </div>
        <p className="text-mytext text-xl font-semibold">{text}</p>
      </div>
      <div className="size-6 rounded-full overflow-hidden relative">
        {isAnswer === 'right' ? (
          <Image src={check} alt="answer" fill className="" />
        ) : isAnswer === 'wrong' ? (
          <Image src={wrong} alt="answer" fill className="" />
        ) : null}
      </div>
    </div>
  );
};

export default Answers;

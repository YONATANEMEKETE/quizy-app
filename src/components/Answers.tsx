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
import { useScoreStore } from '@/Stores/store';

type Props = {
  text: string;
  answer: string;
  choice: number;
  // score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const Answers = ({ text, choice, answer, setScore }: Props) => {
  const { isAnswer, setAnswer, resetAnswer } = useScoreStore();
  const [isSuccess, setIsSuccess] = useState(isAnswer);

  // use choice - 1 to get the right mark of the choice
  const marks = [a, b, c, d];

  const checkIfAnswer = () => {
    text === answer ? setIsSuccess('right') : setIsSuccess('wrong');
  };
  const handleAnswer = () => {
    if (answer === text) {
      setAnswer('right');
      setScore((prev) => prev + 1);
      // setIsIsRight('right');
    } else {
      setAnswer('wrong');
      // setIsIsRight('wrong');
    }

    checkIfAnswer();

    setTimeout(() => {
      setIsSuccess('');
    }, 1000);
  };

  return (
    <div
      onClick={handleAnswer}
      className={`min-w-[300px] mx-auto w-[350px] px-4 py-4 rounded-xl shadow-md ${
        isSuccess === 'right'
          ? 'ring-1 ring-myaccent'
          : isSuccess === 'wrong'
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
        {isSuccess === 'right' ? (
          <Image src={check} alt="answer" fill className="" />
        ) : isSuccess === 'wrong' ? (
          <Image src={wrong} alt="answer" fill className="" />
        ) : null}
      </div>
    </div>
  );
};

export default Answers;

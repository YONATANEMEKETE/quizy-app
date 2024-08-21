import React from 'react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import SaveBtn from './Saved';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  subject: string;
  questionsNo: number;
  time: number;
  image?: any;
  colorBg: string;
};

const QuizCard = ({ subject, questionsNo, time, image, colorBg }: Props) => {
  return (
    <main
      className={`min-w-[300px] w-[300px] h-60 p-4 rounded-lg shadow-md ${colorBg}  space-y-6  hover:shadow-xl transition-shadow duration-200`}
    >
      <div className="flex items-start justify-between">
        <div className="size-16 rounded-full relative">
          <Image
            src={image}
            alt="subjectIcon"
            fill
            className="object-contain"
          />
        </div>
        <SaveBtn />
      </div>
      <div className="text-3xl text-black font-semibold ml-2">{subject}</div>
      <div className="space-y-2">
        <Separator className="bg-black" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base text-black font-semibold">{`${questionsNo} Qs`}</p>
            <p className="text-xs text-mytextgray font-semibold">{`${time} Mins`}</p>
          </div>
          <Button
            size={'lg'}
            className="text-lg text-white font-semibold bg-black hover:bg-black/70"
          >
            <Link href={`/tests/${subject}`}>Start</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default QuizCard;

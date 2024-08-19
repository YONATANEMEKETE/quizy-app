import React from 'react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import SaveBtn from './Saved';

const QuizCard = () => {
  return (
    <main className="min-w-[300px] w-[300px] h-60 p-4 rounded-lg shadow-md bg-white  space-y-6  hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div className="size-16 rounded-full bg-mytext"></div>
        <SaveBtn />
      </div>
      <div className="text-3xl text-mytext font-semibold ml-2">Biology</div>
      <div className="space-y-2">
        <Separator />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base text-mytext font-semibold">10 Questions</p>
            <p className="text-xs text-mytextgray font-semibold">15 Mins</p>
          </div>
          <Button
            size={'lg'}
            className="text-lg font-semibold bg-mytext hover:bg-mytext/70"
          >
            Start
          </Button>
        </div>
      </div>
    </main>
  );
};

export default QuizCard;

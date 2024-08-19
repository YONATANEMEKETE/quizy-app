import { Bookmark, Save } from 'lucide-react';
import React from 'react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const QuizCard = () => {
  return (
    <main className="min-w-[300px] w-[300px] h-60 p-4 rounded-md bg-white  space-y-6">
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
            className="text-lg font-semibold bg-myaccent hover:bg-myaccent/70"
          >
            Start
          </Button>
        </div>
      </div>
    </main>
  );
};

const SaveBtn = () => {
  return (
    <div className="flex items-center gap-2 p-2 py-1 rounded-md border border-mytextgray cursor-pointer">
      <div className="text-base text-mytextgray font-semibold">Save</div>
      <Bookmark className="text-mytextgray" />
    </div>
  );
};

export default QuizCard;

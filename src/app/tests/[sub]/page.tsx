import Answers from '@/components/Answers';
import { Button } from '@/components/ui/button';
import React from 'react';

const SingleQuiz = () => {
  return (
    <main className="relative min-[1200px]:h-full flex-1 mt-10 min-[1200px]:mt-0 py-10 min-[1200px]:pt-20 px-4 space-y-10 min-[500px]:space-y-16 ">
      <div className="relative w-full max-w-[600px] mx-auto bg-myaccent/30 h-3 rounded-full">
        <div className="absolute inset-0 w-1/3 bg-myaccent rounded-full"></div>
      </div>
      <div className="max-w-[500px] mx-auto text-center text-3xl md:text-5xl text-mytext font-heading font-semibold">
        {`${1}. Who Wrote the Book "The One Thing"?`}
      </div>
      {/* answers */}
      <div className="w-full max-w-[800px] mx-auto grid  grid-cols-1 md:grid-cols-2  gap-4">
        <Answers />
        <Answers />
        <Answers />
        <Answers />
      </div>

      <div className="w-max mx-auto flex items-center gap-4">
        <Button
          disabled
          size={'lg'}
          className="text-lg font-semibold bg-mytext hover:bg-mytext/80"
        >
          Prev
        </Button>
        <Button
          size={'lg'}
          className="text-lg font-semibold bg-myaccent hover:bg-myaccent/80"
        >
          Next
        </Button>
      </div>
      {/*  */}
    </main>
  );
};

export default SingleQuiz;

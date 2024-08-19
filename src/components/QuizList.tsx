import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import QuizCard from './QuizCard';

const QuizList = () => {
  return (
    <main className=" min-[1200px]:flex-1 h-1/5 mt-10 pt-6 space-y-10">
      <div className="w-max mx-auto flex flex-col min-[500px]:flex-row items-center gap-2">
        <Input
          className="min-w-[250px] text-base text-mytext font-semibold"
          placeholder="Ex. physics"
        />
        <Button
          size={'lg'}
          className="text-xl font-semibold bg-myaccent hover:bg-myaccent/70"
        >
          Search
        </Button>
      </div>
      {/* quiz cards ui */}
      <div className=" flex flex-wrap items-center justify-center min-[1200px]:justify-start gap-6">
        <QuizCard />
        <QuizCard />
        <QuizCard />
      </div>
    </main>
  );
};

export default QuizList;

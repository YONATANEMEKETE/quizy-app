import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import QuizCard from './QuizCard';
import { QuizCards } from '@/data/data';

const QuizList = () => {
  return (
    <main className="min-[1200px]:flex-1 h-1/5 my-10 lg:my-4 py-6  px-4 space-y-10">
      <div className="w-max mx-auto min-[1200px]:ml-0 flex flex-col min-[500px]:flex-row items-center gap-2">
        <Input
          className="min-w-[300px] min-[1200px]:w-[400px] text-base text-mytext font-semibold"
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
        {QuizCards.map((card) => (
          <QuizCard
            key={card.subject}
            subject={card.subject}
            questionsNo={card.questionsNo}
            time={card.time}
            image={card.image}
            colorBg={card.colorBg}
          />
        ))}
      </div>
    </main>
  );
};

export default QuizList;

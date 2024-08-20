'use client';

import Answers from '@/components/Answers';
import { Button } from '@/components/ui/button';
import React from 'react';
import { QuizCards } from '@/data/data';
import { redirect, useRouter } from 'next/navigation';
import { useScoreStore } from '@/Stores/store';
// import { question } from '@/Types/types';

const SingleQuiz = ({ params }: { params: { sub: string } }) => {
  const router = useRouter();
  const card = QuizCards.find((card) => card.subject === params.sub);
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [isEnd, setIsEnd] = React.useState<boolean>(false);
  const { isAnswer, resetAnswer } = useScoreStore();
  const [isRight, setIsRight] = React.useState<string>('');

  const handleNext = () => {
    if (isAnswer !== '') {
      if (currentQuestion < card?.questions.length - 2) {
        setCurrentQuestion((prev) => prev + 1);
      } else if (currentQuestion === card?.questions.length - 2) {
        setCurrentQuestion((prev) => prev + 1);
        setIsEnd(true);
      } else {
        router.push(`/tests/${params.sub}/result`);
      }

      resetAnswer();
      setIsRight('');
    }
  };

  return (
    <main className="relative min-[1200px]:h-full flex-1 mt-10 min-[1200px]:mt-0 py-10 min-[1200px]:pt-20 px-4 space-y-10 min-[500px]:space-y-16 ">
      <div className="relative w-full max-w-[600px] mx-auto bg-myaccent/30 h-3 rounded-full">
        <div className="absolute inset-0 w-1/3 bg-myaccent rounded-full"></div>
      </div>
      <div className="max-w-[500px] mx-auto text-center text-3xl md:text-[2.5rem] text-mytext font-heading font-semibold">
        {`${card?.questions[currentQuestion].no}. ${card?.questions[currentQuestion].title}`}
      </div>
      {/* answers */}
      <div className="w-full max-w-[800px] mx-auto grid  grid-cols-1 md:grid-cols-2  gap-4">
        {card?.questions[currentQuestion].options.map((option) => (
          <Answers
            text={option.text}
            key={option.choice}
            choice={option.choice}
            answer={card?.questions[currentQuestion].answer}
            isRight={isRight}
          />
        ))}
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
          onClick={handleNext}
          size={'lg'}
          className="text-lg font-semibold bg-myaccent hover:bg-myaccent/80"
        >
          {isEnd ? 'Result' : 'Next'}
        </Button>
      </div>
      {/*  */}
    </main>
  );
};

export default SingleQuiz;

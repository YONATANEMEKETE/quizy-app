import QuizHeader from '@/components/QuizHeader';
import QuizList from '@/components/QuizList';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const Tests = () => {
  return (
    <main className="max-w-screen min-h-screen h-screen  overflow-x-hidden min-[1200px]:flex items-start gap-12 bg-mybg">
      <QuizHeader />
      <Sidebar />
      <QuizList />
    </main>
  );
};

export default Tests;

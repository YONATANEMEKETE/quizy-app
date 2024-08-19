import QuizHeader from '@/components/QuizHeader';
import Sidebar from '@/components/Sidebar';
import React from 'react';

const Tests = () => {
  return (
    <main className="w-screen h-screen overflow-hidden min-[1200px]:flex items-start gap-6 bg-mybg">
      <QuizHeader />
      <Sidebar />
    </main>
  );
};

export default Tests;

import QuizHeader from '@/components/QuizHeader';
import Sidebar from '@/components/Sidebar';
import React from 'react';

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div className="relative max-w-screen min-h-screen h-screen  overflow-x-hidden min-[1200px]:flex items-start gap-12 bg-mybg">
      <QuizHeader />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;

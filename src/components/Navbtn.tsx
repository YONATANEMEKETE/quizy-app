import { Award } from 'lucide-react';
import React from 'react';

type navProps = {
  text: string;
};
const Navbtn = ({ text }: navProps) => {
  return (
    <div
      className="w-full pl-6 py-4 flex items-center gap-x-4 bg-navbtn hover:bg-myaccent/40 rounded-md 
    cursor-pointer active:scale-75 transition-all duration-500 mb-2"
    >
      <Award />
      <div className="text-mytext   text-xl font-bold">{text}</div>
    </div>
  );
};

export default Navbtn;

import { Award } from 'lucide-react';
import React from 'react';

type navProps = {
  text: string;
  icon: React.ReactNode;
};
const Navbtn = ({ text, icon }: navProps) => {
  return (
    <div className="group w-full px-4 py-2 flex items-center gap-x-4 bg-transparent hover:border-l-2 border-mytext hover:bg-myaccent/30  rounded-md cursor-pointer">
      {icon}
      <div className="text-base text-mytextgray group-hover:text-mytext  font-bold">
        {text}
      </div>
    </div>
  );
};

export default Navbtn;

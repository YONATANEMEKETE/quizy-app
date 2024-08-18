import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';
import { Button } from './ui/button';
import { ArrowLeft, ChevronDown, MoonStar } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../components/ui/dropdown-menu';

const QuizHeader = () => {
  return (
    <header className="max-w-[1200px] mx-auto  h-16 md:h-20 lg:h-24 bg-transparent">
      <nav className="size-full flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-x-6 md:gap-x-10 lg:gap-x-20">
          <div className="flex items-center gap-x-2 cursor-pointer">
            <Image
              src={logo}
              alt="Quizy Logo"
              width={50}
              height={50}
              className="h-auto"
            />
            <p className="text-2xl md:text-3xl text-myaccent font-bold font-heading">
              Quizy
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="text-xl md:text-2xl font-semibold">Tests</div>
                <div className="">
                  <ChevronDown className="md:size-8" />
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[200px]">
              <DropdownMenuItem className="text-lg text-mytext font-semibold bg-mybg">
                Beginner
              </DropdownMenuItem>
              <DropdownMenuItem className="text-lg text-mytext font-semibold bg-mybg">
                Intermediate
              </DropdownMenuItem>
              <DropdownMenuItem className="text-lg text-mytext font-semibold bg-mybg">
                Advanced
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-x-4">
          <Button
            size="icon"
            className="hidden md:flex place-content-center bg-mytext hover:bg-mytext/60"
          >
            <MoonStar />
          </Button>
          <div className="hidden md:block h-10 w-[1px] border-l border-mytext"></div>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <ChevronDown className="size-8" />
            <p className="hidden md:block text-base text-mytext font-semibold">
              Yonatane
            </p>
            <div className="size-12 rounded-full bg-myaccent"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default QuizHeader;
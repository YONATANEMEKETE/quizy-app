import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';
import { Button } from './ui/button';
import { AlignJustify, Moon, MoonStar } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LandingHeader = () => {
  return (
    <header className="max-w-[1200px] mx-auto h-16 md:h-20 lg:h-24 bg-transparent">
      <nav className="size-full flex items-center justify-between px-4">
        <div className="flex items-center gap-x-6 md:gap-x-10">
          <div className="flex items-center gap-x-2 cursor-pointer">
            <Image
              src={logo}
              alt="Quizy Logo"
              width={50}
              height={50}
              className="h-auto"
            />
            <p className="text-2xl md:text-3xl text-mytext font-bold font-heading">
              Quizy
            </p>
          </div>
          <p className="text-xl md:text-2xl text-mytext font-semibold font-heading cursor-pointer transition-all duration-300">
            Tests
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button size="icon" className="bg-myaccent hover:bg-myaccent/40">
            <MoonStar />
          </Button>
          <div className="hidden md:flex border-l border-mytext pl-4  items-center gap-x-2">
            <Button
              variant={'ghost'}
              size="default"
              className="text-lg text-mytext font-semibold hover:bg-myaccent/40"
            >
              Sign In
            </Button>
            <Button
              size="default"
              className="text-lg text-mytext font-semibold bg-myaccent hover:bg-myaccent/70"
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;

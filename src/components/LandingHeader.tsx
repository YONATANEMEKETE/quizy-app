import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';
import { Button } from './ui/button';
import { AlignJustify, ChevronDown, Moon, MoonStar } from 'lucide-react';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

const LandingHeader = async () => {
  const user = await currentUser();

  return (
    <header className="max-w-[1200px] mx-auto h-16 md:h-20 lg:h-24 bg-transparent">
      <nav className="size-full flex items-center justify-between px-4">
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
          <p
            className="text-xl md:text-2xl text-mytext font-semibold cursor-pointer font-heading  
          transition-all duration-300 "
          >
            Tests
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button size="icon" className="bg-mytext hover:bg-mytext/60">
            <MoonStar />
          </Button>
          <div className="hidden md:block h-10 w-[1px] border-l border-mytext"></div>
          <SignedIn>
            <div className="flex items-center gap-x-2 cursor-pointer">
              <ChevronDown className="size-8 hidden md:block" />
              <p className="hidden md:block text-base text-mytext font-semibold">
                {user?.username}
              </p>
              <div className="size-12 rounded-full">
                <UserButton />
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="hidden md:flex border-l border-mytext pl-4  items-center gap-x-2">
              <Button
                variant={'ghost'}
                size="default"
                className="text-lg text-mytext font-semibold hover:bg-myaccent/50"
              >
                <SignInButton forceRedirectUrl={'/'} />
              </Button>
              <Button
                size="default"
                className="text-lg text-mytext font-semibold bg-myaccent hover:bg-myaccent/70"
              >
                <SignUpButton forceRedirectUrl={'/'} />
              </Button>
            </div>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;

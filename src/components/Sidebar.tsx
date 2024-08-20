import Image from 'next/image';
import React from 'react';
import logo from '../../public/logo.png';
import Navbtn from './Navbtn';
import { Award, ChevronRight, GripVertical, Moon, User } from 'lucide-react';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import { UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';

const Sidebar = async () => {
  const user = await currentUser();

  return (
    <main className="hidden sticky top-0 left-0 min-[1200px]:flex w-[320px] bg-white h-full py-4 pt-10 px-6 rounded-e-3xl flex-col items-center justify-between">
      <div className="w-full space-y-8">
        <div className="w-full space-y-6">
          <Link href={'/'}>
            <div className="flex items-center gap-x-2 w-full cursor-pointer">
              <Image
                src={logo}
                alt="Quizy Logo"
                width={70}
                height={70}
                className="h-auto"
              />
              <div className="text-myaccent text-3xl font-bold">Quizy</div>
            </div>
          </Link>
          <Separator />
        </div>

        <div className="w-full space-y-2">
          <Navbtn text="Beginner" icon={<GripVertical size={20} />} />
          <Navbtn text="Intermediate" icon={<GripVertical size={20} />} />
          <Navbtn text="Advanced" icon={<GripVertical size={20} />} />
          <Navbtn text="Personalized" icon={<User size={20} />} />
        </div>
      </div>
      <div className="w-full space-y-4">
        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Moon size={20} />
            <div className="text-mytext text-base font-bold">Dark Mode</div>
          </div>
          <Switch />
        </div>
        <Separator />
        <div className="group w-full py-2 px-2 rounded-md bg-transparent hover:bg-myaccent/20 flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-x-2">
            <div className="size-12 rounded-full">
              <UserButton />
            </div>
            <div>
              <p className="text-mytext text-base font-bold">
                {user?.username}
              </p>
              <p className="text-mytextgray text-[8px] font-bold">
                {user?.emailAddresses[0].emailAddress}
              </p>
            </div>
          </div>
          <ChevronRight className="text-mytextgray group-hover:text-mytext group-hover:translate-x-1 transition-all duration-150" />
        </div>
      </div>
    </main>
  );
};

export default Sidebar;

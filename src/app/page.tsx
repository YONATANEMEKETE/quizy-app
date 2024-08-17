import Hero from '@/components/Hero';
import HeroImages from '@/components/HeroImages';
import LandingHeader from '@/components/LandingHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden border-2">
      <div className="absolute -z-10 bottom-0 lg:-bottom-32 left-1/2 lg:left-1/4 -translate-x-1/2 w-40 h-40 rounded-t-full bg-[#3eae0a]"></div>
      <div className="absolute -z-10 top-20 -left-2   w-20 h-40 rounded-e-full bg-[#2ec7ff]"></div>
      <div className="absolute -z-10 -top-20 lg:-top-28 left-1/2 lg:left-1/3 -translate-x-1/2  w-40 h-40 rounded-b-full hidden md:block bg-[#1a6eb7]"></div>
      <LandingHeader />
      <Hero />
    </main>
  );
}

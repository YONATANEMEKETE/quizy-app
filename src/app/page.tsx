import Hero from '@/components/Hero';
import LandingHeader from '@/components/LandingHeader';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-hidden border-2">
      <LandingHeader />
      <Hero />
    </main>
  );
}

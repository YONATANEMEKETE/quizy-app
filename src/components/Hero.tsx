import React from 'react';
import { Button } from './ui/button';
import HeroImages from './HeroImages';

const Hero = () => {
  return (
    <main className="relative h-lvh max-w-[1200px] mx-auto px-4 lg:px-10 text-center pt-24 space-y-4">
      <div className="max-w-[450px] size-fit mx-auto lg:ml-0 space-y-12  text-center lg:text-start">
        <div className="space-y-2 md:space-y-4">
          <div className="text-5xl md:text-[4rem] text-mytext font-heading font-semibold">
            Are You Up for A <span className="text-myaccent">Challenge?</span>
          </div>
          <p className="text-mytext text-2xl md:text-3xl font-bold">
            Test your Knowledge
          </p>
        </div>

        <Button
          variant="default"
          size="lg"
          className="text-xl md:text-2xl  py-4 md:py-8 font-semibold px-4  bg-myaccent hover:bg-myaccent/70 md:ml-0"
        >
          Get Started
        </Button>
      </div>
      <HeroImages />
    </main>
  );
};

export default Hero;

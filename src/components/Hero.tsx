import React from 'react';

const Hero = () => {
  return (
    <main className="h-[85vh] text-center pt-24 space-y-4">
      <h1 className="text-5xl text-mytext font-heading font-semibold max-w-[400px] mx-auto">
        Are You Up for A <span className="text-myaccent">Challenge?</span>
      </h1>
      <p className="text-xl text-mytext font-semibold">Test Your Knowledge</p>
    </main>
  );
};

export default Hero;

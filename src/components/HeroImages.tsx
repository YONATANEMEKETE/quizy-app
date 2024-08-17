import React from 'react';

const HeroImages = () => {
  return (
    <div
      className="absolute hidden -z-10 right-0 bottom-0 top-0 w-[50vw] min-[1200px]:w-[40vw]  
    lg:flex items-center justify-center gap-x-4"
    >
      <div className="h-full basis-[20%]  -translate-y-10 flex flex-col items-center gap-6">
        <div className="w-full h-[55%] bg-myaccent rounded-full"></div>
        <div className="w-full h-1/3 bg-[#6cacc6] rounded-full"></div>
      </div>
      <div className="h-[120vh] basis-[20%] -translate-y-32 flex flex-col items-center gap-6 ">
        <div className="w-full h-[40%] bg-[#ff80b7] rounded-full"></div>
        <div className="w-full h-[50%] bg-[#ff80b7] rounded-full"></div>
        <div className="w-full h-[10%] bg-[#3e6575] rounded-full"></div>
      </div>
      <div className="h-full basis-[20%] translate-y-10 flex flex-col gap-6 items-center">
        <div className="w-full h-[40%] bg-[#3e6575] rounded-full"></div>
        <div className="w-full h-[50%] bg-[#ff80b7] rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroImages;

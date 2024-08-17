import Image from 'next/image';
import React from 'react';

const HeroImages = () => {
  return (
    <div
      className="absolute hidden -z-10 right-0 bottom-0 top-0 w-[50vw] min-[1200px]:w-[40vw]  
    lg:flex items-center justify-center gap-x-4"
    >
      <div className="h-full basis-[20%]  -translate-y-10 flex flex-col items-center gap-6">
        <div className="w-full h-[55%] bg-myaccent rounded-full overflow-hidden">
          <Image
            src={
              'https://ik.imagekit.io/6qizpphtd1/Quizy%20heros/front-view-happy-woman-studio.png?'
            }
            alt="person"
            width={1000}
            height={2000}
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
          />
        </div>
        <div className="w-full h-1/3 bg-[#6cacc6] rounded-full overflow-hidden">
          <Image
            src={
              'https://ik.imagekit.io/6qizpphtd1/Quizy%20heros/smiling-afro-american-white-shirt-blue-background.png?'
            }
            alt="person"
            width={1000}
            height={2000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="h-[120vh] basis-[20%] -translate-y-32 flex flex-col items-center gap-6 ">
        <div className="w-full h-[40%] bg-[#ff80b7] rounded-full overflow-hidden">
          <Image
            src={
              'https://ik.imagekit.io/6qizpphtd1/Quizy%20heros/positive-nude-black-young-female-studio.png?'
            }
            alt="person"
            width={1000}
            height={2000}
            className="size-full  object-cover"
          />
        </div>
        <div className="w-full h-[50%] bg-[#ff80b7] rounded-full overflow-hidden">
          <Image
            src={
              'https://ik.imagekit.io/6qizpphtd1/Quizy%20heros/portrait-smiley-man.png?'
            }
            alt="person"
            width={1000}
            height={2000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[10%] bg-[#3e6575] rounded-full"></div>
      </div>
      <div className="h-full basis-[20%] translate-y-10 flex flex-col gap-6 items-center">
        <div className="w-full h-[40%] bg-[#3e6575] rounded-full overflow-hidden">
          <Image
            src={
              'https://ik.imagekit.io/6qizpphtd1/Quizy%20heros/black-boy-posing.png?'
            }
            alt="person"
            width={1000}
            height={2000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-[50%] bg-[#ff80b7] rounded-full overflow-hidden">
          <Image
            src={
              'https://ik.imagekit.io/6qizpphtd1/Quizy%20heros/portrait-cheerful-dark-skinned-beautiful-woman-with-curly-hair-smiles-toothily-wears-casual-yellow-jumper-has-good-mood-isolated-purple-background-happy-emotions-feelings-concept.png?'
            }
            alt="person"
            width={1000}
            height={2000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImages;

import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-[calc(100vh-60px)] flex items-center justify-center">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <div className="flex justify-center items-center">
          <Image
            src="/profile picture.jpeg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
        <div className="flex justify-center items-center text-center">
          <div>
            <p className="text-[80px] sm:text-[70px] font-bold leading-tight text-gray-300">I’m</p>
            <p className="text-[80px] sm:text-[70px] font-bold leading-tight text-gray-300">Laiba</p>
            <p className="text-[80px] sm:text-[70px] font-bold leading-tight text-gray-300">Noor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

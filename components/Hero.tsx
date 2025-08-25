import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [main, count] = useTypewriter({
    words: [
      "Hi! I'm Marlon G. 🙋‍♂️",
      "Youtube Content Creator 🎥",
      "Web / Mobile Developer ⚒️",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };

  const navigationOptions = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center overflow-hidden text-white z-0 px-3 sm:px-8 py-10">
      <BackgroundCircles />
      <div className="relative">
        <Image
          loader={myLoader}
          src="asd.jpg"
          alt="Profile Image"
          width={320}
          height={320}
          className="relative rounded-full h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 mx-auto object-cover shadow-2xl"
          priority
        />
        <div className="absolute inset-0 rounded-full ring-2 ring-[#00255e]/50 animate-pulse" />
      </div>

      <div className="relative mt-6 sm:mt-8 md:mt-10">
        <div className="border border-[#00255e] bg-[#00255e]/85 backdrop-blur-sm rounded-xl p-4 sm:p-6 z-20 max-w-[95vw] w-full sm:max-w-2xl shadow-xl text-[#00255e]">
          <h2 className="text-xs sm:text-sm uppercase pb-2 sm:pb-3 tracking-[3px] sm:tracking-[5px] font-semibold">
            Full Stack Web Developer
          </h2>

          <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold px-2 sm:px-4 lg:px-8 min-h-[2.5em] flex items-center justify-center">
            <span className="mr-2 sm:mr-3">{main}</span>
            <Cursor cursorColor="white" />
          </h1>

          <nav className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-4">
            {navigationOptions.map((option, index) => (
              <Link
                href={option.href}
                className="heroButton text-[11px] sm:text-xs md:text-sm hover:bg-[#00255e]/80 hover:text-white/90  transition-all duration-300"
                key={index}
              >
                {option.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Hero;

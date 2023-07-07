import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
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

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden text-white z-0">
      <BackgroundCircles />
      <Image
        loader={myLoader}
        src="asd.jpg"
        alt="Profile Image"
        width={320}
        height={320}
        className="relative rounded-full w-40 mx-auto"
      />
      <div className="border border-[#00255e] bg-[#00255e]  rounded-full p-4 z-20">
        <h2 className="text-sm uppercase pb-2 tracking-[5px] text-1xl font-semibold">
          Full Stack Web Developer
        </h2>
        <h1 className="text-2xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{main}</span>
          <Cursor cursorColor="white" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

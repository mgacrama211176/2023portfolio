import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const [main, count] = useTypewriter({
    words: [
      "Hi! I'm Marlon G.",
      "Full-Stack Web Developer",
      "Youtube Creator",
      "Intern",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        loader={myLoader}
        src="https://images.pexels.com/photos/5125787/pexels-photo-5125787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Profile Image"
        width={320}
        height={320}
        className="relative rounded-full h-re w-32 mx-auto"
      />
      <h1>
        <span>{main}</span>
        <Cursor cursorColor="#00255e" />
      </h1>
    </div>
  );
};

export default Hero;

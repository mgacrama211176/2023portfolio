import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <div className="h-screen flex flex-col relative text-center md:text-center md:flex-row max-w-8xl px-10 justify-evenly items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-[#CB890D]">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: [1, 0.5, 1] }}
      >
        <Image
          loader={myLoader}
          src="testing.jpg"
          alt="Profile Image"
          width={320}
          height={320}
          className="relative rounded-full w-42 mx-auto mb-0 md:mb-0 flex-shrink-0 object-cover md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        />
      </motion.div>

      <motion.div
        className="max-w-2xl"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: [1, 0.5, 1] }}
      >
        <h4 className="text-4xl font-semibold p-2 text-[#00255e]">
          Marlon Gacrama Jr
        </h4>
        <p className="text-base text-[#00255e]">
          Hi there! My name is Marlon and I am a dedicated and driven 4th year
          college student pursuing a career in web development. Currently, I am
          interning at Accenture, where I have the opportunity to apply my
          skills and learn from industry professionals. In addition to my
          passion for coding and web development, I also enjoy content creation
          and gaming. Throughout my studies and career, I have completed
          multiple web projects, both for personal projects and through
          freelance work. I am always looking for ways to improve and grow, both
          personally and professionally. In my free time, I enjoy staying
          up-to-date on the latest trends in the industry and playing online
          multiplayer games.
        </p>
      </motion.div>
    </div>
  );
};

export default About;

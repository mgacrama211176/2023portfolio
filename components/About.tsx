import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <div className="h-screen flex flex-col relative text-center lg:text-center lg:flex-row max-w-8xl pt-28 px-3 justify-evenly items-center ">
      <motion.h3
        className="absolute top-[110px]  md:top-[100px] lg:top-24 uppercase tracking-[20px] text-3xl text-[#CB890D] "
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: [1, 0.5, 1] }}
        viewport={{ once: true }}
      >
        About
      </motion.h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: [1, 0.5, 1] }}
        viewport={{ once: true }}
      >
        <Image
          loader={myLoader}
          src="/about/about.jpg"
          alt="About Image"
          width={0}
          height={0}
          className="relative rounded-full w-36 md:w-44 mx-auto mb-0 md:mb-0 flex-shrink-0 object-cover lg:w-64 lg:h-95 xl:w-[400px] xl:h-[500px]"
        />
      </motion.div>

      <motion.div
        className="max-w-2xl"
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: [1, 0.5, 1] }}
      >
        <h4 className="text-3xl font-semibold  text-[#00255e] pb-3">
          Marlon Gacrama Jr
        </h4>
        {/* <button className="rounded-full  border  p-2 text-[white] bg-[#CB890E]">Click me! </button> */}
        <p className=" text-[#00255e] text-sm md:text-md lg:text-lg">
          Hello! I'm Marlon, a Bachelor of Science in Information Technology
          graduate with experience as a full-stack developer. After enriching my
          skills during an internship at Accenture Inc., I've continued to grow
          professionally by working on diverse web and mobile development
          projects, both personal and freelance. I'm currently expanding my
          expertise into the field of artificial intelligence, eager to
          integrate AI solutions into my development work. Passionate about
          coding and always seeking new challenges, I thrive on learning and
          professional growth. In addition to development, I enjoy content
          creation and gaming, staying up-to-date with the latest industry
          trends. In my free time, you'll often find me playing online
          multiplayer games or exploring emerging technologies. I'm excited to
          bring my skills and enthusiasm to a dynamic team where I can
          contribute and continue to evolve in the tech industry.
        </p>
      </motion.div>
    </div>
  );
};

export default About;

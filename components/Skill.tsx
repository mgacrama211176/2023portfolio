import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  techStack: {
    title: string;
    image: string;
  };
};

const Skill = ({ directionLeft, techStack }: Props) => {
  return (
    <div className="group relative flex cursor-pointer items-center justify-center">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={techStack.image}
        className="rounded-full border border-[#00255E] object-center object-cover w-20 h-20 md:w-24 md:h-24 xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      {/* 
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div> */}
    </div>
  );
};

export default Skill;

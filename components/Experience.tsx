import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      className="h-screen flex flex-col relative  md:text-center md:flex-row justify-center items-center overflow-hidden text-left mx-auto"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: [1, 0.5, 1] }}
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-2xl text-[#CB890D]">
        Experience
      </h3>

      <div className="flex flex-row w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory lg:overflow-auto md:max-w-max ">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

interface Experiences {
  picture: string;
  position: string;
  startedEnd: string;
  workLoad: string;
}

const userExperience: Experiences[] = [
  {
    picture: "karmic.png",
    position: "Inter",
    startedEnd: "2023",
    workLoad: "Automation Testing",
  },
];

const Experience = (props: Props) => {
  return (
    <motion.div
      className="h-screen w-screen flex flex-col relative md:text-center md:flex-row justify-evenly items-center overflow-hidden text-left mx-auto max-w-full px-10"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: [1, 0.5, 1] }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <h3 className="absolute top-28 md:top-20 uppercase tracking-[10px] md:tracking-[20px] text-3xl text-[#CB890D]">
        Experience
      </h3>

      <div className="flex flex-row w-full space-x-3 overflow-x-scroll snap-x snap-mandatory lg:overflow-auto md:max-w-max scrollbar-thin scrollbar-track-[#00255e]/20 scrollbar-thumb-[#D6A23F]/100">
        {userExperience.map((work) => (
          <div key={work.workLoad}>
            <ExperienceCard />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

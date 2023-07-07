import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {
  techStack: {
    title: string;
    image: string;
  };
};

const Techs = [
  { title: "HTML5", image: "/Skills/html5.png" },
  { title: "CSS3", image: "" },
  { title: "javascript", image: "" },
  { title: "ReactJS", image: "" },
];

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-3xl text-[#CB890D]">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#CB890D] text-sm">
        Hover over a skill for skill profiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {Techs.map((skill) => (
          <Skill key={skill.title} techStack={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

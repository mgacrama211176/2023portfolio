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
  { title: "CSS3", image: "/Skills/css.png" },
  { title: "javascript", image: "/Skills/js.png" },
  { title: "ReactJS", image: "/Skills/react.png" },
  { title: "MongoDB", image: "/Skills/html5.png" },
  { title: "NodeJS", image: "/Skills/css.png" },
  { title: "NextJS", image: "/Skills/css.png" },
  { title: "Express", image: "/Skills/js.png" },
  { title: "Expo", image: "/Skills/react.png" },
  { title: "React Native", image: "/Skills/react.png" },
  { title: "Php", image: "/Skills/react.png" },
  { title: "Python", image: "/Skills/react.png" },
  { title: "Selenium", image: "/Skills/react.png" },
  { title: "Salseforce", image: "/Skills/react.png" },
];

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-28 uppercase tracking-[15px] text-2xl md:text-3xl text-[#CB890D]">
        Technologies
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

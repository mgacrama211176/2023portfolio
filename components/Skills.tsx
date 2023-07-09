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
  { title: "MongoDB", image: "/Skills/mongodb.gif" },
  { title: "NodeJS", image: "/Skills/node.webp" },
  { title: "NextJS", image: "/Skills/next.jpeg" },
  { title: "Express", image: "/Skills/express.png" },
  { title: "Expo", image: "/Skills/expo.png" },
  { title: "tailwind", image: "/Skills/tailwind.png" },
  { title: "styled", image: "/Skills/styled.png" },
  { title: "Php", image: "/Skills/php.png" },
  { title: "Python", image: "/Skills/python.png" },
  { title: "Selenium", image: "/Skills/selenium.png" },
  { title: "Salseforce", image: "/Skills/salesforce.jpeg" },
  { title: "Figma", image: "/Skills/figma.png" },
  { title: "XD", image: "/Skills/xd.png" },
  { title: "canva", image: "/Skills/canva.png" },
];

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-28 md:top-24 uppercase tracking-[15px] text-2xl md:text-3xl text-[#CB890D]">
        Technologies
      </h3>

      <div className="grid grid-cols-4 gap-5 lg:grid-cols-5">
        {Techs.map((skill) => (
          <Skill key={skill.title} techStack={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

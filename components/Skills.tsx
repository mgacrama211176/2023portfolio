import React from "react";
import { motion } from "framer-motion";


type Props = {};

const Skills = (props: Props) => {
  return <motion.div className="h-screen w-screen flex flex-col relative md:text-center md:flex-row justify-evenly items-center overflow-hidden text-left mx-auto max-w-full px-10">
    <h3 className="absolute top-28 uppercase tracking-[20px] text-3xl text-[#CB890D]">Skills</h3>
    </motion.div>;
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      className="relative flex justify-center items-center text-center"
      initial={{ opacity: 0 }}
      animate={{
        scale: [0, 1, 2, 3, 4, 3, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{ duration: 4 }}
    >
      <div className="absolute border border-[#00255e] h-[500px] w-[500px] mt-52 animate-clockRotate" />

      <div className="border border-[#00255e] h-[500px] w-[500px] absolute mt-52 animate-counterRotate" />
    </motion.div>
  );
};

export default BackgroundCircles;
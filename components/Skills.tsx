import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { innerCircleSkills, outerCircleSkills } from "./data";

// Reusable skill icon component
const SkillIcon = ({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size: string;
}) => (
  <motion.div
    className={`${size} bg-white/80 rounded-full backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300`}
    whileHover={{ scale: 1.3 }}
  >
    <Image src={src} alt={alt} fill className="rounded-full object-cover " />
  </motion.div>
);

// Reusable rotating circle component
const RotatingCircle = ({
  skills,
  radius,
  direction,
  duration,
  iconSize,
}: {
  skills: typeof innerCircleSkills;
  radius: number;
  direction: number;
  duration: number;
  iconSize: string;
}) => {
  // Extract numeric size from className for centering calculation
  const sizeMatch = iconSize.match(/w-(\d+)/);
  const baseSize = sizeMatch ? parseInt(sizeMatch[1]) * 4 : 32; // Convert Tailwind units to pixels
  const offset = baseSize / 2;

  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: direction * 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={skill.title}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <SkillIcon src={skill.image} alt={skill.title} size={iconSize} />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const Skills = () => {
  const sizes = {
    container:
      "w-[800px] h-[800px] sm:w-[800px] sm:h-[800px] md:w-[800px] md:h-[800px] lg:w-[800px] lg:h-[800px]",
    innerRadius: { mobile: 150, tablet: 150, desktop: 200 },
    outerRadius: { mobile: 300, tablet: 300, desktop: 300 },
    innerIconSize: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16",
    outerIconSize: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16",
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className={`relative ${sizes.container}`}>
        {/* Static Center Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="uppercase tracking-[8px] sm:tracking-[15px] text-xl sm:text-2xl md:text-3xl text-[#CB890D] text-center bg-white/50 backdrop-blur-sm rounded-full h-32 w-32 sm:h-32 sm:w-32 md:h-32 md:w-32 flex items-center justify-center">
            Tech Skill
          </div>
        </div>

        {/* Inner Circle */}
        <RotatingCircle
          skills={innerCircleSkills}
          radius={sizes.innerRadius.desktop}
          direction={1}
          duration={30}
          iconSize={sizes.innerIconSize}
        />

        {/* Outer Circle */}
        <RotatingCircle
          skills={outerCircleSkills}
          radius={sizes.outerRadius.desktop}
          direction={-1}
          duration={35}
          iconSize={sizes.outerIconSize}
        />
      </div>
    </div>
  );
};

export default Skills;

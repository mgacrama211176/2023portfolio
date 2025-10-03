import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { innerCircleSkills, outerCircleSkills } from "./data";

// Types for better type safety (SOLID - Interface Segregation)
interface SkillIconProps {
  src: string;
  alt: string;
  size: string;
}

interface RotatingCircleProps {
  skills: typeof innerCircleSkills;
  radius: number;
  direction: number;
  duration: number;
  iconSize: string;
}

interface SkillPosition {
  x: number;
  y: number;
  angle: number;
}

// Reusable skill icon component (DRY - Single Responsibility)
const SkillIcon = ({ src, alt, size }: SkillIconProps) => (
  <motion.div
    className={`${size} bg-white/80 rounded-full backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 relative`}
    whileHover={{ scale: 1.3 }}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="rounded-full object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </motion.div>
);

// Utility function for calculating positions (DRY - Don't Repeat Yourself)
const calculateSkillPositions = (
  skillsLength: number,
  radius: number
): SkillPosition[] => {
  return Array.from({ length: skillsLength }, (_, index) => {
    const angle = (index / skillsLength) * Math.PI * 2;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      angle,
    };
  });
};

// Reusable rotating circle component (SOLID - Single Responsibility)
const RotatingCircle = ({
  skills,
  radius,
  direction,
  duration,
  iconSize,
}: RotatingCircleProps) => {
  // Memoize positions to prevent recalculation (KISS - Keep It Simple)
  const positions = useMemo(
    () => calculateSkillPositions(skills.length, radius),
    [skills.length, radius]
  );

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
        const { x, y } = positions[index];

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

// Configuration constants (KISS - Keep It Simple)
const SKILLS_CONFIG = {
  container:
    "w-[800px] h-[800px] sm:w-[800px] sm:h-[800px] md:w-[800px] md:h-[800px] lg:w-[800px] lg:h-[800px]",
  innerRadius: 200,
  outerRadius: 300,
  innerIconSize: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16",
  outerIconSize: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16",
  innerDuration: 30,
  outerDuration: 35,
} as const;

// Loading skeleton component (DRY - Reusable)
const LoadingSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className={`relative ${SKILLS_CONFIG.container}`}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="uppercase tracking-[8px] sm:tracking-[15px] text-xl sm:text-2xl md:text-3xl text-[#CB890D] text-center bg-white/50 backdrop-blur-sm rounded-full h-32 w-32 sm:h-32 sm:w-32 md:h-32 md:w-32 flex items-center justify-center">
          Tech Skill
        </div>
      </div>
    </div>
  </div>
);

// Center text component (SOLID - Single Responsibility)
const CenterText = () => (
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
    <div className="uppercase tracking-[8px] sm:tracking-[15px] text-xl sm:text-2xl md:text-3xl text-[#CB890D] text-center bg-white/50 backdrop-blur-sm rounded-full h-32 w-32 sm:h-32 sm:w-32 md:h-32 md:w-32 flex items-center justify-center">
      Tech Skill
    </div>
  </div>
);

// Main Skills component (SOLID - Open/Closed Principle)
const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show loading skeleton during hydration (KISS - Keep It Simple)
  if (!isMounted) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className={`relative ${SKILLS_CONFIG.container}`}>
        <CenterText />

        <RotatingCircle
          skills={innerCircleSkills}
          radius={SKILLS_CONFIG.innerRadius}
          direction={1}
          duration={SKILLS_CONFIG.innerDuration}
          iconSize={SKILLS_CONFIG.innerIconSize}
        />

        <RotatingCircle
          skills={outerCircleSkills}
          radius={SKILLS_CONFIG.outerRadius}
          direction={-1}
          duration={SKILLS_CONFIG.outerDuration}
          iconSize={SKILLS_CONFIG.outerIconSize}
        />
      </div>
    </div>
  );
};

export default Skills;

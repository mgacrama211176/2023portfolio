import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {
  company: {
    id: number;
    picture: string;
    position: string;
    companyName: string;
    techUsed: Array<string>;
    startedEnd: string;
    workLoad: Array<string>;
  };
};

interface Experiences {
  id: number;
  picture: string;
  position: string;
  companyName: string;
  techUsed: Array<string>;
  startedEnd: string;
  workLoad: Array<string>;
}

const userExperience: Experiences[] = [
  {
    id: 1,
    picture: "/Experience/ACN/ACN.png",
    position: "Intern",
    companyName: "Accenture Inc.",
    techUsed: [
      "/Skills/selenium.png",
      "/Experience/ACN/python.png",
      "/Experience/ACN/saleforce.png",
    ],
    startedEnd: "January 10,2023 - April 4,2023",
    workLoad: [
      "Automation Testing",
      "System Automation",
      "Salesforce Modules",
      "Project Flow (AGILE)",
      "Japanese Learning N5 Level",
    ],
  },
  {
    id: 2,
    picture: "/Experience/ACN/freelancer.png",
    position: "Freelance",
    companyName: "Project Based",
    techUsed: [
      "/Skills/react.png",
      "/Skills/node.webp",
      "/Skills/mongodb.gif",
      "/Skills/express.png",
      "/Skills/github.png",
    ],
    startedEnd: "November 2022 - Present",
    workLoad: [
      "UI/UX Design",
      "Database management",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    id: 3,
    picture: "/Experience/ACN/SOS.jpeg",
    position: "Web Developer",
    companyName: "Staff Outsourcing Solutions",
    techUsed: [
      "/Skills/node.webp",
      "/Skills/mongodb.gif",
      "/Skills/express.png",
      "/Skills/github.png",
      "/Skills/next.jpeg",
      "/Skills/tailwind.png",
    ],
    startedEnd: "Sept 2023 - Sept 2024",
    workLoad: [
      "Frontend Development",
      "Backend Development",
      "Database Management",
      "API Integration",
      "Project Management",
      "UI/UX Design",
    ],
  },
];

const Experience = (props: Props) => {
  const { company } = props;
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
          <div key={work.id}>
            <ExperienceCard company={work} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

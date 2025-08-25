import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
  picture: string;
  position: string;
  companyName: string;
  techUsed: Array<string>;
  startedEnd: string;
  workLoad: Array<string>;
}

const userExperience: Experiences[] = [
  {
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
    picture: "/Experience/ACN/KK.png",
    position: "Full Stack Web Developer",
    companyName: "Kreativ Kat Digital Marketing",
    techUsed: [
      "/Skills/node.webp",
      "/Skills/mongodb.gif",
      "/Skills/express.png",
      "/Skills/github.png",
      "/Skills/next.jpeg",
      "/Skills/tailwind.png",
    ],
    startedEnd: "Dec 2024 - Present",
    workLoad: [
      "Full Stack Development",
      "API Integration",
      "Project Management",
      "UI/UX Design",
      "SEO",
      "Technical Head",
    ],
  },
  {
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
  {
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
];

const Experience = (props: Props) => {
  return (
    <section className="py-24 bg-gradient-to-t from-white to-gray-500/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#00255e] via-[#CB890D] to-[#00255e] bg-clip-text text-transparent pb-2">
              Professional Experience
            </h2>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Line with Glowing Effect */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00255e] via-[#CB890D] to-[#00255e] transform -translate-x-1/2">
            <div className="absolute inset-0 animate-pulse bg-white/20" />
          </div>

          {/* Experience Cards */}
          <div className="space-y-16 relative">
            {userExperience.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:pr-12"
                }`}
              >
                {/* Timeline Dot with Pulse Effect */}
                <div
                  className={`absolute top-8 ${
                    index % 2 === 0 ? "md:-left-2.5" : "md:-right-2.5"
                  } hidden md:block`}
                >
                  <div className="w-5 h-5 rounded-full bg-[#CB890D] border-4 border-white shadow-lg relative z-10" />
                  <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-[#CB890D] animate-ping" />
                  <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-[#CB890D] animate-pulse" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 relative group hover:shadow-xl transition-all duration-500"
                >
                  {/* Glass Effect Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Company Logo - Floating with 3D effect */}
                  <div className="absolute -top-6 left-6">
                    <div className="relative w-14 h-14">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00255e] to-[#CB890D] rounded-xl rotate-6 transform group-hover:rotate-12 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white rounded-xl p-2.5 shadow-lg transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                        <Image
                          src={work.picture}
                          alt={work.companyName}
                          width={50}
                          height={50}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-10">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-[#00255e] group-hover:text-[#CB890D] transition-colors duration-300">
                        {work.position}
                      </h3>
                      <p className="text-[#CB890D] font-medium mt-1">
                        {work.companyName}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {work.startedEnd}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        {work.workLoad.map((task, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 group/task"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 bg-[#CB890D]/40 rounded-full group-hover/task:bg-[#CB890D] group-hover/task:scale-150 transition-all duration-300" />
                            <span className="text-sm text-gray-600">
                              {task}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack with Hover Effects */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-3">
                        {work.techUsed.map((tech, i) => (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="w-10 h-10 bg-white rounded-full  shadow-md hover:shadow-xl transition-all duration-300"
                          >
                            <Image
                              src={tech}
                              alt="Technology"
                              width={50}
                              height={50}
                              className="w-full h-full object-contain rounded-full "
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

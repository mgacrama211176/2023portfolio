import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";

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

const ExperienceCard = (props: Props) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };

  const { company } = props;

  return (
    <article className="flex flex-col items-center space-y-4 flex-shrink-0 w-[400px] h-[600px] md:w-[500px] xl:w-[900] snap-center bg-[#00255e] border rounded-xl text-[white] p-10 hover:opacity-100 opacity-80 transition-opacity duration-200 cursor-pointer overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          loader={myLoader}
          src={company.picture}
          alt="Companies"
          width={250}
          height={250}
          className="relative rounded-full w-28 h-28 xl:w-[150px] xl:h-[150px] mx-auto border object-center object-contain bg-white"
        />
      </motion.div>

      <div className="px-0 md:px-10 flex flex-col items-center">
        <h4 className="text-2xl font-light md:text-2xl">{company.position}</h4>
        <p className="font-bold text-2xl md:text-xl mt-1">
          {company.companyName}
        </p>
        <div className="flex space-x-2 my-2">
          {company.techUsed.map((tech) => (
            <Image
              key={tech}
              loader={myLoader}
              src={tech}
              alt="Companies"
              width={320}
              height={320}
              className="relative rounded-full w-10 h-10 mx-auto border object-cover object-center"
            />
          ))}

          {/* Accounts */}
        </div>
        <p className="uppercase py-2 md:py-5 text-gray-300">
          {company.startedEnd}
        </p>
        <ul className="list-disc space-y-2 md:space-y-4 ml-14 md:ml-5 text-lg">
          {company.workLoad.map((workLoad) => (
            <li key={workLoad}>{workLoad}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

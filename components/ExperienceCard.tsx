import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import axios from "axios";

type Props = {};

const ExperienceCard = (props: Props) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <article className="flex flex-col items-center space-y-4 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[900] snap-center bg-[#00255e] border rounded-xl text-[white] p-10 hover:opacity-100 opacity-80 transition-opacity duration-200 cursor-pointer overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          loader={myLoader}
          src="/Experience/ACN/ACN.png"
          alt="Companies"
          width={250}
          height={250}
          className="relative rounded-full w-28 h-28 xl:w-[150px] xl:h-[150px] mx-auto border object-center object-contain bg-white"
        />
      </motion.div>

      <div className="px-0 md:px-10 flex flex-col items-center">
        <h4 className="text-2xl font-light md:text-2xl">Intern</h4>
        <p className="font-bold text-2xl md:text-xl mt-1">Accenture Inc.</p>
        <div className="flex space-x-2 my-2">
          <Image
            loader={myLoader}
            src="/Skills/selenium.png"
            alt="Companies"
            width={320}
            height={320}
            className="relative rounded-full w-10 h-10 mx-auto border object-cover object-center"
          />
          <Image
            loader={myLoader}
            src="/Experience/ACN/python.png"
            alt="Companies"
            width={320}
            height={320}
            className="relative rounded-full w-10 h-10 mx-auto border object-cover object-center bg-white"
          />
          <Image
            loader={myLoader}
            src="/Experience/ACN/saleforce.png"
            alt="Companies"
            width={320}
            height={320}
            className="relative rounded-full w-10 h-10 mx-auto border object-cover object-center"
          />
          {/* Accounts */}
          {/* Accounts */}
        </div>
        <p className="uppercase py-2 md:py-5 text-gray-300">
          January 10,2023 - April 4,2023
        </p>
        <ul className="list-disc space-y-2 md:space-y-4 ml-14 md:ml-5 text-lg">
          <li>System Automation</li>
          <li>Salesforce Modules</li>
          <li>
            Project Flow <p>(from documentation to development)</p>{" "}
          </li>
          <li>Japanese Learning (N5 Level)</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

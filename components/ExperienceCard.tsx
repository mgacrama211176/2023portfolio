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
          src="TE.png"
          alt="Companies"
          width={320}
          height={320}
          className="relative rounded-full w-32 h-32 xl:w-[150px] xl:h-[150px] mx-auto border object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10 flex flex-col items-center">
        <h4 className="text-4xl font-light md:text-2xl">Virtual Assistant</h4>
        <p className="font-bold text-2xl md:text-xl mt-1">Tasks Everyday</p>
        <div className="flex space-x-2 my-2">
          <Image
            loader={myLoader}
            src="karmic.png"
            alt="Companies"
            width={320}
            height={320}
            className="relative rounded-full w-10 h-10 mx-auto border object-cover object-center"
          />
          <Image
            loader={myLoader}
            src="karmic.png"
            alt="Companies"
            width={320}
            height={320}
            className="relative rounded-full w-10 h-10 mx-auto border object-cover object-center"
          />
          <Image
            loader={myLoader}
            src="karmic.png"
            alt="Companies"
            width={320}
            height={320}
            className="relative rounded-full w-10 h-10 mx-auto border object-cover object-center"
          />
          {/* Accounts */}
          {/* Accounts */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work: 2016 - Ended: 2017
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

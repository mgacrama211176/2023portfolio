import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <article className="flex flex-col items-center space-y-7 flex-shrink-0 w-[500px] md:w-[500px] snap-center bg-[#00255e] border rounded-xl text-[white] py-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          loader={myLoader}
          src="TE.png"
          alt="Companies"
          width={320}
          height={320}
          className="relative rounded-full w-32 mx-auto border object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Virtual Assistant</h4>
        <p className="font-bold text-2xl mt-1">Tasks Everyday</p>
        <div className="flex space-x-2 my-2">
          <Image
            loader={myLoader}
            src="karmic.png"
            alt="Companies"
            width={320}
            height={320}
            className="relative rounded-full w-10 mx-auto border object-cover object-center"
          />
          {/* Accounts */}
          {/* Accounts */}
        </div>
        <p className="uppercase py-5">Started work: 2016 - Ended: 2017</p>
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

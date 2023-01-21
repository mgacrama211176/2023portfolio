import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

interface experience{
  picture : string;
  position : string;
  startedEnd : string;
  workLoad : string;

}

const userExperience : experience[] =[
  {  picture : 'karmic.png', position: 'Virtual Assistant', startedEnd:'2016-2017',workLoad:''},
]

console.log(userExperience)

const Experience = (props: Props) => {
  return (
    <motion.div
      className="h-screen flex flex-col relative  md:text-center md:flex-row justify-center items-center overflow-hidden text-left mx-auto"
      initial={{ x: -200, opacity: 0 }}
      whileInView={{ x: 0, opacity: [1, 0.5, 1] }}
      viewport={{once:true}}
    >
      <h3 className="absolute top-28 uppercase tracking-[20px] text-md text-[#CB890D]">
        Experience
      </h3>

      <div className="flex flex-row w-full space-x-5 overflow-x-scroll  snap-x snap-mandatory lg:overflow-auto md:max-w-max ">
        
      {  
   userExperience.map((work)=>
   (
        <ExperienceCard work={work} key={work._id}/>
    )
  )
}


      </div>
    </motion.div>
  );
};

export default Experience;

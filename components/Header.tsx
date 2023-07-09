import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-1">
      {/* SOCIAL ICONS */}
      <motion.div
        className="flex flex-row items-center mx-auto"
        initial={{ y: 1000, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="https://www.facebook.com/maruronu.gakurama.3/"
          id="facebook"
          fgColor="#00255E"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/marlongacrama/"
          fgColor="#00255E"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/channel/UCmewiMiq1dSV1vlX6CGs_aQ"
          fgColor="#00255E"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/gakurama_kun02/"
          fgColor="#00255E"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/mgacrama211176"
          fgColor="#00255E"
          bgColor="transparent"
        />
      </motion.div>

      {/* CONTACT ICON */}
      <motion.div
        initial={{ y: 1000, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row gap-3 mx-auto"
      >
        <Link href="#contact">
          <button className="flex flex-row items-center justify-center cursor-pointer bg-[#00255E] rounded-3xl hover:bg-[#D6A23F] ease-in-out duration-500">
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="white"
              bgColor="transparent"
            />

            <p className="uppercase hidden md:inline-flex text-sm text-white pr-3 font-medium">
              Contact ME!
            </p>
          </button>
        </Link>

        <a href="/files/cv.pdf" target="_blank" download>
          <button className="flex flex-row items-center justify-center cursor-pointer bg-[#00255E] rounded-3xl hover:bg-[#D6A23F] ease-in-out duration-500 p-4 gap-2">
            <BsPerson className="text-white sm:w-6" />
            <p className="uppercase hidden md:inline-flex text-sm text-white pr-3 font-medium">
              Download CV
            </p>
          </button>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;

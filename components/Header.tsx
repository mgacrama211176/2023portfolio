import React from "react";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row items-start justify-between w-full  z-20 xl:items-center p-1">
      {/* SOCIAL ICONS */}
      <motion.div
        className="flex flex-row items-center mx-auto"
        initial={{ y: 1000, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <a
          href="https://www.facebook.com/maruronu.gakurama.3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00255E] hover:text-[#D6A23F] transition-colors duration-300 p-2"
          aria-label="Facebook"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/marlongacrama/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00255E] hover:text-[#D6A23F] transition-colors duration-300 p-2"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCmewiMiq1dSV1vlX6CGs_aQ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00255E] hover:text-[#D6A23F] transition-colors duration-300 p-2"
          aria-label="YouTube"
        >
          <FaYoutube size={24} />
        </a>
        <a
          href="https://www.instagram.com/gakurama_kun02/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00255E] hover:text-[#D6A23F] transition-colors duration-300 p-2"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://github.com/mgacrama211176"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00255E] hover:text-[#D6A23F] transition-colors duration-300 p-2"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
      </motion.div>

      {/* CONTACT ICON */}
      <motion.div
        initial={{ y: 1000, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row gap-3 mx-auto"
      >
        <button className="flex flex-row items-center justify-center cursor-pointer bg-[#00255E] rounded-3xl hover:bg-[#D6A23F] ease-in-out duration-500">
          <FaEnvelope className="text-white" size={20} />
          <p className="uppercase hidden md:inline-flex text-sm text-white pr-3 font-medium ml-2">
            Lets talk!
          </p>
        </button>

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

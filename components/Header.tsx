import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const [colorDefault, setColorDefault] = useState({
    facebook: "transparent",
  });

  return (
    <header className="sticky top-0 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      {/* SOCIAL ICONS */}
      <motion.div
        className="flex flex-row items-center gap-3"
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
      <motion.button
        className="flex flex-row items-center justify-center cursor-pointer bg-[#00255E] rounded-3xl"
        initial={{ y: 1000, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-white pr-3 font-medium">
          Contact ME!
        </p>
      </motion.button>
    </header>
  );
};

export default Header;

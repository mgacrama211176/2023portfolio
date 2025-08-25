import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 100}`;
  };
  return (
    <section className="h-full bg-gradient-to-b from-white to-gray-500/50 relative">
      {/* Section Header */}
      <div className="h-24 ">
        <motion.h2
          className="text-5xl font-bold bg-gradient-to-r from-[#00255e] via-[#CB890D] to-[#00255e] bg-clip-text text-transparent pb-2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About the developer
        </motion.h2>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Image Column */}
          <motion.div
            className="md:col-span-5 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl bg-white p-2">
              <Image
                loader={myLoader}
                src="/about/about.jpg"
                alt="Marlon Gacrama"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-lg"
                priority
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="md:col-span-7 lg:col-span-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#00255e]">
                Marlon Gacrama Jr
              </h3>
              <p className="text-[#CB890D] font-medium">
                Full Stack Developer & Tech Enthusiast
              </p>
            </div>

            <div className="space-y-4 text-gray-600">
              <p>
                Hi, I&apos;m Marlon — a BS Information Technology graduate and
                full-stack developer with hands-on experience in web and mobile
                projects. I started my journey with an internship at Accenture
                Inc., where I built automation solutions, and have since grown
                through freelance and personal projects that strengthened my
                skills in Next.js, React, Firebase, and more.
              </p>

              <div className="py-2">
                <div className="h-px bg-gradient-to-r from-[#00255e]/5 via-[#00255e]/20 to-[#00255e]/5" />
              </div>

              <p>
                I&apos;m currently expanding into artificial intelligence,
                aiming to integrate smart AI solutions into real-world
                applications. I enjoy tackling challenges, learning new
                technologies, and turning ideas into functional, user-friendly
                products.
              </p>

              <p>
                Outside of coding, I&apos;m into content creation, Nintendo
                games, and keeping up with the latest tech and gaming trends.
                Whether it&apos;s building apps, solving problems, or exploring
                emerging technologies, I&apos;m always excited to grow and
                contribute to dynamic teams in the tech industry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

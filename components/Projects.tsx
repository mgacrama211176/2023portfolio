import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

interface Project {
  title: string;
  about: string;
  image: string;
  source?: string;
  demo?: string;
  technologies: Array<{ title: string; image: string }>;
}

const projects: Project[] = [
  {
    title: "Gether",
    about:
      "A social media platform that connects people with similar interests. Features include real-time chat, post sharing, and event organization.",
    image: "/Projects/getherPNG.png",
    source: "https://github.com/marlonlongm/gether-app",
    demo: "https://gether-app.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "FilAnime",
    about:
      "An anime streaming platform with a vast collection of anime series and movies. Features include user recommendations and watchlist management.",
    image: "/Projects/filanime.png",
    source: "https://github.com/marlonlongm/filanime-app",
    demo: "https://filanime.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "E-Loan",
    about:
      "A comprehensive loan management system for financial institutions. Includes features for loan application, approval workflow, and payment tracking.",
    image: "/Projects/E-Loan.png",
    source: "https://github.com/marlonlongm/e-loan",
    demo: "https://e-loan.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "DM-TAS",
    about:
      "A task automation system for document management. Streamlines workflow processes and enhances productivity through automated document handling.",
    image: "/Projects/DMtas.png",
    source: "https://github.com/marlonlongm/dm-tas",
    demo: "https://dm-tas.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Talpakan",
    about:
      "An online gaming platform focused on strategic gameplay. Features include real-time multiplayer matches and leaderboard systems.",
    image: "/Projects/talpakan.png",
    source: "https://github.com/marlonlongm/talpakan",
    demo: "https://talpakan.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Creators Value",
    about:
      "An online gaming platform focused on strategic gameplay. Features include real-time multiplayer matches and leaderboard systems.",
    image: "/Projects/talpakan.png",
    source: "https://github.com/marlonlongm/talpakan",
    demo: "https://talpakan.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Featbooks",
    about:
      "An online gaming platform focused on strategic gameplay. Features include real-time multiplayer matches and leaderboard systems.",
    image: "/Projects/talpakan.png",
    source: "https://github.com/marlonlongm/talpakan",
    demo: "https://talpakan.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Rod Martin",
    about:
      "An online gaming platform focused on strategic gameplay. Features include real-time multiplayer matches and leaderboard systems.",
    image: "/Projects/talpakan.png",
    source: "https://github.com/marlonlongm/talpakan",
    demo: "https://talpakan.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Tasks Masters Group",
    about:
      "An online gaming platform focused on strategic gameplay. Features include real-time multiplayer matches and leaderboard systems.",
    image: "/Projects/talpakan.png",
    source: "https://github.com/marlonlongm/talpakan",
    demo: "https://talpakan.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Jet's Pizza",
    about:
      "An online gaming platform focused on strategic gameplay. Features include real-time multiplayer matches and leaderboard systems.",
    image: "/Projects/talpakan.png",
    source: "https://github.com/marlonlongm/talpakan",
    demo: "https://talpakan.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
];

const TechBadge = ({
  tech,
  index,
  total,
}: {
  tech: { title: string; image: string };
  index: number;
  total: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group relative"
  >
    <div className="w-8 h-8 bg-black/30 rounded-lg backdrop-blur-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-black/50 border border-white/10">
      <Image
        src={tech.image}
        alt={tech.title}
        width={32}
        height={32}
        className="w-full h-full object-contain p-1.5 filter brightness-90 group-hover:brightness-110"
      />
    </div>
  </motion.div>
);

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative bg-black/20 hover:bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300"
  >
    {/* Project Image Container */}
    <div className="relative aspect-[16/10] overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

      {/* Overlay Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <h3 className="text-lg font-bold text-white group-hover:text-[#CB890D] transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
      </div>
    </div>

    {/* Content Container */}
    <div className="relative p-4 border-t border-white/10">
      <p className="text-white/80 text-xs leading-relaxed mb-4 line-clamp-2">
        {project.about}
      </p>

      {/* Tech Stack */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((tech, idx) => (
            <TechBadge
              key={tech.title}
              tech={tech}
              index={idx}
              total={project.technologies.length}
            />
          ))}
          {project.technologies.length > 6 && (
            <span className="text-xs text-[#CB890D] flex items-center">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-300"
          >
            <SocialIcon
              url={project.source}
              className="!h-4 !w-4"
              fgColor="#fff"
              bgColor="transparent"
            />
            Source
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#CB890D] border border-[#CB890D]/30 hover:bg-[#CB890D] hover:text-white rounded-lg transition-all duration-300"
          >
            <SocialIcon
              url={project.demo}
              className="!h-4 !w-4"
              fgColor="currentColor"
              bgColor="transparent"
            />
            Website
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(8);
  const projectsPerPage = 4;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const loadMore = () => {
    setVisibleProjects((prev) =>
      Math.min(prev + projectsPerPage, projects.length)
    );
  };

  if (!isMounted) return null;

  return (
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-[#00255e] to-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-[#CB890D]">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            A showcase of my best work, demonstrating expertise in web
            development, mobile applications, and full-stack solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={loadMore}
              className="group relative px-6 py-3 text-sm font-medium text-white bg-[#CB890D]/20 hover:bg-[#CB890D] rounded-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Load More Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#CB890D]/80 to-[#CB890D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

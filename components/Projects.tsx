import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { projects } from "./data";
import { Project } from "./types";

const TechBadge = ({
  tech,
  index,
}: {
  tech: { title: string; image: string };
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
    className="group relative"
  >
    <div className="w-8 h-8 bg-white rounded-lg shadow-sm transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
      <Image
        src={tech.image}
        alt={tech.title}
        width={32}
        height={32}
        className="w-full h-full object-cover p-1.5"
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
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group bg-white backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    {/* Project Image */}
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transform transition-transform duration-500 group-hover:scale-105"
        priority
      />
      <div className="absolute inset-0 bg-[#00255e]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Hover Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-sm line-clamp-3">{project.about}</p>
      </div>
    </div>

    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#00255e] transition-colors duration-300 mb-4">
        {project.title}
      </h3>

      {/* Tech Stack */}
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-600 mb-3">Technologies</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((tech, idx) => (
            <TechBadge key={tech.title} tech={tech} index={idx} />
          ))}
          {project.technologies.length > 6 && (
            <span className="text-xs text-[#CB890D] flex items-center font-medium">
              +{project.technologies.length - 6} more
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-4 border-t border-gray-100 items-center justify-center">
        {project.source && (
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
          >
            <SocialIcon
              url={project.source}
              className="!h-4 !w-4"
              fgColor="currentColor"
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
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#00255e] hover:bg-[#00255e]/90 rounded-lg transition-colors duration-300"
          >
            <SocialIcon
              url={project.demo}
              className="!h-4 !w-4"
              fgColor="currentColor"
              bgColor="transparent"
            />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const Projects = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const projectsPerPage = 3;

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
    <section className="relative min-h-screen bg-white py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#00255e]/5" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#CB890D]/5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Featured <span className="text-[#CB890D]">Projects</span>
          </motion.h2>
          <p className="text-gray-600 text-lg">
            A showcase of my best work, demonstrating expertise in web
            development, mobile applications, and full-stack solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Load More */}
        {visibleProjects < projects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={loadMore}
              className="group relative px-8 py-3 text-base font-medium text-[#00255e] border-2 border-[#00255e] hover:text-white rounded-xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Load More Projects</span>
              <div className="absolute inset-0 bg-[#00255e] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

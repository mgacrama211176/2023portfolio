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
      "Gether is a dedicated social media platform designed for gamers to connect, communicate, and collaborate with others who share the same interests and playstyle. With streamlined features such as real-time chat, post sharing, and event organization, the app makes it easy for gamers to find like-minded players, build communities, and create meaningful gaming experiences together.",
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
      "FilAnime is a platform that blends social media, streaming, and networking for animators and anime enthusiasts. It gives artists a space to showcase their work, gain visibility, and connect with others in the industry. Employers can easily discover talented animators, while the community fosters collaboration through sharing, feedback, and creative exchange.",
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
      "E-Loan is a comprehensive loan management system designed for financial institutions to streamline their lending operations. It provides tools for loan application, approval workflows, and payment tracking, ensuring efficiency and accuracy at every stage. With user-friendly features and secure data handling, E-Loan helps institutions improve client experience, simplify processes, and maintain better financial oversight.",
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
      "DM-TAS is the official website for Document Management Tasmania, showcasing a range of business services and solutions. The site presents offerings such as multifunction printers, workflow digitisation, digital printing (e.g., business cards, brochures), signage, embedded partnerships for process integration, and custom jigsaw puzzles, all designed to empower organizations with efficient, scalable, and integrated document and media services.",
    image: "/Projects/DMtas.png",
    source: "",
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
      "Talpakan is a retro-style game for two players, each commanding a chicken in a fast-paced duel. Gameplay involves strategic attacks, random chance bonuses or penalties, and the first to defeat the opponent’s chicken wins. This game delivers nostalgic charm with competitive mechanics, making every match both unpredictable and thrilling.",
    image: "/Projects/talpakan.png",
    source: "https://github.com/marlonlongm/talpakan",
    demo: "https://talpakan.vercel.app/",
    technologies: [
      { title: "html5", image: "/Skills/html5.png" },
      { title: "css", image: "/Skills/css.png" },
      { title: "javascript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Creators Value",
    about:
      "Creators Value is a comprehensive online platform offering tailored services—such as editing, publishing, branding, marketing, web and app development, and visual content creation—for creators, authors, and business owners. Its goal is to empower visionaries to amplify their digital presence and bring their creative ideas to life with expert support and innovative solutions.",
    image: "/Projects/cv.png",
    source: "",
    demo: "https://www.creatorsvalue.com/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Featbooks",
    about:
      "Feat Books is a digital publishing and marketing platform for authors, content creators, and storytellers. It delivers expert editing, custom book design, strategic marketing, and comprehensive self-publishing support—empowering creators to share their stories and connect meaningfully with audiences, all while retaining full control over their work. ",
    image: "/Projects/fb.png",
    source: "",
    demo: "https://www.featbooks.com/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "AWS", image: "/Skills/aws.png" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Rod Martin",
    about:
      "A personal website for Rod Martin—an inspiring artist, poet, musician, and storyteller. Visitors can enjoy his latest music via a dynamic MP3 player, explore his poems and published books, and engage with creative content like TikTok Tuesday (bite-sized poetry, quirky characters, musical moments) and Weekend Poetry, offering reflective original verses. Inspired by his Hawaii roots, Rod blends heartfelt storytelling with melody, authenticity, and a playful creative spirit.",
    image: "/Projects/rd.png",
    source: "",
    demo: "https://rods-website.vercel.app/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "AWS", image: "/Skills/aws.png" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
    ],
  },
  {
    title: "Tasks Masters Group",
    about:
      "Task Masters Group is an ethical virtual assistance agency connecting businesses with skilled, reliable, and fair-paid virtual assistants from the Philippines. Offering customizable support—such as logistics, admin, accounting, customer service, and lead generation—clients benefit from efficient talent paired with transparent processes. Their hands-on approach includes candidate selection, interviewing, smooth onboarding, and structured training, ensuring long-term, productive partnerships. ",
    image: "/Projects/TMG.png",
    source: "",
    demo: "https://www.taskmastergroup.com/",
    technologies: [
      { title: "Next.js", image: "/Skills/next.jpeg" },
      { title: "React", image: "/Skills/react.png" },
      { title: "Node.js", image: "/Skills/node.webp" },
      { title: "MongoDB", image: "/Skills/mongodb.gif" },
      { title: "Tailwind CSS", image: "/Skills/tailwind.png" },
      { title: "TypeScript", image: "/Skills/js.png" },
      { title: "Monday.com", image: "/Skills/monday.webp" },
    ],
  },
  {
    title: "Jet's Pizza Coupon App",
    about:
      "A dedicated internal tool designed for store managers at Jet’s Pizza, the Coupon App allows seamless creation, tracking, and management of promotional coupons. Key features include generating customized coupons for loyal customers, monitoring best-selling pizzas, and reviewing shop performance through detailed sales and usage statistics—all in a unified dashboard that enhances promotional efficiency and decision-making.",
    image: "/Projects/jets.png",
    source: "",
    demo: "https://pizza-guy.vercel.app/",
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
    title: "ISA Construction",
    about:
      "ISA Construction & Development Corp. is a Manila-based engineering and construction company specializing in road and vertical construction, architectural design, consulting, and cost estimation. Featured projects include a coastal highway extension and commercial developments. The firm emphasizes quality, integrity, and innovation, backed by ISO 9001 certification and strong leadership focused on community impact and structural excellence. ",
    image: "/Projects/isacondev.png",
    source: "",
    demo: "https://isacondev.com/",
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
        className="w-full h-full object-cover p-1.5 filter brightness-90 group-hover:brightness-110"
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
      <div className="flex gap-3 items-center justify-center">
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

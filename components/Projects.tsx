import { motion } from "framer-motion";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      title: "Chicken fight: Talpakan",
      about:
        "Talpakan is a chicken RPG game where chickens fight with skills based on luck. Each player has a maximum HP of 100 and who ever chicken that gets the other players HP to 0 wins the game.",
      image: "/Projects/talpakan.png",
      source: "https://github.com/mgacrama211176/js-talpakan-game",
      demo: "https://mgacrama211176.github.io/js-talpakan-game/",
      technologies: [
        { title: "html5", image: "/Skills/html5.png" },
        { title: "css3", image: "/Skills/css.png" },
        { title: "JS", image: "/Skills/js.png" },
      ],
    },
    {
      title: "E-Loan",
      about:
        "E-Loan Management system is for individuals who wants to make their eloan business managable where this can view, sort, add, delete clients at the same time all users will be able to see all blocked clients so that they can avoid these clients or automatically deny their loan to avoid monetary loss.",
      image: "/Projects/E-Loan.png",
      source: "https://github.com/mgacrama211176/E-Loan",
      demo: "https://play.google.com/store/apps/details?id=com.marlonz2.eloan",
      technologies: [
        { title: "ReactJS", image: "/Skills/react.png" },
        { title: "tailwind", image: "/Skills/tailwind.png" },
        { title: "expo", image: "/Skills/expo.png" },
        { title: "Node", image: "/Skills/node.webp" },
        { title: "Express", image: "/Skills/express.png" },
        { title: "Mongo", image: "/Skills/mongodb.gif" },
      ],
    },
    {
      title: "FilAnime",
      about:
        "Filanme is a Filipino animator website where animators can showcase their works and at the same time show employers their own arts. FilAnime is a hybrid of Youtube and LinkedIn where employers and animators can interact and rate the animator or make profiling easier for the employers since the app can sort all animators who are looking for jobs or freelance.",
      image: "/Projects/filanime.png",
      source: "https://github.com/mgacrama211176/capsFront",
      demo: "https://filanime.vercel.app/",
      technologies: [
        { title: "ReactJS", image: "/Skills/react.png" },
        { title: "styled", image: "/Skills/styled.png" },
        { title: "Node", image: "/Skills/node.webp" },
        { title: "Express", image: "/Skills/express.png" },
        { title: "Mongo", image: "/Skills/mongodb.gif" },
      ],
    },
  ];

  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-28 uppercase tracking-[20px] text-3xl text-[#CB890D]">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar  scrollbar-track-[#00255e]/20 scrollbar-thumb-[#D6A23F]/100">
        {projects.map((project) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col  items-center justify-center p-[14px] md:p-44 h-screen "
            key={project.title}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.image}
              className="w-fit md:w-[500px] rounded-xl"
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-center">
                <span className="text-2xl md:text-4xl font-semibold underline">
                  {project.title}
                </span>
              </h4>
              <p className="text-sm text-center md:text-left">
                {project.about}
              </p>
              <div>
                <h1 className="text-center text-xl">Techonologies used</h1>
                <div className="flex justify-center p-2 flex-wrap">
                  {project.technologies?.map((tech) => (
                    <div key={tech.title}>
                      <img
                        src={tech.image}
                        className=" w-16 h-16 rounded-full m-2 object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row justify-center items-center gap-20 group-hover:border-[#CB890D]">
                <button className="border rounded-lg border-[#00255E] p-2 ">
                  <SocialIcon
                    url={project.source}
                    fgColor="#CB890D"
                    bgColor="transparent"
                  />
                  Code
                </button>
                <button className="border rounded-lg border-[#00255E] p-2 ">
                  <SocialIcon
                    url={project.demo}
                    fgColor="#CB890D"
                    bgColor="transparent"
                  />
                  Demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#00255E]/10 left-0 h-[500px] -skew-y-[170deg]"></div>
    </motion.div>
  );
};

export default Projects;

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    { title: "Talpakan", about: "" },
    { title: "E-Loan", about: "" },
  ];

  return (
    <motion.div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-28 uppercase tracking-[20px] text-3xl text-[#CB890D]">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar  scrollbar-track-[#00255e]/20 scrollbar-thumb-[#D6A23F]/100">
        {projects.map((project) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-[14px] md:p-44 h-screen "
            key={project.title}
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="https://mgacrama211176.github.io/assets/projects/talpakan.jpg"
              className="w-fit md:w-[800px] border rounded-xl"
            />
            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="text-center">
                <span className="text-4xl font-semibold underline">
                  Chicken Fight: Talpakan
                </span>
              </h4>
              <p className="text-sm text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                amet molestiae nihil. Cupiditate nobis reiciendis dicta animi
                culpa laboriosam? Dolore debitis ad illum odio eligendi aperiam
                quae veniam cumque dignissimos?
              </p>

              <div className="flex flex-row justify-center items-center gap-20 group-hover:border-[#CB890D]">
                <button className="border rounded-lg border-[#00255E] p-2 ">
                  <SocialIcon
                    url="https://github.com/mgacrama211176"
                    fgColor="#CB890D"
                    bgColor="transparent"
                  />
                  Code
                </button>
                <button className="border rounded-lg border-[#00255E] p-2 ">
                  <SocialIcon
                    url="https://github.com/mgacrama211176"
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

import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <div className=" h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-[#00255e]/20 scrollbar-thumb-[#D6A23F]/100">
      <Head>
        <title>Marlon G. Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills
          techStack={{
            title: "",
            image: "",
          }}
        />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpIcon className="text-white animate-pulse border rounded-full bg-[#00255e] w-10 h-10 " />
          </div>
        </footer>
      </Link>
    </div>
  );
}

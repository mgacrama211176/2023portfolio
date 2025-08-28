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
import AIChatWidget from "../components/chat";

export default function Home() {
  return (
    <div className="overflow-x-hidden z-0 scrollbar scrollbar-track-[#00255e]/20 scrollbar-thumb-[#D6A23F]/100">
      <Head>
        <title>Marlon G. Portfolio</title>
      </Head>

      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <ArrowUpIcon className="text-white animate-pulse border rounded-full bg-[#00255e] w-10 h-10 " />
          </div>
        </footer>
      </Link>

      <AIChatWidget />
    </div>
  );
}

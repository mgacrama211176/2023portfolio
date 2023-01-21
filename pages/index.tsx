import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className=" h-screen snap-y snap-mandatory overflow-scroll z-0">
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

      {/* EXPERIENCES */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>

      {/* SKILLS */}
      {/* <section id="skills" className="snap-center">
        <Skills />
      </section> */}

      {/* PROJECTS */}
      {/* CONTACT ME */}
    </div>
  );
}

import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className=" h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Marlon G. Portfolio</title>
      </Head>

      <Header />

      {/* HERO */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* EXPERIENCES */}
      {/* SKILLS */}
      {/* PROJECTS */}
      {/* CONTACT ME */}
    </div>
  );
}

import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="text-[#00a6ec] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Marlon G. Portfolio</title>
      </Head>

      <Header />

      {/* HERO */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* ABOUT */}
      {/* EXPERIENCES */}
      {/* SKILLS */}
      {/* PROJECTS */}
      {/* CONTACT ME */}
    </div>
  );
}

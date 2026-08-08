import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Certifications from "@/components/certifications/Certifications";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <Hero />

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* SKILLS */}
        <section id="skills">
          <Skills />
        </section>

        {/* CERTIFICATIONS */}
        <Certifications />

        {/* FULL WIDTH THIN CYAN DIVIDER */}
        <div className="w-full my-6">
          <div className="h-[1px] w-full bg-cyan-400"></div>
        </div>

        {/* PROJECTS */}
        <section id="projects">
          <Projects />
        </section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#020617] py-8 text-center text-gray-400">
        <p>
          © 2026 Sayumina Hettiarachchi. All rights reserved.
        </p>

        <p className="mt-2 text-sm">
          Designed & Developed in Sri Lanka.
        </p>
      </footer>
    </>
  );
}
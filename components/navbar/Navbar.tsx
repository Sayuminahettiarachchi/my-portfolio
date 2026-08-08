"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT ME", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "CERTIFICATIONS", link: "#certifications" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-950 text-white z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="flex items-center justify-between">

          {/* Logo ONLY */}
          <div className="flex flex-col items-start">
            <h1 className="text-xl font-bold text-cyan-400">
              SH
            </h1>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-cyan-400 text-black px-5 py-2 rounded-full font-bold hover:shadow-[0_0_20px_#22d3ee]"
            >
              LET'S TALK
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cyan-400 text-3xl"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-5 pb-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-cyan-400 text-black px-5 py-2 rounded-full font-bold text-center"
            >
              LET'S TALK
            </a>
          </div>
        )}

      </div>
    </nav>
  );
}
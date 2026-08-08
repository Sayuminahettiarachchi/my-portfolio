"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-cyan-400/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          Sayumina
        </Link>

        {/* NAVIGATION */}
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-white hover:text-blue-400 transition"
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="text-white hover:text-blue-400 transition"
          >
            About
          </Link>

          <Link
            href="/#projects"
            className="text-white hover:text-blue-400 transition"
          >
            Projects
          </Link>

          <Link
            href="/#skills"
            className="text-white hover:text-blue-400 transition"
          >
            Skills
          </Link>

          <Link
            href="/#contact"
            className="text-white hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
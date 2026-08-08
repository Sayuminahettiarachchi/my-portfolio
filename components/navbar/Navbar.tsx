"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white whitespace-nowrap"
        >
          Sayumina
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6">
          <Link
            href="/"
            className="text-white hover:text-blue-400 whitespace-nowrap"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-white hover:text-blue-400 whitespace-nowrap"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-white hover:text-blue-400 whitespace-nowrap"
          >
            Projects
          </Link>

          <Link
            href="/skills"
            className="text-white hover:text-blue-400 whitespace-nowrap"
          >
            Skills
          </Link>

          <Link
            href="/contact"
            className="text-white hover:text-blue-400 whitespace-nowrap"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

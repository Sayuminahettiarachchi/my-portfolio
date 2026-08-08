
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#020617]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 sm:flex-row sm:px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          Sayumina
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link
            href="/"
            className="text-sm text-white hover:text-blue-400 sm:text-base"
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="text-sm text-white hover:text-blue-400 sm:text-base"
          >
            About
          </Link>

          <Link
            href="/#projects"
            className="text-sm text-white hover:text-blue-400 sm:text-base"
          >
            Projects
          </Link>

          <Link
            href="/#skills"
            className="text-sm text-white hover:text-blue-400 sm:text-base"
          >
            Skills
          </Link>

          <Link
            href="/#contact"
            className="text-sm text-white hover:text-blue-400 sm:text-base"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

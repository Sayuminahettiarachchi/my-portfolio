"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#020617] py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white"
        >
          Sayumina
        </Link>

        {/* Navigation */}
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-white hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="text-white hover:text-blue-400"
          >
            About
          </Link>

          <Link
            href="/#projects"
            className="text-white hover:text-blue-400"
          >
            Projects
          </Link>

          <Link
            href="/#skills"
            className="text-white hover:text-blue-400"
          >
            Skills
          </Link>

          <Link
            href="/#contact"
            className="text-white hover:text-blue-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-bold text-white">
          Sayumina
        </Link>

        <div className="flex gap-6">
          <Link href="/" className="text-white hover:text-blue-400">
            Home
          </Link>

          <Link href="/about" className="text-white hover:text-blue-400">
            About
          </Link>

          <Link href="/projects" className="text-white hover:text-blue-400">
            Projects
          </Link>

          <Link href="/skills" className="text-white hover:text-blue-400">
            Skills
          </Link>

          <Link href="/contact" className="text-white hover:text-blue-400">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}
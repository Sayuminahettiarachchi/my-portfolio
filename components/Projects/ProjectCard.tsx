import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
  description: string;
  github: string;
  live: string;
}

export default function ProjectCard({
  image,
  title,
  type,
  description,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="bg-[#111827] border border-gray-700 rounded-3xl p-5 hover:border-cyan-400 hover:shadow-[0_0_25px_#22d3ee] transition">
      {/* Project image */}
      <img
        src={image}
        alt={`${title} project preview`}
        className="w-full aspect-video object-cover rounded-2xl"
      />

      {/* Project details */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-lg">
          {title}
        </h3>

        <p className="text-cyan-400 text-xs font-semibold mt-2">
          {type}
        </p>

        <p className="text-gray-300 text-sm mt-3 leading-relaxed">
          {description}
        </p>

        {/* Icon links */}
        <div className="flex gap-3 mt-5">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} source code on GitHub`}
            className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition"
          >
            <FaGithub />
          </a>

          {live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-cyan-400 hover:text-black transition"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
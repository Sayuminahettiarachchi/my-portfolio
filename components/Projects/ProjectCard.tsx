import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  image: string;
  title: string;
  type: string;
  github: string;
  live: string;
};

export default function ProjectCard({
  image,
  title,
  type,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="group w-full max-w-[357px] h-[293px] mx-auto bg-[#111815] border border-[rgba(45,212,191,0.08)] rounded-[2.5rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:border-[rgba(45,212,191,0.4)] hover:shadow-[0_10px_30px_rgba(45,212,191,0.08)] transition-all duration-300">
      {/* Project image */}
      <div className="w-full h-[155px] overflow-hidden">
        <img
          src={image}
          alt={`${title} project preview`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project details */}
      <div className="p-5">
        <h3 className="text-[#F1F5F3] font-bold text-base leading-snug line-clamp-2">
          {title}
        </h3>

        <p className="text-[#2DD4BF] text-[10px] font-semibold tracking-wider mt-2 uppercase line-clamp-2">
          {type}
        </p>

        {/* Project links */}
        <div className="flex items-center gap-3 mt-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${title} on GitHub`}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F1F5F3] hover:bg-[#2DD4BF] hover:text-[#0A0F0D] hover:border-[#2DD4BF] transition-all duration-200"
          >
            <FaGithub size={15} />
          </a>

          {live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live demo`}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F1F5F3] hover:bg-[#2DD4BF] hover:text-[#0A0F0D] hover:border-[#2DD4BF] transition-all duration-200"
            >
              <FaExternalLinkAlt size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
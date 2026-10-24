
interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
  github?: string;
  live?: string;
}

export default function ProjectCard({
  image,
  title,
  type,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div
      className="
        flex flex-col
        bg-[#111827]
        border border-gray-700
        rounded-3xl
        p-5
        hover:border-cyan-400
        hover:shadow-[0_0_25px_#22d3ee]
        hover:-translate-y-2
        transition
      "
    >
      {/* Image box */}
      <div className="h-52 w-full overflow-hidden rounded-2xl bg-white">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Title and category only */}
      <div className="mt-5 flex-1">
        <h3 className="text-white font-bold text-lg leading-tight">
          {title}
        </h3>

        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mt-3">
          {type}
        </p>
      </div>

      {/* Footer buttons */}
      <div className="mt-5 flex items-center gap-3 border-t border-gray-700 pt-4 text-sm">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>
        )}

        {live && live !== "#" && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-600 px-4 py-2 font-semibold text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

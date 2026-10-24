import ProjectCard from "./ProjectCard";

type Project = {
  image: string;
  title: string;
  type: string;
  github: string;
  live: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      image: "/projects/Meteorite_Landings.png",
      title: "Meteorite Landings Analysis",
      type: "DATA SCIENCE / EXPLORATORY ANALYSIS",
      github:
        "https://github.com/Sayuminahettiarachchi/Meteorite_Landings",
      live: "#",
    },
    {
      image: "/projects/Screenshot (917).png",
      title: "AI Career Recommendation System",
      type: "RECOMMENDATION SYSTEM / WEB DEVELOPMENT",
      github:
        "https://github.com/Sayuminahettiarachchi/AI-Career-Recommendation",
      live: "https://sayumina.pythonanywhere.com/",
    },
    {
      image: "/projects/Screenshot (943).png",
      title: "Telecom Intelligence",
      type: "MACHINE LEARNING / CUSTOMER CHURN PREDICTION",
      github:
        "https://github.com/Sayuminahettiarachchi/telecom-churn-prediction",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0A0F0D] text-white px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#F1F5F3]">
          RECENT <span className="text-[#2DD4BF]">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              type={project.type}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
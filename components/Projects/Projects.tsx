
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
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
      image: "/projects/Telecom_Intelligence.png",
      title: "Telecom Intelligence",
      type: "MACHINE LEARNING / CUSTOMER CHURN",
      github:
        "https://github.com/Sayuminahettiarachchi/Telecom-Intelligence",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#020617] text-white px-6 py-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          MY <span className="text-cyan-400">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
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

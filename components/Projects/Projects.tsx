import ProjectCard from "./ProjectCard";

type Project = {
  image: string;
  title: string;
  type: string;
  description: string;
  github: string;
  live: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      image: "/projects/Meteorite_Landings.png",
      title: "Meteorite Landings Analysis",
      type: "DATA SCIENCE / EXPLORATORY ANALYSIS",
      
      github: "https://github.com/Sayuminahettiarachchi/Meteorite_Landings",
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
      live: "#", // replace with a hosted link once deployed
    },
  ];

  return (
    <section id="projects" className="bg-[#020617] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          RECENT <span className="text-cyan-400">PROJECTS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              title={project.title}
              type={project.type}
              description={project.description}
              github={project.github}
              live={project.live}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
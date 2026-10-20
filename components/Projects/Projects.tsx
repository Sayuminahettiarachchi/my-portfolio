import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      image: "/projects/Meteorite_Landings.png",
      title: "Meteorite Landings Analysis",
      type: "DATA SCIENCE / EXPLORATORY ANALYSIS",
      description:
        "Analyzed meteorite landing data using Python and data analysis techniques to explore patterns, distributions, and trends.",
      github:
        "https://github.com/Sayuminahettiarachchi/Meteorite_Landings",
      live: "#",
    },
    {
      image: "/projects/Screenshot (917).png",
      title: "AI Career Recommendation System",
      type: "RECOMMENDATION SYSTEM / WEB DEVELOPMENT",
      description:
        "A web-based recommendation system that helps users explore career options based on their interests and skills.",
      github:
        "https://github.com/Sayuminahettiarachchi/AI-Career-Recommendation",
      live: "https://sayumina.pythonanywhere.com/",
    },
    {
      image: "/projects/Telecom_Intelligence.png",
      title: "Telecom Intelligence",
      type: "MACHINE LEARNING / CUSTOMER CHURN PREDICTION",
      description:
        "A machine learning platform that predicts telecom customer churn, analyzes customer behavior, and identifies at-risk customers to support smarter retention decisions.",
      github:
        "https://github.com/Sayuminahettiarachchi/telecom-churn-prediction",
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

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaPaintBrush,
  FaMicrochip,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "PROGRAMMING",
      subtitle: "Programming Languages",
      icon: <FaLaptopCode />,
      description:
        "Building applications and solving problems using multiple programming languages.",
      skills: [
        "Python",
        "Java",
        "C++",
        "JavaScript",
        "TypeScript",
      ],
    },

    {
      number: "02",
      title: "WEB DEVELOPMENT",
      subtitle: "Frontend & Backend",
      icon: <FaServer />,
      description:
        "Developing responsive web applications using modern frontend and backend technologies.",
      skills: [
        "Next.js",
        "React",
        "Flask",
        "Node.js",
        "Tailwind CSS",
        "REST APIs",
      ],
    },

    {
      number: "03",
      title: "DATABASES",
      subtitle: "Database Management",
      icon: <FaDatabase />,
      description:
        "Working with databases for storing, managing, and retrieving application data.",
      skills: [
        "MySQL",
        "SQLite",
        "MongoDB",
        "PostgreSQL",
      ],
    },

    {
      number: "04",
      title: "AI & MACHINE LEARNING",
      subtitle: "Artificial Intelligence & Data",
      icon: <FaBrain />,
      description:
        "Developing machine learning solutions for prediction, classification, clustering, and data analysis.",
      skills: [
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "XGBoost",
        "LightGBM",
        "Machine Learning",
        "Data Analysis",
      ],
    },

    {
      number: "05",
      title: "TOOLS & DEVELOPMENT",
      subtitle: "Development Tools",
      icon: <FaPaintBrush />,
      description:
        "Using modern development tools and workflows to build, manage, and deploy software projects.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Jupyter Notebook",
        "Figma",
      ],
    },

    {
      number: "06",
      title: "IOT & ROBOTICS",
      subtitle: "Embedded Systems",
      icon: <FaMicrochip />,
      description:
        "Building smart systems using microcontrollers, sensors, robotics, and IoT technologies.",
      skills: [
        "Arduino",
        "ESP32",
        "Sensors",
        "Blynk",
        "IoT",
        "Robotics",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="
        min-h-screen
        scroll-mt-24
        bg-[#020617]
        text-white
        px-6
        py-16
      "
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          MY{" "}
          <span className="text-cyan-400">
            SKILLS
          </span>
        </h2>

        <p className="text-gray-400 text-center mt-4 max-w-3xl mx-auto">
          My technical skills cover software development, artificial
          intelligence, machine learning, web development, databases,
          IoT, and robotics.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {skillCategories.map((item, index) => (
            <div
              key={index}
              className="
                border
                border-cyan-400
                rounded-xl
                p-5
                hover:shadow-[0_0_25px_#22d3ee]
                transition
                hover:-translate-y-2
              "
            >
              <div className="text-cyan-400 text-3xl mb-3">
                {item.icon}
              </div>

              <p className="text-cyan-400 font-bold text-sm">
                {item.number} / {item.title}
              </p>

              <h3 className="text-lg font-bold mt-2">
                {item.subtitle}
              </h3>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="
                      border
                      border-cyan-400
                      px-2
                      py-1
                      rounded-full
                      text-xs
                      text-cyan-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="
            max-w-6xl
            mx-auto
            mt-24
            mb-8
          "
        >
          <div
            className="
              h-[3px]
              w-full
              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
              animate-pulse
              shadow-[0_0_20px_#22d3ee]
            "
          />
        </div>
      </div>
    </section>
  );
}


import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaPaintBrush,
  FaMicrochip
} from "react-icons/fa";


export default function Skills() {


const skillCategories = [

{
  number: "01",
  title: "FRONTEND",
  subtitle: "Frontend Development",
  icon: <FaLaptopCode />,
  description:
    "Building modern, interactive, and responsive web applications with a focus on component structure and performance.",
  skills: [
    "React",
    "Next.js",
    "CSS",
    "Tailwind CSS",
    "Responsive Design",
  ],
},


{
  number: "02",
  title: "BACKEND",
  subtitle: "Backend Development",
  icon: <FaServer />,
  description:
    "Engineering secure, robust, and scalable backend logic for modern applications.",
  skills: [
    "Node.js",
    "Express",
    "Java",
    "REST APIs",
  ],
},


{
  number: "03",
  title: "DATABASES",
  subtitle: "Database Management",
  icon: <FaDatabase />,
  description:
    "Designing database models and optimizing data management solutions.",
  skills: [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Schema Design",
  ],
},


{
  number: "04",
  title: "AI & MACHINE LEARNING",
  subtitle: "Artificial Intelligence",
  icon: <FaBrain />,
  description:
    "Developing intelligent solutions using Machine Learning, data analysis, and AI techniques.",
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
  ],
},


{
  number: "05",
  title: "DESIGN & TOOLS",
  subtitle: "UI/UX & Development Tools",
  icon: <FaPaintBrush />,
  description:
    "Creating user-friendly interfaces and using modern development workflows.",
  skills: [
    "Figma",
    "Git",
    "GitHub",
    "VS Code",
  ],
},


{
  number: "06",
  title: "IOT & ROBOTICS",
  subtitle: "Embedded Systems",
  icon: <FaMicrochip />,
  description:
    "Building smart systems using sensors, microcontrollers, and IoT technologies.",
  skills: [
    "Arduino",
    "ESP32",
    "Sensors",
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

      My technical skills cover software development,
      Artificial Intelligence, Machine Learning,
      Web Development, IoT, and modern technologies.

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




    {/* ONLY ADDED DYNAMIC LINE */}

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
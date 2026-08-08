export default function About() {
  return (
    <section
      id="about"
      className="
        bg-[#020617]
        text-white
        px-6
        py-20
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >

        {/* LEFT SIDE */}

        <div>

          <h2 className="text-4xl md:text-5xl font-bold">

            ABOUT{" "}
            <span className="text-cyan-400">
              ME
            </span>

          </h2>


          <p
            className="
            text-gray-300
            mt-6
            leading-relaxed
            text-base
            "
          >
            I am Sayumina Hettiarachchi, HND Computer Science with AI
            student at the National Institute of Business Management (NIBM),
            with a strong passion for Artificial Intelligence, Machine
            Learning, Web Development, and emerging technologies. I enjoy
            exploring innovative solutions and applying technology to solve
            real-world problems.
          </p>



          <p
            className="
            text-gray-300
            mt-5
            leading-relaxed
            text-base
            "
          >
            My technical interests include developing intelligent
            applications, building modern web solutions, and exploring
            Machine Learning and Artificial Intelligence technologies.
            I enjoy working with data, developing ML models, and applying
            AI techniques to solve real-world problems. I focus on writing
            clean, efficient code and continuously learning new technologies.
          </p>



          {/* BUTTONS */}

          <div className="flex gap-5 mt-8">


            <button
              className="
              bg-cyan-400
              text-black
              px-8
              py-3
              rounded-full
              font-bold
              hover:shadow-[0_0_25px_#22d3ee]
              transition
              "
            >
              DOWNLOAD RESUME
            </button>



            <a
              href="#contact"
              className="
              border
              border-cyan-400
              text-cyan-400
              px-8
              py-3
              rounded-full
              font-bold
              hover:bg-cyan-400
              hover:text-black
              transition
              "
            >
              GET IN TOUCH
            </a>


          </div>


        </div>





        {/* RIGHT SIDE IMAGE */}

        <div className="flex justify-center md:justify-end">


          <div
            className="
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            border-4
            border-cyan-400
            shadow-[0_0_40px_#22d3ee]
            overflow-hidden
            "
          >

            <img
              src="/profile%20(2).jpg"
              alt="Sayumina Hettiarachchi"
              className="
              w-full
              h-full
              object-cover
              "
            />

          </div>


        </div>


      </div>




      {/* DYNAMIC LINE - LOWER POSITION */}

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



    </section>
  );
}
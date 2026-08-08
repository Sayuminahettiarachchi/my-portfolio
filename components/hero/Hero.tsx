"use client";

import { useEffect, useState } from "react";

export default function Hero() {

  const roles = [
    "COMPUTER SCIENCE WITH AI STUDENT",
    "AI ENTHUSIAST",
    "WEB DEVELOPER",
    "MACHINE LEARNING STUDENT",
  ];

  const [role, setRole] = useState("");
  const [index, setIndex] = useState(0);


  useEffect(() => {

    let i = 0;

    setRole("");

    const typing = setInterval(() => {

      setRole(roles[index].slice(0, i));

      i++;

      if (i > roles[index].length) {

        clearInterval(typing);

        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);

      }

    }, 100);


    return () => clearInterval(typing);

  }, [index]);



  return (

    <section
      id="home"
      className="
      min-h-screen
      bg-[#020617]
      text-white
      px-6
      pt-24
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        min-h-[90vh]
        grid
        md:grid-cols-2
        gap-10
        items-center
        "
      >



        {/* LEFT SIDE */}

        <div>


          <p className="
          text-cyan-400
          text-lg
          md:text-xl
          font-semibold
          ">
            HI, I'M
          </p>



          <h1
            className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            mt-3
            "
          >

            SAYUMINA

            <br />

            <span className="text-cyan-400">
              HETTIARACHCHI
            </span>

          </h1>



          <h2
            className="
            text-xl
            md:text-2xl
            lg:text-3xl
            text-gray-300
            mt-5
            "
          >

            I'M A{" "}

            <span className="text-cyan-400">
              {role}
            </span>


          </h2>




          <p
            className="
            text-gray-400
            text-sm
            md:text-base
            mt-6
            max-w-lg
            leading-relaxed
            "
          >

            HND Computer Science with AI student passionate about
            Artificial Intelligence, Machine Learning and Web Development.

          </p>




          <a
            href="#contact"
            className="
            inline-block
            mt-8
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

            GET IN TOUCH

          </a>





          <div className="flex gap-4 mt-8">


           <a
  href="https://github.com/Sayuminahettiarachchi"
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-11 h-11
    border border-cyan-400
    rounded-full
    flex items-center justify-center
    hover:bg-cyan-400
    hover:text-black
  "
>
  Git
</a>
        <a
  href="https://www.linkedin.com/in/sayumina-hettiarachchi-439a82379/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-11 h-11
    border border-cyan-400
    rounded-full
    flex items-center justify-center
    hover:bg-cyan-400
    hover:text-black
  "
>
  in
</a>

  <a
  href="mailto:sayuminahettiarachchi1@gmail.com"
  className="
    w-11 h-11
    border border-cyan-400
    rounded-full
    flex items-center justify-center
    hover:bg-cyan-400
    hover:text-black
  "
>
  ✉
</a>
           
          </div>


        </div>






        {/* PROFILE IMAGE */}


        <div className="flex justify-center">


          <div
            className="
            w-64
            h-64
            md:w-80
            md:h-80
            lg:w-96
            lg:h-96
            rounded-full
            border-4
            border-cyan-400
            shadow-[0_0_40px_#22d3ee]
            overflow-hidden
            "
          >

            <img
              src="/profile.jpg"
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





      {/* THIN CYAN DYNAMIC DIVIDER */}


      <div
        className="
        max-w-5xl
        mx-auto
        mt-4
        mb-4
        "
      >

        <div
          className="
          h-[1px]
          w-full
          bg-cyan-400
          animate-pulse
          shadow-[0_0_10px_#22d3ee]
          "
        >

        </div>


      </div>



    </section>

  );

}
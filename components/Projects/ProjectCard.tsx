import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


interface ProjectCardProps {
  image: string;
  title: string;
  type: string;
  github: string;
  live: string;
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
      bg-[#111827]
      border
      border-gray-700
      rounded-3xl
      p-5
      hover:border-cyan-400
      hover:shadow-[0_0_25px_#22d3ee]
      transition
      "
    >


      {/* PROJECT IMAGE */}

      <img
        src={image}
        alt={title}
        className="
        w-full
        aspect-video
        object-cover
        rounded-2xl
        "
      />



      {/* PROJECT DETAILS */}

      <div className="flex justify-between items-end mt-5">


        <div>


          <h3
            className="
            text-white
            font-bold
            text-lg
            "
          >
            {title}
          </h3>


          <p
            className="
            text-gray-400
            text-sm
            mt-2
            "
          >
            {type}
          </p>


        </div>



        {/* ICON BUTTONS */}

        <div className="flex gap-3">


          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-11
            h-11
            rounded-full
            bg-gray-800
            flex
            items-center
            justify-center
            text-white
            hover:bg-cyan-400
            hover:text-black
            transition
            "
          >

            <FaGithub />

          </a>




          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="
            w-11
            h-11
            rounded-full
            bg-gray-800
            flex
            items-center
            justify-center
            text-white
            hover:bg-cyan-400
            hover:text-black
            transition
            "
          >

            <FaExternalLinkAlt />

          </a>


        </div>


      </div>


    </div>

  );

}
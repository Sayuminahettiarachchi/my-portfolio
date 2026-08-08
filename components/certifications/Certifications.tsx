import CertificateCard from "./CertificateCard";


export default function Certifications() {


  const certifications = [

    {
      image: "/certificates/nibm/certificate1.jpg",
      title: "Certificate in Computer Science with AI (Foundation)",
      organization: "NIBM",
      description:
      "Completed a foundation-level program covering computer science concepts and introduction to Artificial Intelligence.",
    },


    {
      image: "/certificates/nibm/diploma.jpg",
      title: "Diploma in Computer Science with AI",
      organization: "NIBM",
      description:
        "Completed a diploma program focused on computer science fundamentals, programming, databases, artificial intelligence concepts, and software development practices.",
    },


    {
      image: "/certificates/nibm/hnd.jpg",
      title: "HND in Computer Science with AI",
      organization: "NIBM",
      description:
      "Currently following Higher National Diploma in Computer Science with AI.",
    },


    {
      image: "/certificates/english/certificate1.jpg",
      title: "English diploma level 1 ",
      organization: "American College",
      description:
     "Completed Level 1 English diploma training focused on improving basic grammar, vocabulary, reading, writing, and everyday communication skills.",
    },


    {
      image: "/certificates/english/certificate2.jpg",
      title: "English diploma level 3  ",
      organization: "American College",
      description:
      "Completed Level 3 English diploma training with advanced focus on communication skills, professional writing, grammar accuracy, and confident language usage.",
    },


    {
      image: "/certificates/english/certificate3.jpg",
      title: "public speaking ",
      organization: "American College",
      description:
      "Developed public speaking, presentation, and communication skills with improved confidence in delivering ideas effectively in professional environments.",
    },


  ];




  return (

    <section

      id="certifications"

      className="
      bg-[#020617]
      text-white
      px-6
      py-16
      "

    >



      <h2

        className="
        text-4xl
        font-bold
        text-center
        "

      >

        MY{" "}

        <span className="text-cyan-400">

          CERTIFICATIONS

        </span>


      </h2>



      <p

        className="
        text-gray-400
        text-center
        mt-3
        "

      >

        Academic achievements, communication skills, and continuous learning.

      </p>





      <div

        className="
        grid
        md:grid-cols-3
        gap-8
        max-w-6xl
        mx-auto
        mt-12
        "

      >



        {

          certifications.map((cert,index)=>(


            <CertificateCard

              key={index}

              image={cert.image}

              title={cert.title}

              organization={cert.organization}

              description={cert.description}

            />


          ))

        }



      </div>




    </section>

  );


}
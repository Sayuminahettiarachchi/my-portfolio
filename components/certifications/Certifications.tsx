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
  image: "/certificates/coventry/bsc.jpg",
  title: "BSc (Hons) Computer Science with Artificial Intelligence",
  organization: "Coventry University",
  description: "Expected completion: 2027–2028",
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

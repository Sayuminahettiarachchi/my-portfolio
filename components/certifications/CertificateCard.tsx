interface CertificateCardProps {

  image: string;
  title: string;
  organization: string;
  description: string;

}


export default function CertificateCard({

  image,
  title,
  organization,
  description,

}: CertificateCardProps) {


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
      hover:-translate-y-2
      transition
      "
    >


      <img

        src={image}

        alt={title}

        className="
        w-full
        h-52
        object-contain
        rounded-2xl
        bg-black
        "

      />



      <div className="mt-5">


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
          text-cyan-400
          text-sm
          mt-2
          font-semibold
          "
        >

          {organization}

        </p>



        <p
          className="
          text-gray-400
          text-sm
          mt-3
          "
        >

          {description}

        </p>


      </div>


    </div>

  );

}
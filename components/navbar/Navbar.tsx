export default function Navbar() {



  const navItems = [

    { name: "HOME", link: "#home" },

    { name: "ABOUT ME", link: "#about" },

    { name: "SKILLS", link: "#skills" },

    { name: "CERTIFICATIONS", link: "#certifications" },

    { name: "PROJECTS", link: "#projects" },

    { name: "CONTACT", link: "#contact" },

  ];





  return (



    <nav className="

      fixed

      top-0

      w-full

      bg-slate-950

      text-white

      z-50

      px-6

      py-4

    ">



      <div className="

        max-w-6xl

        mx-auto

        flex

        items-center

        justify-between

      ">





        {/* Logo / Name */}



        <h1 className="

          text-xl

          font-bold

          text-cyan-400

        ">

            SH

        </h1>







        {/* Menu */}



        <div className="

          hidden

          md:flex

          gap-6

          items-center

        ">



          {navItems.map((item) => (



            <a

              key={item.name}

              href={item.link}

              className="

              hover:text-cyan-400

              transition

              "

            >

              {item.name}

            </a>



          ))}





          <a

            href="#contact"

            className="

            bg-cyan-400

            text-black

            px-5

            py-2

            rounded-full

            font-bold

            hover:shadow-[0_0_20px_#22d3ee]

            "

          >

            LET'S TALK

          </a>





        </div>





      </div>





    </nav>



  );



}
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#020617] text-white px-6 py-20 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold">
        GET IN <span className="text-cyan-400">TOUCH</span>
      </h2>

      <h3 className="text-2xl md:text-3xl font-semibold mt-6">
        LET&apos;S BUILD SOMETHING EXCEPTIONAL TOGETHER.
      </h3>

      <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
        I&apos;m always open to new opportunities and collaborations.
        Whether you have a specific project in mind or just want to
        chat about technology, feel free to reach out.
      </p>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">

        {/* Email */}
        <a
          href="mailto:sayuminahettiarachchi1@gmail.com"
          className="border border-cyan-400 rounded-xl p-6 transition hover:scale-105"
        >
          <FaEnvelope className="text-cyan-400 text-4xl mx-auto" />

          <h4 className="text-cyan-400 font-bold text-xl mt-4">
            EMAIL
          </h4>

          <p className="mt-3 text-gray-300">
            sayuminahettiarachchi1@gmail.com
          </p>
        </a>

        {/* Phone */}
        <a
          href="tel:+94755900563"
          className="border border-cyan-400 rounded-xl p-6 transition hover:scale-105"
        >
          <FaPhone className="text-cyan-400 text-4xl mx-auto" />

          <h4 className="text-cyan-400 font-bold text-xl mt-4">
            PHONE
          </h4>

          <p className="mt-3 text-gray-300">
            +94 755900563
          </p>
        </a>

        {/* Location */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Gampola%2CSri%20Lanka"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-cyan-400 rounded-xl p-6 transition hover:scale-105"
        >
          <FaMapMarkerAlt className="text-cyan-400 text-4xl mx-auto" />

          <h4 className="text-cyan-400 font-bold text-xl mt-4">
            LOCATION
          </h4>

          <p className="mt-3 text-gray-300">
            Gampola, Sri Lanka
          </p>
        </a>

      </div>

      {/* Contact Form */}
      <div className="mt-16 max-w-3xl mx-auto">

        <h3 className="text-3xl font-bold">
          START A{" "}
          <span className="text-cyan-400">
            CONVERSATION
          </span>
        </h3>

  <form
  action="https://formspree.io/f/xyegkevg"
  method="POST"
  className="mt-8 space-y-5"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full bg-slate-900 border border-cyan-400 rounded-lg px-5 py-3 text-white placeholder-gray-500 outline-none transition"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full bg-slate-900 border border-cyan-400 rounded-lg px-5 py-3 text-white placeholder-gray-500 outline-none transition"
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
    className="w-full bg-slate-900 border border-cyan-400 rounded-lg px-5 py-3 text-white placeholder-gray-500 outline-none transition"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={5}
    required
    className="w-full bg-slate-900 border border-cyan-400 rounded-lg px-5 py-3 text-white placeholder-gray-500 outline-none transition resize-none"
  />

  <button
    type="submit"
    className="bg-cyan-400 text-black px-10 py-3 rounded-full font-bold transition hover:scale-105"
  >
    START CONVERSATION
  </button>
</form>

      </div>
    </section>
  );
}
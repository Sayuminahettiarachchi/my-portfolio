import CertificateCard from "./CertificateCard";

interface Certification {
  image?: string;
  title: string;
  organization: string;
  description: string;
  certificateNo?: string;
  awardDate?: string;
  highlight?: string;
  status?: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      image: "/certificates/nibm/certificate1.jpg",
      title: "Certificate in Computer Science with AI (Foundation)",
      organization: "NIBM",
      description:
        "Completed a foundation-level program covering computer science concepts and introduction to Artificial Intelligence.",
      certificateNo: "2024102402",
      awardDate: "24 October 2024",
      highlight: "Distinction",
    },
    {
      image: "/certificates/nibm/diploma.jpg",
      title: "Diploma in Computer Science with AI",
      organization: "NIBM",
      description:
        "Completed a diploma program focused on computer science fundamentals, programming, databases, artificial intelligence concepts, and software development practices.",
      certificateNo: "2026073026", // check against your certificate
      awardDate: "26 June 2026",
      highlight: "GPA: 3.20 / 4.00",
    },
    {
      title: "HND in Computer Science with AI",
      organization: "NIBM",
      description:
        "Currently following Higher National Diploma in Computer Science with AI.",
      status: "In Progress",
    },
    {
      title: "BSc (Hons) Computer Science with Artificial Intelligence",
      organization: "NIBM / Coventry University",
      description: "Expected completion: 2027–2028",
      status: "Expected",
    },
  ];

  return (
    <section id="certifications" className="bg-[#020617] text-white px-6 pt-16 pb-8">
      <h2 className="text-4xl font-bold text-center">
        MY <span className="text-cyan-400">CERTIFICATIONS</span>
      </h2>

      <p className="text-gray-400 text-center mt-3">
        Academic achievements, communication skills, and continuous learning.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {certifications.map((cert, index) => (
          <CertificateCard
            key={index}
            image={cert.image}
            title={cert.title}
            organization={cert.organization}
            description={cert.description}
            certificateNo={cert.certificateNo}
            awardDate={cert.awardDate}
            highlight={cert.highlight}
            status={cert.status}
          />
        ))}
      </div>
    </section>
  );
}
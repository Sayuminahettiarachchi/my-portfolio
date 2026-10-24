import CertificateCard from "./CertificateCard";

interface Certification {
  image?: string;
  title: string;
  organization: string;
  description: string;
  certificateNo?: string;
  awardDate?: string;
  gpa?: string;
  grade?: string;
  issued?: string;
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
      grade: "DISTINCTION",
    },
    {
      image: "/certificates/nibm/diploma.jpeg",
      title: "Diploma in Computer Science with AI",
      organization: "NIBM",
      description:
        "Completed a diploma program focused on computer science fundamentals, programming, databases, artificial intelligence concepts, and software development practices.",
      certificateNo: "2026073026",
      awardDate: "26 June 2026",
      gpa: "3.20 / 4.00",
    },
    {
      title: "HND in Computer Science with AI",
      organization: "NIBM",
      description:
        "Currently following Higher National Diploma in Computer Science with AI.",
      issued: "In Progress",
    },
    {
      title: "BSc (Hons) Computer Science with Artificial Intelligence",
      organization: "NIBM / Coventry University",
      description: "Expected completion: 2027–2028",
      issued: "Expected",
    },
  ];

  return (
    <section
      id="certifications"
     className="bg-[#070d1a] text-white px-6 pt-16 pb-8"
    >
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
            gpa={cert.gpa}
            grade={cert.grade}
            issued={cert.issued}
          />
        ))}
      </div>
    </section>
  );
}
import CertificateCard from "./CertificateCard";

interface Certification {
  image?: string;
  title: string;
  organization: string;
  description: string;
  certificateNo?: string;
  awardDate?: string;
  issued?: string;
  badge?: string;
  gpa?: string;
  grade?: string;
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
      awardDate: "24-October-2024",
      grade: "DISTINCTION",
    },
    {
      image: "/certificates/nibm/diploma.jpeg",
      title: "Diploma in Computer Science with AI",
      organization: "NIBM",
      description:
        "Completed a diploma program focused on computer science fundamentals, programming, databases, artificial intelligence concepts, and software development practices.",
      certificateNo: "2026073026",
      awardDate: "26-June-2026",
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
      className="bg-[#0A0F0D] text-[#F1F5F3] px-6 py-16 border-y border-[rgba(45,212,191,0.05)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            MY <span className="text-[#2DD4BF]">CERTIFICATIONS</span>
          </h2>

          <p className="text-gray-400 text-sm mt-3">
            Academic achievements, communication skills, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <CertificateCard
              key={cert.title}
              image={cert.image}
              title={cert.title}
              organization={cert.organization}
              description={cert.description}
              certificateNo={cert.certificateNo}
              awardDate={cert.awardDate}
              issued={cert.issued}
              badge={cert.badge}
              gpa={cert.gpa}
              grade={cert.grade}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
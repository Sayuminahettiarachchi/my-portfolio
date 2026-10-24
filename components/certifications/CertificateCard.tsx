
interface CertificateCardProps {
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

export default function CertificateCard({
  image,
  title,
  organization,
  description,
  certificateNo,
  awardDate,
  issued,
  badge,
  gpa,
  grade,
}: CertificateCardProps) {
  return (
    <div className="bg-[#111827] border border-gray-700 rounded-3xl p-5 hover:border-cyan-400 hover:shadow-[0_0_25px_#22d3ee] hover:-translate-y-2 transition">
      <div className="flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-1">
        {image ? (
          <img
            src={image}
            alt={title}
          className="h-full w-full object-contain"
          />
        ) : (
          <span className="text-sm font-semibold text-gray-500">
            {badge || "In progress"}
          </span>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-lg">{title}</h3>

        <p className="text-cyan-400 text-sm mt-2 font-semibold">
          {organization}
        </p>

    <div className="min-h-[8px] mt-3">
  <p className="text-gray-400 text-sm">{description}</p>
</div>

<div className="border-t border-gray-700 my-4" /> 

        {certificateNo && (
          <p className="text-gray-300 text-sm mt-3">
            <span className="text-cyan-400 font-semibold">
              Certificate No:
            </span>{" "}
            {certificateNo}
          </p>
        )}

        {awardDate && (
          <p className="text-gray-300 text-sm mt-2">
            <span className="text-cyan-400 font-semibold">
              Date of Award:
            </span>{" "}
            {awardDate}
          </p>
        )}

        {issued && (
          <p className="text-gray-300 text-sm mt-2">
            <span className="text-cyan-400 font-semibold">Issued:</span>{" "}
            {issued}
          </p>
        )}

        {gpa && (
          <p className="text-gray-300 text-sm mt-2">
            <span className="text-cyan-400 font-semibold">GPA:</span>{" "}
            {gpa}
          </p>
        )}

        {grade && (
          <p className="text-gray-300 text-sm mt-2">
            <span className="text-cyan-400 font-semibold">Grade:</span>{" "}
            {grade}
          </p>
        )}
      </div>
    </div>
  );
}

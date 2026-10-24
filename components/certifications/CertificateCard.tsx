
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
    <div className="group flex h-[293px] w-full max-w-[357px] mx-auto flex-col overflow-hidden rounded-[2.5rem] border border-[rgba(45,212,191,0.08)] bg-[#111815] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-[rgba(45,212,191,0.4)] hover:shadow-[0_10px_30px_rgba(45,212,191,0.08)]">

      {/* Certificate image */}
      <div className="relative h-[115px] w-full shrink-0 overflow-hidden bg-[#0d1411]">
        {image ? (
          <img
            src={image}
            alt={`${title} certificate`}
            className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(45,212,191,0.25)] bg-[rgba(45,212,191,0.08)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2DD4BF"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15l-3.5 2 0.7-4-2.9-2.8 4-.6L12 6l1.7 3.6 4 .6-2.9 2.8.7 4z" />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2DD4BF]">
              {badge || issued || "Academic qualification"}
            </span>
          </div>
        )}
      </div>

      {/* Certificate details */}
      <div className="flex min-h-0 flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-[#F1F5F3]">
          {title}
        </h3>

        <p className="mt-2 line-clamp-1 text-[10px] font-semibold uppercase tracking-wider text-[#2DD4BF]">
          {organization}
        </p>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-400">
          {description}
        </p>

        {/* Qualification details */}
        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-white/10 pt-3">
          {awardDate && (
            <span className="text-[10px] text-gray-400">
              <span className="font-semibold text-[#2DD4BF]">Awarded:</span>{" "}
              {awardDate}
            </span>
          )}

          {gpa && (
            <span className="text-[10px] text-gray-400">
              <span className="font-semibold text-[#2DD4BF]">GPA:</span>{" "}
              {gpa}
            </span>
          )}

          {grade && (
            <span className="text-[10px] font-semibold text-[#2DD4BF]">
              {grade}
            </span>
          )}

          {issued && (
            <span className="text-[10px] font-semibold text-[#2DD4BF]">
              {issued}
            </span>
          )}

          {certificateNo && (
            <span
              className="w-full truncate text-[9px] text-gray-500"
              title={certificateNo}
            >
              Certificate No: {certificateNo}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

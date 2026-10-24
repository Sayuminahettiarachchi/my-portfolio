interface CertificateCardProps {
  image?: string;
  title: string;
  organization: string;
  description: string;
  certificateNo?: string;
  awardDate?: string;
  highlight?: string;
  status?: string;
  gpa?: string;
  grade?: string;
  issued?: string;
}

export default function CertificateCard({
  image,
  title,
  organization,
  description,
  certificateNo,
  awardDate,
  highlight,
  status,
  gpa,
  grade,
  issued,
}: CertificateCardProps) {
  const achievement = grade || highlight;
  const currentStatus = issued || status;

  return (
    <div
      className="
        flex flex-col
        bg-[#111827]
        border border-gray-700
        rounded-3xl
        p-5
        hover:border-cyan-400
        hover:shadow-[0_0_25px_#22d3ee]
        hover:-translate-y-2
        transition
      "
    >
      {/* Certificate image */}
      <div className="flex h-56 w-full items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
        {image ? (
          <img
            src={image}
            alt={`${title} certificate`}
            className="max-h-full max-w-full object-contain border border-black"
          />
        ) : (
          <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            {currentStatus || "In Progress"}
          </span>
        )}
      </div>

      {/* Certificate details */}
      <div className="mt-5 flex-1">
        <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest">
          {organization}
        </p>

        <h3 className="text-white font-bold text-lg mt-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-3">
          {description}
        </p>
      </div>

      {/* Certificate information */}
      {(awardDate || achievement || gpa || certificateNo || currentStatus) && (
        <div className="mt-5 space-y-2 border-t border-gray-700 pt-4 text-sm text-gray-400">
          {awardDate && (
            <p>
              <span className="font-semibold text-gray-300">
                Awarded:
              </span>{" "}
              {awardDate}
            </p>
          )}

          {gpa && (
            <p>
              <span className="font-semibold text-gray-300">
                GPA:
              </span>{" "}
              {gpa}
            </p>
          )}

          {achievement && (
            <span className="inline-block rounded border border-cyan-400/40 bg-cyan-400/10 px-2 py-0.5 text-xs font-semibold uppercase text-cyan-400">
              {achievement}
            </span>
          )}

          {currentStatus && (
            <p className="text-xs font-semibold text-cyan-400">
              {currentStatus}
            </p>
          )}

          {certificateNo && (
            <p className="text-xs">
              <span className="font-semibold text-gray-300">
                Certificate No:
              </span>{" "}
              {certificateNo}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
import Image from "next/image";
import { Award } from "lucide-react";
import type { Certification } from "@/data/certifications";

export default function CertCard({ cert, className = "" }: { cert: Certification; className?: string }) {
  const classes = `flex flex-col gap-3 rounded-3xl shadow-md bg-gradient-to-br from-[rgb(40,40,40)] via-[rgb(35,35,35)] to-[rgb(25,25,25)] p-5 ${className}`;

  const content = (
    <>
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-[40px] items-center">
          {cert.logo ? (
            <Image src={cert.logo} alt={cert.issuer} width={80} height={40} className="h-[40px] w-auto" />
          ) : (
            <Award size={32} className="brightness-75 text-white" />
          )}
        </div>
        <span className="rounded-full bg-blue-500/15 px-3 py-1 text-sm text-blue-400">{cert.category}</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg">{cert.title}</p>
        <p className="text-base brightness-50">{cert.issuer}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {cert.tags.map((tag, i) => (
          <span key={i} className="rounded-full bg-[rgb(52,52,52)] px-3 py-1 text-sm brightness-75">
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  return cert.url ? (
    <a href={cert.url} target="_blank" className={classes}>
      {content}
    </a>
  ) : (
    <div className={classes}>{content}</div>
  );
}

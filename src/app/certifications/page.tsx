import type { Metadata } from "next";
import AnimateSections from "@/components/AnimateSections";
import CertCard from "@/components/CertCard";
import { Title } from "@/components/ui";
import { certifications } from "@/data/certifications";

export const metadata: Metadata = {
  title: "Certifications | Sasmith Goduguluri",
};

export default function CertificationsPage() {
  return (
    <main className="flex w-full flex-col items-center pt-[100px]">
      <section className="mt-10 mb-20 flex w-full flex-col items-center gap-5 px-5 sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[1200px]">
        <div className="animate-section flex flex-col items-center gap-3">
          <Title title="Certifications" className="flex" titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
          <p className="text-base brightness-50">More than just certificates, these are the milestones of my learning journey.</p>
        </div>
        <div className="mt-5 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} className="animate-section h-full" />
          ))}
        </div>
      </section>
      <AnimateSections />
    </main>
  );
}

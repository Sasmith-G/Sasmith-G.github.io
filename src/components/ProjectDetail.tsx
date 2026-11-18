"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Title } from "@/components/ui";
import { invertedTech, mainImage, type Project } from "@/data/projects";

const width = "sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[1200px]";

function TextBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="uppercase text-xl brightness-50 tracking-tighter">{heading}</h1>
      <p className="text-base brightness-[80%]">{body}</p>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="uppercase text-base brightness-50 tracking-tighter">{label}</p>
      <h1>{value}</h1>
    </div>
  );
}

export default function ProjectDetail({ project, nextId }: { project: Project; nextId: string | null }) {
  const [preview, setPreview] = useState<string | null>(null);
  const close = () => setPreview(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const image = mainImage(project);
  const gallery = project.gallery && project.gallery.length > 0 ?project.gallery.slice(0, 4) : null;

  return (
    <section className="mt-10 flex flex-col gap-5 mb-10 items-center">
      <div className={`animate-section flex flex-col items-center gap-3 px-5 ${width}`}>
        <p className="uppercase text-base brightness-50 tracking-tighter">{project.category}</p>
        <Title title={project.title} className="flex" titleClassName="text-3xl" blue />
      </div>

      <div className="animate-section">
        <Image src={image} alt="Main Image" height={10000} width={10000} className="w-full" />
      </div>

      <div className={`animate-section text-white px-5 ${width}`}>
        <Card className="grid grid-cols-1 gap-5 max-h-fit relative">
          <Image src="/dropstar.svg" alt="dropstar" height={40} width={50} className="absolute top-0 right-5 w-[5vw] max-w-[40px]" />
          <Card className="max-h-fit flex">
            <TextBlock heading="What" body={project.what} />
          </Card>
          <Card className="max-h-fit">
            <TextBlock heading="Why" body={project.why} />
          </Card>
        </Card>
      </div>

      <div className={`animate-section px-5 grid grid-cols-1 gap-5 ${width}`}>
        <Image src={project.secondImage ?? image} alt="main image" height={10000} width={10000} className="rounded-2xl" />
        {gallery && (
          <div className="grid grid-cols-2 gap-5">
            {gallery.map((src, i) => (
              <div
                key={src}
                // With an odd count, the last image spans the full row
                className={`relative w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] cursor-zoom-in ${gallery.length % 2 === 1 && i === gallery.length - 1 ? "col-span-2" : ""}`}
                onClick={() => setPreview(src)}
              >
                <Image
                  src={src}
                  alt={`Sub Image ${i + 1}`}
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`animate-section grid grid-cols-1 lg:grid-cols-2 gap-3 mx-5 max-h-fit ${width}`}>
        <Card className="flex flex-col gap-5 relative max-h-fit">
          <Image src="/dropstar.svg" alt="Drop Star" width={30} height={40} className="absolute top-5 right-5" />
          <Meta label="Time" value={project.year} />
          <Meta label="Client" value={project.client} />
          <Meta label="Domain" value={project.domain} />
        </Card>
        <Card className="max-h-full">
          <TextBlock heading="How" body={project.how} />
        </Card>
      </div>

      <div className={`animate-section text-white px-5 w-full flex justify-center ${width}`}>
        <Card className="flex flex-col gap-3 max-h-fit w-full p-5 min-h-fit">
          <h1 className="uppercase text-base brightness-50 tracking-tighter">Tech Stack</h1>
          <div className="flex flex-col gap-5 md:flex-row md:justify-center lg:justify-center">
            {project.techstack.map((tech) => (
              <div key={tech.name} className="flex flex-col gap-5 items-center justify-between">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  height={50}
                  width={50}
                  className={invertedTech.includes(tech.name) ? "invert" : ""}
                />
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className={`animate-section flex justify-center w-full ${width}`}>
        <Link
          href={nextId ? `/projects/${nextId}` : "/#projects"}
          className="w-[50%] text-white px-3 py-2 bg-[rgb(65,64,64)] sm:px-5 sm:py-2 rounded-xl active:bg-blue-500 text-center"
        >
          Next Project
        </Link>
      </div>

      {preview && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={close}>
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={preview}
              alt="Full Image"
              width={2000}
              height={2000}
              className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
            />
            <button onClick={close} className="absolute top-2 right-2 px-3 py-1 bg-white/90 text-black rounded-md">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

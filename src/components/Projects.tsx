import Image from "next/image";
import Link from "next/link";
import { Card, CardFooter, Title } from "@/components/ui";
import { mainImage, projects, type Project } from "@/data/projects";

function ProjectCard({ project, className, imageClassName }: { project: Project; className: string; imageClassName: string }) {
  return (
    <Card className={`animate-section w-full flex flex-col justify-between gap-5 ${className}`}>
      <div className={`relative w-full ${imageClassName}`}>
        <Image
          src={mainImage(project)}
          alt={project.title}
          fill
          sizes="100vw"
          className="rounded-2xl object-cover"
          style={{ objectPosition: project.coverPosition }}
        />
      </div>
      <CardFooter category={project.category} title={project.title} />
    </Card>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;
  const rows: Project[][] = [];
  for (let i = 0; i < rest.length; i += 3) rows.push(rest.slice(i, i + 3));

  return (
    <section className="w-full h-full flex flex-col gap-5 mb-20 scroll-mt-32" id="projects">
      <div className="w-full flex flex-col items-center gap-5 my-10">
        <Title title="Top Projects" className="flex" titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
      </div>

      <div className="text-white mb-10">
        <Link href={`/projects/${featured.id}`}>
          <ProjectCard project={featured} className="max-h-fit" imageClassName="h-[300px] md:h-[400px] xl:h-[500px]" />
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        {rows.map((row, i) => {
          const isLast = i === rows.length - 1;

          if (isLast && row.length === 1) {
            return (
              <div key={i} className="text-white">
                <Link href={`/projects/${row[0].id}`}>
                  <ProjectCard project={row[0]} className="" imageClassName="h-[300px] md:h-[400px]" />
                </Link>
              </div>
            );
          }

          if (isLast && row.length === 2) {
            return (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10">
                {row.map((p) => (
                  <Link key={p.id} href={`/projects/${p.id}`} className="text-white">
                    <ProjectCard project={p} className="h-full" imageClassName="h-[300px] md:h-[400px]" />
                  </Link>
                ))}
              </div>
            );
          }

          const [wide, ...others] = row;
          return (
            <div key={i} className="grid grid-cols-1 xl:grid-cols-4 gap-5 xl:gap-10">
              <div className="text-white xl:col-span-2">
                <Link href={`/projects/${wide.id}`} className="h-full block">
                  <ProjectCard project={wide} className="h-full" imageClassName="h-[300px] md:h-[350px] xl:h-[400px]" />
                </Link>
              </div>
              {others.map((p) => (
                <div key={p.id} className="text-white">
                  <Link href={`/projects/${p.id}`} className="h-full block">
                    <ProjectCard project={p} className="h-full" imageClassName="h-[300px] md:h-[350px] xl:h-[400px]" />
                  </Link>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

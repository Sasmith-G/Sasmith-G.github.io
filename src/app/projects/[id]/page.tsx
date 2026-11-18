import { redirect } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";
import AnimateSections from "@/components/AnimateSections";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({ params }: PageProps<"/projects/[id]">) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) redirect("/#projects");

  const nextId = index < projects.length - 1 ? projects[index + 1].id : null;

  return (
    <main className="flex w-full flex-col items-center pt-[100px]">
      <ProjectDetail project={projects[index]} nextId={nextId} />
      <AnimateSections />
    </main>
  );
}

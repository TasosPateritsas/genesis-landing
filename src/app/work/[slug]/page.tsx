import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ProjectPage } from "@/components/ProjectPage";
import { getProject, projects } from "@/data/projects";
import { projectMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return projectMetadata("en", project);
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();

  return (
    <PageShell locale="en">
      <ProjectPage slug={slug} />
    </PageShell>
  );
}

import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ogContentType, ogSize, projectOgImage, projectShareAlt } from "@/lib/ogCard";

export const size = ogSize;
export const contentType = ogContentType;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateImageMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  return [
    {
      id: "share",
      alt: project ? projectShareAlt(project, "el") : "Genesis",
      size: ogSize,
      contentType: ogContentType,
    },
  ];
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return projectOgImage(project, "el");
}

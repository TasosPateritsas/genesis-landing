import { getProject, projects } from "@/data/projects";
import { ogContentType, ogSize, projectOgAlt, renderProjectOg } from "@/lib/projectOg";

export const alt = "Έργο της Genesis";
export const size = ogSize;
export const contentType = ogContentType;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateImageMetadata({ params }: Props) {
  const resolved = params ? await params : undefined;
  const slug = resolved?.slug;
  if (!slug) {
    return [{ id: "default", alt, size: ogSize, contentType: ogContentType }];
  }
  const project = getProject(slug);
  return [
    {
      id: slug,
      alt: project ? projectOgAlt(project, "el") : alt,
      size: ogSize,
      contentType: ogContentType,
    },
  ];
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return new Response("Not found", { status: 404 });
  return renderProjectOg(project, "el");
}

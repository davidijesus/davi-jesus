import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseClient from "../../../components/ProjectCaseClient";
import { getProject } from "../../../data/portfolio";
import { requestBaseUrl } from "../../../data/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — Case de Davi Nascimento`;
  const description = project.summary.pt;
  const baseUrl = await requestBaseUrl();
  const images = project.image ? [`${baseUrl}${project.image}`] : [];
  return {
    title,
    description,
    openGraph: { title, description, type: "article", images },
    twitter: { card: images.length ? "summary_large_image" : "summary", title, description, images },
  };
}

export default async function PortugueseProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectCaseClient project={project} locale="pt" />;
}

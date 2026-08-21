import type { MetadataRoute } from "next";
import { projects } from "./data/portfolio";
import { requestBaseUrl } from "./data/metadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = await requestBaseUrl();
  const updatedAt = new Date();
  const homepages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/pt`, lastModified: updatedAt, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/en`, lastModified: updatedAt, changeFrequency: "monthly", priority: 1 },
  ];
  const cases: MetadataRoute.Sitemap = projects.flatMap((project) => [
    { url: `${baseUrl}/pt/projetos/${project.slug}`, lastModified: updatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/en/projects/${project.slug}`, lastModified: updatedAt, changeFrequency: "monthly", priority: 0.8 },
  ]);

  return [...homepages, ...cases];
}

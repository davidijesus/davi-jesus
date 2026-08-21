import type { MetadataRoute } from "next";
import { requestBaseUrl } from "./data/metadata";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = await requestBaseUrl();

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

import type { Metadata } from "next";
import PortfolioClient from "../components/PortfolioClient";

export function generateMetadata(): Metadata {
  const title = "Davi Nascimento — Building what moves people forward";
  const description = "Davi Nascimento's portfolio across AI, software, data, product and digital experiences.";
  return { title, description, openGraph: { title, description, images: [] }, twitter: { card: "summary", title, description, images: [] } };
}

export default function EnglishPortfolio() {
  return <PortfolioClient locale="en" />;
}

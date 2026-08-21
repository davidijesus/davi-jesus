import type { Metadata } from "next";
import PortfolioClient from "../components/PortfolioClient";

export function generateMetadata(): Metadata {
  const title = "Davi Nascimento — Construindo o que move as pessoas para frente";
  const description = "Portfólio de Davi Nascimento: IA, software, dados, produto e experiências digitais.";
  return { title, description, openGraph: { title, description, images: [] }, twitter: { card: "summary", title, description, images: [] } };
}

export default function PortuguesePortfolio() {
  return <PortfolioClient locale="pt" />;
}

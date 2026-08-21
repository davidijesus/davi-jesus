"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe2 } from "lucide-react";
import { Locale, Project, projects } from "../data/portfolio";

function CaseMedia({ project, locale }: { project: Project; locale: Locale }) {
  if (project.video) {
    return <video className="case-video" autoPlay muted loop playsInline controls aria-label={project.imageAlt[locale]}><source src={project.video} type="video/mp4" /></video>;
  }
  if (project.image) {
    return <Image src={project.image} alt={project.imageAlt[locale]} fill priority sizes="100vw" quality={90} />;
  }
  return null;
}

export default function ProjectCaseClient({ project, locale }: { project: Project; locale: Locale }) {
  const reduced = useReducedMotion();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const workSegment = locale === "pt" ? "projetos" : "projects";
  const otherLocale = locale === "pt" ? "en" : "pt";
  const otherSegment = otherLocale === "pt" ? "projetos" : "projects";
  const labels = locale === "pt" ? {
    back: "Todos os projetos", overview: "Visão geral", role: "Contexto", year: "Período", type: "Tipo", challenge: "O desafio", approach: "A construção", result: "O que ficou de pé", visit: "Visitar projeto", next: "Próximo case", proof: "Processo, decisões e evidências — sem enfeite desnecessário.",
  } : {
    back: "All projects", overview: "Overview", role: "Context", year: "Period", type: "Type", challenge: "The challenge", approach: "The build", result: "What stands", visit: "Visit project", next: "Next case study", proof: "Process, decisions and evidence — without unnecessary decoration.",
  };

  return (
    <main className="case-page">
      <header className="case-header">
        <Link className="brand" href={`/${locale}`}><span className="brand-mark">DN</span><span>Davi Nascimento</span></Link>
        <Link className="case-back" href={`/${locale}#work`}><ArrowLeft size={16} />{labels.back}</Link>
        <Link className="language-switch" href={`/${otherLocale}/${otherSegment}/${project.slug}`}><Globe2 size={14} />{otherLocale.toUpperCase()}</Link>
      </header>

      <section className={`case-hero accent-${project.accent}`}>
        <div className="case-grid" aria-hidden="true" />
        <motion.div className="case-title" initial={reduced ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
          <p>{project.type[locale]} · {project.year}</p>
          <h1>{project.title}</h1>
          <span>{project.organization}</span>
        </motion.div>
        <motion.div className={`case-hero-media case-hero-media-${project.slug}`} initial={reduced ? false : { opacity: 0, clipPath: "inset(10% 0 0 0)" }} animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }} transition={{ duration: .8, delay: .14 }}><CaseMedia project={project} locale={locale} /></motion.div>
      </section>

      <section className="case-overview">
        <div className="case-overview-label"><span>01</span>{labels.overview}</div>
        <div className="case-summary"><h2>{project.summary[locale]}</h2><p>{labels.proof}</p></div>
        <dl>
          <div><dt>{labels.role}</dt><dd>{project.role[locale]}</dd></div>
          <div><dt>{labels.year}</dt><dd>{project.year}</dd></div>
          <div><dt>{labels.type}</dt><dd>{project.type[locale]}</dd></div>
        </dl>
      </section>

      <section className="case-story">
        {[
          { number: "02", title: labels.challenge, body: project.challenge[locale] },
          { number: "03", title: labels.approach, body: project.approach[locale] },
          { number: "04", title: labels.result, body: project.result[locale] },
        ].map((item, itemIndex) => (
          <motion.article key={item.number} initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: itemIndex * .08 }}>
            <span>{item.number}</span><h2>{item.title}</h2><p>{item.body}</p>
          </motion.article>
        ))}
      </section>

      <section className="case-tech">
        <span>05 · STACK / METHODS</span>
        <div>{project.technologies.map((technology) => <strong key={technology}>{technology}</strong>)}</div>
        {project.externalUrl && <a href={project.externalUrl} target="_blank" rel="noreferrer">{labels.visit}<ArrowUpRight size={18} /></a>}
      </section>

      <Link className="next-case" href={`/${locale}/${workSegment}/${next.slug}`}>
        <span>{labels.next}</span><strong>{next.title}</strong><ArrowRight size={34} />
      </Link>
    </main>
  );
}

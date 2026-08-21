"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Download, Globe2, Menu, X } from "lucide-react";
import {
  contact,
  copy,
  experiences,
  Locale,
  metrics,
  projects,
  recognitions,
  services,
} from "../data/portfolio";

const sectionIds = ["work", "experience", "services", "recognition", "about"];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: .65, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Media({ project, locale, priority = false }: { project: (typeof projects)[number]; locale: Locale; priority?: boolean }) {
  if (project.video) {
    return (
      <video autoPlay muted loop playsInline preload="metadata" aria-label={project.imageAlt[locale]}>
        <source src={project.video} type="video/mp4" />
      </video>
    );
  }
  if (project.image) {
    return <Image src={project.image} alt={project.imageAlt[locale]} fill priority={priority} sizes="(max-width: 900px) 94vw, 58vw" quality={90} />;
  }
  return null;
}

export default function PortfolioClient({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const otherLocale: Locale = locale === "pt" ? "en" : "pt";
  const heroRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const [contactType, setContactType] = useState<"project" | "opportunity">("project");
  const [formStatus, setFormStatus] = useState("");
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroCopyY = useTransform(heroProgress, [0, 1], [0, 64]);
  const heroPortraitY = useTransform(heroProgress, [0, 1], [0, 118]);
  const heroGridX = useTransform(heroProgress, [0, 1], [0, 44]);
  const principlesX = useTransform(scrollYProgress, [0, 1], ["0%", "-24%"]);

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
  }, [locale]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = contactType === "project"
      ? locale === "pt" ? "Novo projeto — portfólio" : "New project — portfolio"
      : locale === "pt" ? "Oportunidade profissional — portfólio" : "Professional opportunity — portfolio";
    const body = [
      `${t.formName}: ${data.get("name")}`,
      `${t.formCompany}: ${data.get("company") || "—"}`,
      `${t.formEmail}: ${data.get("email")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    setFormStatus(locale === "pt" ? "Abrindo seu aplicativo de e-mail…" : "Opening your email application…");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="portfolio-shell">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <a className="skip-link" href="#work">{locale === "pt" ? "Pular para projetos" : "Skip to work"}</a>

      <section className="hero" id="top" ref={heroRef}>
        <motion.div className="hero-grid" aria-hidden="true" style={reduced ? undefined : { x: heroGridX }} />
        <motion.div className="hero-orbit hero-orbit-a" aria-hidden="true" animate={reduced ? undefined : { rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} />
        <motion.div className="hero-orbit hero-orbit-b" aria-hidden="true" animate={reduced ? undefined : { rotate: -360 }} transition={{ duration: 48, repeat: Infinity, ease: "linear" }} />

        <header className="site-header">
          <a className="brand" href="#top" aria-label={locale === "pt" ? "Davi Nascimento, voltar ao início" : "Davi Nascimento, back to top"}>
            <span className="brand-mark">DN</span><span>Davi Nascimento</span>
          </a>
          <nav className="desktop-nav" aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}>
            {t.nav.map((item, index) => <a key={item} href={`#${sectionIds[index]}`}>{item}</a>)}
          </nav>
          <div className="header-actions">
            <Link className="language-switch" href={`/${otherLocale}`} aria-label={locale === "pt" ? "View in English" : "Ver em português"}>
              <Globe2 size={14} /> {locale.toUpperCase()} <span>/ {otherLocale.toUpperCase()}</span>
            </Link>
            <a className="header-cta" href="#contact">{locale === "pt" ? "Vamos trabalhar juntos" : "Let's work together"}<ArrowUpRight size={15} /></a>
            <button className="menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label={locale === "pt" ? "Abrir menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation"><Menu /></button>
          </div>
        </header>

        <AnimatePresence>
          {menuOpen && (
            <motion.div id="mobile-navigation" className="mobile-menu" role="dialog" aria-modal="true" aria-label={locale === "pt" ? "Menu principal" : "Main menu"} initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}>
              <div className="mobile-menu-top"><span>Davi Nascimento</span><button type="button" onClick={() => setMenuOpen(false)} aria-label={locale === "pt" ? "Fechar menu" : "Close menu"}><X /></button></div>
              <nav aria-label={locale === "pt" ? "Navegação para celular" : "Mobile navigation"}>
                {t.nav.map((item, index) => <a key={item} href={`#${sectionIds[index]}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item}</a>)}
              </nav>
              <Link href={`/${otherLocale}`} onClick={() => setMenuOpen(false)}>{locale === "pt" ? "View in English" : "Ver em português"} <ArrowRight size={18} /></Link>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div className="hero-copy" style={reduced ? undefined : { y: heroCopyY }}>
          <motion.p className="eyebrow" initial={reduced ? false : { opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5 }}><span />{t.direction}</motion.p>
          <h1 aria-label={`${t.heroA} ${t.heroB}`}>
            <motion.span className="headline-line" initial={reduced ? false : { y: "110%" }} animate={{ y: 0 }} transition={{ duration: .8, ease: [0.2, .9, .2, 1] }}>{t.heroA}</motion.span>
            <span className="headline-mask"><motion.em initial={reduced ? false : { y: "115%", rotate: 2 }} animate={{ y: 0, rotate: 0 }} transition={{ duration: .9, delay: .12, ease: [0.2, .9, .2, 1] }}>{t.heroB}</motion.em></span>
          </h1>
          <motion.p className="hero-description" initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .34 }}>{t.heroDescription}</motion.p>
          <motion.div className="hero-actions" initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .46 }}>
            <a className="button button-primary" href="#work">{t.viewWork}<ArrowDown size={17} /></a>
            <a className="button button-secondary" href="#contact">{t.workWithMe}<ArrowUpRight size={17} /></a>
          </motion.div>
          <motion.div className="availability" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}><span />{t.availability}</motion.div>
          <motion.div className="hero-capability-line" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .78 }} aria-label={locale === "pt" ? "Áreas de atuação" : "Areas of practice"}>
            <span>AI SYSTEMS</span><span>SOFTWARE</span><span>DATA</span><span>PRODUCT</span>
          </motion.div>
        </motion.div>

        <motion.div className="hero-portrait" style={reduced ? undefined : { y: heroPortraitY }} initial={reduced ? false : { opacity: 0, scale: .94, rotate: -2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .9, delay: .25 }}>
          <div className="portrait-frame"><Image src="/davi-hero-enhanced.webp" alt={locale === "pt" ? "Retrato de Davi Nascimento" : "Portrait of Davi Nascimento"} fill priority sizes="(max-width: 900px) 88vw, 42vw" quality={92} /></div>
          <motion.div className="portrait-label label-role" whileHover={reduced ? undefined : { rotate: -3, scale: 1.04 }}>{locale === "pt" ? <>Engenharia,<br />produto e IA</> : <>Engineering,<br />product and AI</>}</motion.div>
          <motion.div className="portrait-label label-award" whileHover={reduced ? undefined : { rotate: 2, scale: 1.04 }}>Top 20<br /><small>{locale === "pt" ? "jovens empreendedores" : "young entrepreneurs"}</small></motion.div>
          <div className="portrait-code">BRA · 13°33&apos;S<br />BUILD / LEARN / MOVE</div>
        </motion.div>

        <div className="credibility-strip" aria-label={locale === "pt" ? "Destaques profissionais" : "Professional highlights"}>
          {t.highlights.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}
        </div>
      </section>

      <div className="principles-rail" aria-label={locale === "pt" ? "Princípios de trabalho" : "Working principles"}>
        <motion.div className="principles-track" style={reduced ? undefined : { x: principlesX }}>
          {[...t.principles, ...t.principles].map((item, index) => (
            <span key={`${item}-${index}`} aria-hidden={index >= t.principles.length}><small>{String((index % t.principles.length) + 1).padStart(2, "0")}</small>{item}</span>
          ))}
        </motion.div>
      </div>

      <section className="work-section section-pad" id="work">
        <Reveal className="section-intro">
          <p className="eyebrow dark"><span />{t.workEyebrow}</p>
          <h2>{t.workTitleA} <em>{t.workTitleB}</em></h2>
          <p>{t.workIntro}</p>
        </Reveal>

        <div className="project-board">
          {projects.map((item, index) => (
            <motion.article key={item.slug} className={`project-card project-card-${index + 1}`} initial={reduced ? false : { opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .6, delay: index * .06 }} whileHover={reduced ? undefined : { y: -8 }}>
              <Link className="project-card-media" href={`/${locale}/${locale === "pt" ? "projetos" : "projects"}/${item.slug}`} aria-label={`${t.openCase}: ${item.title}`}>
                <div className={`project-media project-media-${item.slug} accent-${item.accent}`}><Media project={item} locale={locale} priority={index === 0} /></div>
                <span className="project-card-label">CASE / {String(index + 1).padStart(2, "0")}<ArrowUpRight size={13} /></span>
              </Link>
              <div className="project-card-copy">
                <div className="project-stage-meta"><span>{item.organization}</span><span>{item.year}</span></div>
                <h3><Link href={`/${locale}/${locale === "pt" ? "projetos" : "projects"}/${item.slug}`}>{item.title}</Link></h3>
                <p>{item.summary[locale]}</p>
                <div className="project-card-bottom">
                  <div className="technology-list">{item.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <Link className="text-link" href={`/${locale}/${locale === "pt" ? "projetos" : "projects"}/${item.slug}`}>{t.openCase}<ArrowUpRight size={18} /></Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <Reveal className="section-intro split-intro">
          <div><p className="eyebrow dark"><span />{t.experienceEyebrow}</p><h2>{t.experienceTitleA}{" "}<em>{t.experienceTitleB}</em></h2></div>
          <p>{t.experienceIntro}</p>
        </Reveal>
        <div className="experience-layout">
          <div className="experience-list">
            {experiences.map((item, index) => (
              <button type="button" key={item.organization} className={activeExperience === index ? "is-active" : ""} aria-pressed={activeExperience === index} onClick={() => setActiveExperience(index)}>
                <span>0{index + 1}</span><strong>{item.organization}</strong><ArrowRight size={18} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.article className="experience-card" key={experiences[activeExperience].organization} initial={reduced ? false : { opacity: 0, y: 18, rotate: -1 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: -12 }}>
              <span>{experiences[activeExperience].label[locale]}</span>
              <h3>{experiences[activeExperience].organization}</h3>
              <p>{experiences[activeExperience].detail[locale]}</p>
              <div className="experience-stamp">CONTEXT<br />MATTERS</div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      <section className="metrics-section section-pad">
        <Reveal className="metrics-heading"><p className="eyebrow"><span />{t.metricsEyebrow}</p><h2>{t.metricsTitleA}{" "}<em>{t.metricsTitleB}</em></h2></Reveal>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.article key={metric.value} className={`metric-card tone-${metric.tone} metric-${index + 1}`} initial={reduced ? false : { opacity: 0, y: 30, rotate: index % 2 ? 1 : -1 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} whileHover={reduced ? undefined : { y: -7 }}>
              <strong>{metric.value}</strong><p>{metric.label[locale]}</p><span>0{index + 1}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="services-section section-pad" id="services">
        <Reveal className="section-intro"><p className="eyebrow dark"><span />{t.servicesEyebrow}</p><h2>{t.servicesTitleA}{" "}<em>{t.servicesTitleB}</em></h2></Reveal>
        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.number} className="service-card" delay={index * .06}>
              <span>{service.number}</span><h3>{service.title[locale]}</h3><p>{service.body[locale]}</p><a href="#contact">{t.serviceCta}<ArrowUpRight size={17} /></a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="recognition-section section-pad" id="recognition">
        <Reveal className="recognition-copy"><p className="eyebrow"><span />{t.recognitionEyebrow}</p><h2>{t.recognitionTitleA}{" "}<em>{t.recognitionTitleB}</em></h2><p>{t.recognitionIntro}</p></Reveal>
        <div className="recognition-ledger">
          {recognitions.map((item, index) => (
            <Reveal key={item} className="recognition-ledger-row" delay={(index % 4) * .04}>
              <span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><small>VERIFIED / ARCHIVE</small><Check size={15} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="about-section section-pad" id="about">
        <div className="about-layout">
          <Reveal className="about-photo"><Image src="/davi-panel-enhanced.webp" alt={locale === "pt" ? "Davi participando de um painel" : "Davi speaking on a panel"} fill sizes="(max-width: 800px) 94vw, 43vw" quality={92} /><div className="about-photo-label">SALVADOR → SÃO PAULO → WORLD</div></Reveal>
          <Reveal className="about-copy" delay={.08}>
            <p className="eyebrow dark"><span />{t.aboutEyebrow}</p><h2>{t.aboutTitleA}{" "}<em>{t.aboutTitleB}</em></h2><p>{t.aboutBody}</p>
            <div className="skills-list">{t.skills.map((skill, index) => <span key={skill}><small>0{index + 1}</small>{skill}</span>)}</div>
            <a className="download-link" href="/davi-nascimento-resume.pdf" aria-disabled="true" onClick={(event) => event.preventDefault()}>{locale === "pt" ? "Currículo em preparação" : "Résumé in preparation"}<Download size={17} /></a>
          </Reveal>
        </div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <Reveal className="contact-heading"><p className="eyebrow"><span />{t.contactEyebrow}</p><h2>{t.contactTitleA}{" "}<em>{t.contactTitleB}</em></h2><p>{t.contactBody}</p></Reveal>
        <div className="contact-layout">
          <div className="contact-type" role="group" aria-label={locale === "pt" ? "Tipo de contato" : "Contact type"}>
            <button type="button" className={contactType === "project" ? "is-active" : ""} aria-pressed={contactType === "project"} onClick={() => setContactType("project")}><span>01</span>{t.projectOption}<Check size={18} /></button>
            <button type="button" className={contactType === "opportunity" ? "is-active" : ""} aria-pressed={contactType === "opportunity"} onClick={() => setContactType("opportunity")}><span>02</span>{t.opportunityOption}<Check size={18} /></button>
            <div className="direct-contact"><span>{t.directContact}</span><a href={`mailto:${contact.email}`}>{contact.email}</a><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div>
          </div>
          <form className="contact-form" onSubmit={submitContact}>
            <label>{t.formName}<input name="name" required autoComplete="name" /></label>
            <label>{t.formCompany}<input name="company" autoComplete="organization" /></label>
            <label>{t.formEmail}<input name="email" type="email" required autoComplete="email" /></label>
            <label>{t.formMessage}<textarea name="message" required rows={5} /></label>
            <button type="submit">{t.formSubmit}<ArrowUpRight size={18} /></button>
            <p className="form-status" aria-live="polite">{formStatus}</p>
          </form>
        </div>
      </section>

      <footer>
        <div><strong>Davi Nascimento</strong><p>{t.footer}</p></div>
        <div><span>© 2026</span><a href="#top">{locale === "pt" ? "Voltar ao topo" : "Back to top"} ↑</a></div>
      </footer>
    </main>
  );
}

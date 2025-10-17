"use client";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import StackSection from "@/components/StackSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { lang, setLang } = useLanguage();

  const t = {
    pt: {
      badge: "Desenvolvedor Fullstack",
      heroTitle: "Construo experiências modernas",
      heroDesc:
        "Front-end com React/Next.js e back-end com Java/Spring Boot. Foco em performance, acessibilidade e um design impecável.",
      btnProjects: "Ver Projetos",
      btnAbout: "Sobre Mim",
      featured: "Projetos em Destaque",
      viewAll: "Ver todos →",
      projects: [
        {
          title: "CacoIA: Seu Parceiro Inteligente para Reciclagem de Conteúdo!",
          description:
            "Uma aplicação web completa para otimizar e reciclar seu conteúdo usando o poder da Inteligência Artificial, com uma interface moderna e um mascote cativante para todas as idades.",
          tags: ["Python- FastAPI", "Spring boot", "React"],
          accent: "blue",
        },
        {
          title: "Web Animals",
          description:
            "WebAnimals é um projeto inovador que visa oferecer uma plataforma interativa para explorar as emoções dos seus bixinhos atráves da tela do seu celular ou qualquer outra câmera",
          tags: ["React Native", "Python", "OpenCV"],
          accent: "purple",
        },
      ],
      stackTitle: "Stack & Ferramentas",
      stackFront: "Front-end",
      stackBack: "Back-end",
      stackFrontItems: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Html", "CSS", "JavaScript"],
      stackBackItems: ["Java", "Spring Boot", "Spring AI", "PostgreSQL", "MySQL", "Python"],
      ctaTitle: "Vamos trabalhar juntos?",
      ctaDesc: "Aberto a freelancers, vagas e colaborações.",
      btnPortfolio: "Ver portfólio",
      btnEmail: "Enviar e-mail",
    },
    en: {
      badge: "Fullstack Developer",
      heroTitle: "Building modern experiences",
      heroDesc:
        "Front-end with React/Next.js and back-end with Java/Spring Boot. Focused on performance, accessibility, and flawless design.",
      btnProjects: "View Projects",
      btnAbout: "About Me",
      featured: "Featured Projects",
      viewAll: "View all →",
      projects: [
        {
          title: "CacoIA: Your Smart Partner for Content Recycling!",
          description:
            "A complete web app to optimize and recycle your content using AI, with a modern interface and a captivating mascot for all ages.",
          tags: ["Python- FastAPI", "Spring boot", "React"],
          accent: "blue",
        },
        {
          title: "Web Animals",
          description:
            "WebAnimals is an innovative project offering an interactive platform to explore your pets' emotions through your phone or any camera.",
          tags: ["React Native", "Python", "OpenCV"],
          accent: "purple",
        },
      ],
      stackTitle: "Stack & Tools",
      stackFront: "Front-end",
      stackBack: "Back-end",
      stackFrontItems: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Html", "CSS", "JavaScript"],
      stackBackItems: ["Java", "Spring Boot", "Spring AI", "PostgreSQL", "MySQL", "Python"],
      ctaTitle: "Let's work together?",
      ctaDesc: "Open to freelance, jobs, and collaborations.",
      btnPortfolio: "View portfolio",
      btnEmail: "Send email",
    },
  };

  const tr = t[lang];

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="flex justify-end mb-4">
          <button
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800 transition-colors text-sm font-semibold"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            aria-label={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        <section className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400"></span>
            {tr.badge}
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            {tr.heroTitle}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {tr.heroDesc}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 transition-colors"
            >
              {tr.btnProjects}
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center rounded-lg border border-gray-700 px-6 py-3 font-semibold text-gray-200 hover:border-gray-500 hover:bg-gray-800/40 transition-colors"
            >
              {tr.btnAbout}
            </Link>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400">{tr.featured}</h2>
            <Link href="/projetos" className="text-sm text-gray-300 hover:text-white transition-colors">
              {tr.viewAll}
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {tr.projects.map((proj, idx) => (
              <ProjectCard
                key={proj.title + idx}
                title={proj.title}
                description={proj.description}
                href="/projetos"
                tags={proj.tags}
                accent={proj.accent as 'blue' | 'purple' | 'green'}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400">{tr.stackTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            <StackSection title={tr.stackFront} items={tr.stackFrontItems} />
            <StackSection title={tr.stackBack} items={tr.stackBackItems} />
          </div>
        </section>

        <section className="rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">{tr.ctaTitle}</h3>
          <p className="mt-2 text-gray-300">{tr.ctaDesc}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projetos"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              {tr.btnPortfolio}
            </Link>
            <a
              href="mailto:joaovitor.nascimento.dev@gmail.com"
              className="rounded-lg border border-gray-700 px-6 py-3 font-semibold text-gray-200 hover:border-gray-500 hover:bg-gray-800/40 transition-colors"
            >
              {tr.btnEmail}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
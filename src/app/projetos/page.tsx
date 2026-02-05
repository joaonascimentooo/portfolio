
"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjetosPage() {
  const { lang, setLang } = useLanguage();

  const t = {
    pt: {
      title: "Meus Projetos",
      subtitle: "Explorando tecnologias e construindo soluções inovadoras",
      viewCode: "Ver Código",
      viewDetails: "Ver Detalhes",
      allProjects: "Ver Todos no GitHub",
      projects: [
        {
          id: "cronicas-do-tempo-perdido",
          name: "Crônicas do Tempo Perdido",
          desc: "Aplicação web para criar e gerenciar personagens de histórias com autenticação segura, dashboard, ranking de usuários e armazenamento em tempo real com Firebase.",
          tags: ["Next.js", "TypeScript", "Firebase", "Autenticação"],
          github: "https://github.com/joaonascimentooo/CronicasDoTempoPerdido",
          color: "cyan"
        },
        {
          id: "cacoia",
          name: "CacoIA",
          desc: "Aplicação web completa para otimizar e reciclar conteúdo usando Inteligência Artificial, com interface moderna e mascote cativante.",
          tags: ["Python", "FastAPI", "Spring Boot", "React", "IA"],
          github: "https://github.com/joaonascimentooo/Caco",
          color: "blue"
        },
        {
          id: "web-animals",
          name: "Web Animals",
          desc: "Plataforma interativa para explorar as emoções dos seus pets através da câmera do celular usando reconhecimento facial e IA.",
          tags: ["React Native", "Python", "OpenCV", "Computer Vision"],
          github: "https://github.com/joaonascimentooo/WebAnimals",
          color: "purple"
        },
        {
          id: "library-mindxandria",
          name: "Library Mindxandria",
          desc: "Sistema de gerenciamento de biblioteca desenvolvido com Spring Boot, oferecendo controle completo de livros, usuários e empréstimos.",
          tags: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
          github: "https://github.com/joaonascimentooo/LibraryMindxandria",
          color: "green"
        }
      ],
      btnLang: "EN",
      ariaLabel: "Switch to English"
    },
    en: {
      title: "My Projects",
      subtitle: "Exploring technologies and building innovative solutions",
      viewCode: "View Code",
      viewDetails: "View Details",
      allProjects: "View All on GitHub",
      projects: [
        {
          id: "cronicas-do-tempo-perdido",
          name: "Crônicas do Tempo Perdido",
          desc: "Web application to create and manage story characters with secure authentication, dashboard, user ranking and real-time storage with Firebase.",
          tags: ["Next.js", "TypeScript", "Firebase", "Authentication"],
          github: "https://github.com/joaonascimentooo/CronicasDoTempoPerdido",
          color: "cyan"
        },
        {
          id: "cacoia",
          name: "CacoIA",
          desc: "Complete web application to optimize and recycle content using Artificial Intelligence, with modern interface and captivating mascot.",
          tags: ["Python", "FastAPI", "Spring Boot", "React", "AI"],
          github: "https://github.com/joaonascimentooo/Caco",
          color: "blue"
        },
        {
          id: "web-animals",
          name: "Web Animals",
          desc: "Interactive platform to explore your pets' emotions through your phone camera using facial recognition and AI.",
          tags: ["React Native", "Python", "OpenCV", "Computer Vision"],
          github: "https://github.com/joaonascimentooo/WebAnimals",
          color: "purple"
        },
        {
          id: "library-mindxandria",
          name: "Library Mindxandria",
          desc: "Library management system built with Spring Boot, providing complete control of books, users and loans.",
          tags: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
          github: "https://github.com/joaonascimentooo/LibraryMindxandria",
          color: "green"
        }
      ],
      btnLang: "PT",
      ariaLabel: "Mudar para Português"
    }
  };
  const tr = t[lang];

  const colorClasses = {
    blue: "border-blue-500/30 hover:border-blue-500 bg-blue-500/5",
    purple: "border-purple-500/30 hover:border-purple-500 bg-purple-500/5",
    green: "border-green-500/30 hover:border-green-500 bg-green-500/5",
    orange: "border-orange-500/30 hover:border-orange-500 bg-orange-500/5",
    cyan: "border-cyan-500/30 hover:border-cyan-500 bg-cyan-500/5",
    pink: "border-pink-500/30 hover:border-pink-500 bg-pink-500/5"
  };

  const accentColors = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    green: "text-green-400",
    orange: "text-orange-400",
    cyan: "text-cyan-400",
    pink: "text-pink-400"
  };

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800 transition-colors text-sm font-semibold"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            aria-label={tr.ariaLabel}
          >
            {tr.btnLang}
          </button>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {tr.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {tr.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tr.projects.map((proj, idx) => (
            <div 
              key={proj.name + idx} 
              className={`rounded-xl border p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-60 hover:opacity-100 ${colorClasses[proj.color as keyof typeof colorClasses]}`}
            >
              <h2 className={`text-2xl font-bold mb-3 ${accentColors[proj.color as keyof typeof accentColors]}`}>
                {proj.name}
              </h2>
              <p className="text-gray-300 mb-4 min-h-[80px]">
                {proj.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tags.map((tag, i) => (
                  <span 
                    key={tag + i} 
                    className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700 text-xs text-gray-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/projetos/${proj.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all"
                >
                  📖 {tr.viewDetails}
                </Link>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-500 text-white font-semibold transition-colors"
                  title={tr.viewCode}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/joaovictor-novo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            {tr.allProjects}
          </a>
        </div>
      </div>
    </main>
  );
}
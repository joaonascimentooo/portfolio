"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";

export default function ProjetoDetalhePage() {
  const params = useParams();
  const id = params.id as string;
  const { lang, setLang } = useLanguage();

  const projectsData = {
    pt: {
      "cronicas-do-tempo-perdido": {
        name: "Crônicas do Tempo Perdido",
        fullDesc: "Crônicas do Tempo Perdido é uma aplicação web inovadora para criar e gerenciar personagens de histórias com autenticação segura. A plataforma oferece um dashboard completo, sistema de ranking de usuários para incentivar criatividade, e armazenamento de dados em tempo real com Firebase. Construída com Next.js, TypeScript e Firebase, a aplicação oferece uma experiência fluida e responsiva para escritores e entusiastas de histórias.",
        features: [
          "Autenticação segura e gerenciamento de usuários",
          "Criação e edição de personagens com detalhes completos",
          "Dashboard personalizado para cada usuário",
          "Sistema de ranking baseado em contribuições",
          "Armazenamento em tempo real com Firebase",
          "Interface intuitiva e responsiva",
          "Sincronização automática de dados",
          "Temas personalizáveis"
        ],
        tags: ["Next.js", "TypeScript", "Firebase", "Autenticação"],
        github: "https://github.com/joaonascimentooo/CronicasDoTempoPerdido",
        demo: "https://cronicas-do-tempo-perdido.vercel.app",
        video: null,
        screenshots: []
      },
      cacoia: {
        name: "CacoIA",
        fullDesc: "CacoIA é uma aplicação web completa desenvolvida para otimizar e reciclar conteúdo usando o poder da Inteligência Artificial. O projeto conta com um backend robusto em Spring Boot e FastAPI, frontend moderno em React, e integração com modelos de IA para geração e otimização de conteúdo. O mascote cativante torna a experiência amigável para todas as idades.",
        features: [
          "Geração de conteúdo com IA",
          "Interface moderna e responsiva",
          "Backend escalável com microsserviços",
          "Integração com APIs de IA",
          "Sistema de autenticação seguro"
        ],
        tags: ["Python", "FastAPI", "Spring Boot", "React", "IA"],
        github: "https://github.com/joaonascimentooo/Caco",
        demo: null, // URL da demo se disponível
        video: null, // URL do vídeo (YouTube, Vimeo, etc)
        screenshots: [
          // Adicione URLs das screenshots aqui
          // "/screenshots/cacoia-1.png",
          // "/screenshots/cacoia-2.png",
        ]
      },
      "web-animals": {
        name: "Web Animals",
        fullDesc: "WebAnimals é um projeto inovador que oferece uma plataforma interativa para explorar as emoções dos seus pets através da câmera do celular ou qualquer câmera conectada. Utiliza reconhecimento facial com OpenCV e algoritmos de Machine Learning para detectar e interpretar expressões faciais de animais em tempo real.",
        features: [
          "Reconhecimento facial em tempo real",
          "Detecção de emoções de pets",
          "Interface mobile responsiva",
          "Processamento de vídeo com OpenCV",
          "Análise de comportamento animal"
        ],
        tags: ["React Native", "Python", "OpenCV", "Computer Vision"],
        github: "https://github.com/joaonascimentooo/WebAnimals",
        demo: null,
        video: null,
        screenshots: []
      },
      "library-mindxandria": {
        name: "Library Mindxandria",
        fullDesc: "Sistema completo de gerenciamento de biblioteca desenvolvido com Spring Boot e arquitetura REST. O sistema oferece funcionalidades para controle de livros, cadastro de usuários, gerenciamento de empréstimos e devoluções, com persistência de dados em PostgreSQL. Implementa validações robustas, tratamento de exceções e documentação automática da API.",
        features: [
          "CRUD completo de livros e usuários",
          "Sistema de empréstimos e devoluções",
          "Validação de dados e regras de negócio",
          "API RESTful com documentação Swagger",
          "Persistência com PostgreSQL",
          "Tratamento de exceções centralizado",
          "Arquitetura em camadas (Controller, Service, Repository)"
        ],
        tags: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Swagger"],
        github: "https://github.com/joaonascimentooo/LibraryMindxandria",
        demo: null,
        video: null,
        screenshots: [
          "/screenshots/library-mindxandria-home.png",
          "/screenshots/library-mindxandria-upload.png",
          "/screenshots/library-mindxandria-profile.png",
          "/screenshots/library-mindxandria-books.png"
        ]
      },
      "ecommerce": {
        name: "Sistema E-commerce",
        fullDesc: "Plataforma de e-commerce completa desenvolvida com arquitetura de microsserviços. Inclui sistema de pagamentos integrado, recomendação de produtos usando Spring AI e Google Gemini, gestão de estoque, carrinho de compras e painel administrativo completo.",
        features: [
          "Arquitetura de microsserviços",
          "Integração com gateways de pagamento",
          "Sistema de recomendação com IA",
          "Gestão completa de produtos e estoque",
          "Dashboard administrativo",
          "Carrinho de compras em tempo real"
        ],
        tags: ["Spring Boot", "React", "Next.js", "PostgreSQL", "Spring AI"],
        github: "https://github.com/joaovictor-novo",
        demo: null,
        video: null,
        screenshots: []
      },
      "api-restful": {
        name: "API RESTful com Spring",
        fullDesc: "API robusta desenvolvida com Spring Boot para gerenciamento completo de produtos e usuários. Implementa autenticação JWT, documentação automática com Swagger, testes unitários e de integração, e segue as melhores práticas de desenvolvimento de APIs REST.",
        features: [
          "Autenticação e autorização JWT",
          "Documentação Swagger/OpenAPI",
          "CRUD completo de recursos",
          "Validação de dados robusta",
          "Testes unitários e de integração",
          "Tratamento de exceções centralizado"
        ],
        tags: ["Java", "Spring Boot", "MySQL", "JWT", "Swagger"],
        github: "https://github.com/joaovictor-novo",
        demo: null,
        video: null,
        screenshots: []
      },
      "dashboard": {
        name: "Dashboard Analítico",
        fullDesc: "Dashboard interativo para visualização e análise de dados empresariais. Oferece gráficos dinâmicos, filtros avançados, exportação de relatórios em múltiplos formatos e atualização em tempo real dos dados.",
        features: [
          "Gráficos interativos com Chart.js",
          "Filtros e busca avançada",
          "Exportação de relatórios (PDF, Excel)",
          "Atualização de dados em tempo real",
          "Design responsivo e moderno",
          "Temas claro e escuro"
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
        github: "https://github.com/joaovictor-novo",
        demo: null,
        video: null,
        screenshots: []
      },
      "ia-recomendacao": {
        name: "Sistema de Recomendação IA",
        fullDesc: "Sistema inteligente de recomendação desenvolvido com Spring AI e Google Gemini. Analisa comportamento de usuários, histórico de interações e preferências para fornecer sugestões personalizadas e relevantes.",
        features: [
          "Análise de comportamento com IA",
          "Recomendações personalizadas",
          "Integração com Google Gemini",
          "Aprendizado contínuo",
          "API de recomendações",
          "Dashboard de métricas"
        ],
        tags: ["Spring AI", "Google Gemini", "Java", "Machine Learning"],
        github: "https://github.com/joaovictor-novo",
        demo: null,
        video: null,
        screenshots: []
      }
    },
    en: {
      "cronicas-do-tempo-perdido": {
        name: "Crônicas do Tempo Perdido",
        fullDesc: "Crônicas do Tempo Perdido is an innovative web application to create and manage story characters with secure authentication. The platform offers a complete dashboard, user ranking system to encourage creativity, and real-time data storage with Firebase. Built with Next.js, TypeScript, and Firebase, the application delivers a smooth and responsive experience for writers and story enthusiasts.",
        features: [
          "Secure authentication and user management",
          "Character creation and editing with complete details",
          "Personalized dashboard for each user",
          "Ranking system based on contributions",
          "Real-time storage with Firebase",
          "Intuitive and responsive interface",
          "Automatic data synchronization",
          "Customizable themes"
        ],
        tags: ["Next.js", "TypeScript", "Firebase", "Authentication"],
        github: "https://github.com/joaonascimentooo/CronicasDoTempoPerdido",
        demo: "https://cronicas-do-tempo-perdido.vercel.app",
        video: null,
        screenshots: []
      },
      cacoia: {
        name: "CacoIA",
        fullDesc: "CacoIA is a complete web application developed to optimize and recycle content using the power of Artificial Intelligence. The project features a robust backend in Spring Boot and FastAPI, modern React frontend, and integration with AI models for content generation and optimization. The captivating mascot makes the experience friendly for all ages.",
        features: [
          "AI-powered content generation",
          "Modern and responsive interface",
          "Scalable microservices backend",
          "AI API integration",
          "Secure authentication system"
        ],
        tags: ["Python", "FastAPI", "Spring Boot", "React", "AI"],
        github: "https://github.com/joaonascimentooo/Caco",
        demo: null,
        video: null,
        screenshots: []
      },
      "web-animals": {
        name: "Web Animals",
        fullDesc: "WebAnimals is an innovative project offering an interactive platform to explore your pets' emotions through your phone camera or any connected camera. Uses facial recognition with OpenCV and Machine Learning algorithms to detect and interpret animal facial expressions in real-time.",
        features: [
          "Real-time facial recognition",
          "Pet emotion detection",
          "Responsive mobile interface",
          "Video processing with OpenCV",
          "Animal behavior analysis"
        ],
        tags: ["React Native", "Python", "OpenCV", "Computer Vision"],
        github: "https://github.com/joaovictor-novo/web-animals",
        demo: null,
        video: null,
        screenshots: []
      },
      "library-mindxandria": {
        name: "Library Mindxandria",
        fullDesc: "Complete library management system built with Spring Boot and REST architecture. The system offers functionalities for book control, user registration, loan and return management, with PostgreSQL data persistence. Implements robust validations, exception handling, and automatic API documentation.",
        features: [
          "Complete CRUD for books and users",
          "Loan and return system",
          "Data validation and business rules",
          "RESTful API with Swagger documentation",
          "PostgreSQL persistence",
          "Centralized exception handling",
          "Layered architecture (Controller, Service, Repository)"
        ],
        tags: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Swagger"],
        github: "https://github.com/joaonascimentooo/LibraryMindxandria",
        demo: null,
        video: null,
        screenshots: [
          "/screenshots/library-mindxandria-home.png",
          "/screenshots/library-mindxandria-upload.png",
          "/screenshots/library-mindxandria-profile.png",
          "/screenshots/library-mindxandria-books.png"
        ]
      },
      "ecommerce": {
        name: "E-commerce System",
        fullDesc: "Complete e-commerce platform developed with microservices architecture. Includes integrated payment system, product recommendations using Spring AI and Google Gemini, inventory management, shopping cart, and complete admin panel.",
        features: [
          "Microservices architecture",
          "Payment gateway integration",
          "AI recommendation system",
          "Complete product and inventory management",
          "Admin dashboard",
          "Real-time shopping cart"
        ],
        tags: ["Spring Boot", "React", "Next.js", "PostgreSQL", "Spring AI"],
        github: "https://github.com/joaovictor-novo",
        demo: null,
        video: null,
        screenshots: []
      },
      "api-restful": {
        name: "RESTful API with Spring",
        fullDesc: "Robust API developed with Spring Boot for complete product and user management. Implements JWT authentication, automatic Swagger documentation, unit and integration tests, and follows REST API development best practices.",
        features: [
          "JWT authentication and authorization",
          "Swagger/OpenAPI documentation",
          "Complete resource CRUD",
          "Robust data validation",
          "Unit and integration tests",
          "Centralized exception handling"
        ],
        tags: ["Java", "Spring Boot", "MySQL", "JWT", "Swagger"],
        github: "https://github.com/joaovictor-novo",
        demo: null,
        video: null,
        screenshots: []
      },
      "dashboard": {
        name: "Analytics Dashboard",
        fullDesc: "Interactive dashboard for business data visualization and analysis. Offers dynamic charts, advanced filters, multi-format report export, and real-time data updates.",
        features: [
          "Interactive charts with Chart.js",
          "Advanced filters and search",
          "Report export (PDF, Excel)",
          "Real-time data updates",
          "Responsive modern design",
          "Light and dark themes"
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
        github: "https://github.com/joaovictor-novo",
        demo: null,
        video: null,
        screenshots: []
      },
      "ia-recomendacao": {
        name: "AI Recommendation System",
        fullDesc: "Intelligent recommendation system developed with Spring AI and Google Gemini. Analyzes user behavior, interaction history, and preferences to provide personalized and relevant suggestions.",
        features: [
          "AI behavior analysis",
          "Personalized recommendations",
          "Google Gemini integration",
          "Continuous learning",
          "Recommendations API",
          "Metrics dashboard"
        ],
        tags: ["Spring AI", "Google Gemini", "Java", "Machine Learning"],
        github: "https://github.com/joaovictor-novo",
        demo: null,
        video: null,
        screenshots: []
      }
    }
  };

  const t = {
    pt: {
      backToProjects: "← Voltar para Projetos",
      overview: "Visão Geral",
      features: "Funcionalidades",
      technologies: "Tecnologias",
      gallery: "Galeria",
      viewCode: "Ver Código no GitHub",
      viewDemo: "Ver Demo ao Vivo",
      viewVideo: "Assistir Vídeo",
      demoUnavailable: "Demo em Desenvolvimento",
      projectNotFound: "Projeto não encontrado",
      btnLang: "EN",
      ariaLabel: "Switch to English"
    },
    en: {
      backToProjects: "← Back to Projects",
      overview: "Overview",
      features: "Features",
      technologies: "Technologies",
      gallery: "Gallery",
      viewCode: "View Code on GitHub",
      viewDemo: "View Live Demo",
      viewVideo: "Watch Video",
      demoUnavailable: "Demo Under Development",
      projectNotFound: "Project not found",
      btnLang: "PT",
      ariaLabel: "Mudar para Português"
    }
  };

  const tr = t[lang];
  const projects = projectsData[lang];
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-red-400 mb-4">{tr.projectNotFound}</h1>
          <Link href="/projetos" className="text-blue-400 hover:text-blue-300">
            {tr.backToProjects}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/projetos" 
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
          >
            {tr.backToProjects}
          </Link>
          <button
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800 transition-colors text-sm font-semibold"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            aria-label={tr.ariaLabel}
          >
            {tr.btnLang}
          </button>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.name}
          </h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span 
                key={tag + i} 
                className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-sm text-gray-300 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Media Section - Demo, Video, Screenshots em Grid */}
        <div className="mb-12 grid gap-6 lg:grid-cols-2">
          {/* Demo Section */}
          <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-900 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="p-3 bg-gray-800 border-b border-gray-700">
              <h3 className="text-sm font-semibold text-white">🚀 Live Demo</h3>
            </div>
            {project.demo ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={project.demo}
                  className="absolute top-0 left-0 w-full h-full"
                  title={`${project.name} Demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex items-center justify-center p-12 text-center" style={{ minHeight: '280px' }}>
                <div>
                  <div className="text-5xl mb-3">🚧</div>
                  <p className="text-gray-400 text-sm">{tr.demoUnavailable}</p>
                </div>
              </div>
            )}
          </div>

          {/* Video Section */}
          <div className="rounded-xl overflow-hidden border border-purple-700 bg-gray-900 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="p-3 bg-purple-900/30 border-b border-purple-700">
              <h3 className="text-sm font-semibold text-white">🎥 {tr.viewVideo}</h3>
            </div>
            {project.video ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={project.video}
                  className="absolute top-0 left-0 w-full h-full"
                  title={`${project.name} Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="flex items-center justify-center p-12 text-center" style={{ minHeight: '280px' }}>
                <div>
                  <div className="text-5xl mb-3">🎬</div>
                  <p className="text-gray-400 text-sm">Vídeo em breve</p>
                </div>
              </div>
            )}
          </div>

          {/* Screenshots Gallery */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-cyan-400">📸 {tr.gallery}</h3>
              </div>
              <ScreenshotCarousel screenshots={project.screenshots} projectName={project.name} />
            </div>
          )}
        </div>

        {!project.demo && !project.video && (!project.screenshots || project.screenshots.length === 0) && (
          <div className="mb-12 rounded-xl border border-gray-700 bg-gray-800/30 p-12 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <p className="text-xl text-gray-400">{tr.demoUnavailable}</p>
            <p className="text-sm text-gray-500 mt-2">Em breve: demonstrações, vídeos e screenshots!</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Overview */}
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">{tr.overview}</h2>
            <p className="text-gray-300 leading-relaxed">{project.fullDesc}</p>
          </div>

          {/* Features */}
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">{tr.features}</h2>
            <ul className="space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="mr-2 text-green-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-gray-500 text-white font-bold text-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            {tr.viewCode}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg transition-all duration-300 hover:scale-105"
            >
              🚀 {tr.viewDemo}
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

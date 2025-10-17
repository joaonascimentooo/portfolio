"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SobrePage() {
  const { lang, setLang } = useLanguage();
  const t = {
    pt: {
      title: "Sobre Mim",
      hello: "Olá! Sou ",
      name: "João Nascimento",
      dev: "desenvolvedor fullstack apaixonado por criar soluções inovadoras e experiências digitais incríveis.",
      whoTitle: "Quem Sou Eu",
      whoDesc1: "Sou um desenvolvedor fullstack com expertise em contruir aplicações web modernas e aplicações mobiles, escaláveis e de alta performance. Sou fascinado por tecnologia e estou sempre em busca de aprender novas ferramentas e frameworks para aprimorar minhas habilidades.",
      whoDesc2: "Com uma sólida experiência tanto no front-end quanto no back-end, consigo transformar ideias em produtos digitais completos, desde a concepção até a implementação e deploy.",
      skillsTitle: "Habilidades Técnicas",
      front: "Front-end",
      back: "Back-end",
      frontSkills: ["React.js / Next.js", "Tailwind CSS", "HTML5 & CSS3", "Responsive Design"],
      backSkills: ["Java / Spring Boot", "PostgreSQL / MySQL", "RESTful APIs", "Git & GitHub"],
      expTitle: "Experiência Profissional",
      jobs: [
        {
          role: "Desenvolvedor Fullstack Pleno",
          date: "Jan 2025 - Presente",
          company: "Centra",
          tasks: [
            "Desenvolvimento de plataforma e-commerce usando React e Next.js",
            "Implementação de arquitetura de microsserviços e APIs RESTful usando Spring Boot",
            "Liderança técnica na construção da API e microsserviços",
            "Integração com APIs de pagamento e serviços terceiros",
            "Manutenção de um extenso banco de dados tanto em PostgreSQL quanto em MySQL",
            "Construção da inteligência artificial para recomendação de produtos, estatísticas de vendas e análise de comportamento do usuário utilizando Spring AI e Google Studio Gemini"
          ]
        },
        {
          role: "Desenvolvedor Backend Pleno",
          date: "Mar 2024 - Ago 2024",
          company: "StarColors",
          tasks: [
            "Implementação de arquitetura de microsserviços e APIs RESTful usando Spring Boot",
            "Integração com APIs de pagamento e serviços terceiros",
            "Construção da inteligência artificial para recomendação no uso de tintas sobre uma superficie",
            "Manuntenção de Banco de Dados em MySQL"
          ]
        },
        {
          role: "Desenvolvedor Full Stack Junior",
          date: "Maio 2023 - Out 2025",
          company: "Escritorio Escola de Sistemas de Informação - CEST",
          tasks: [
            "Monitoria e suporte a alunos em projetos de desenvolvimento",
            "Experiencias como Professor e Mentor sobre Desenvolvimento de Software com foco em práticas ágeis, tecnicas de versionamento com Git e GitHub, uso de tecnologias como Html, CSS, JavaScript, Java Spring Boot e Python",
            "Criação de interfaces responsivas e acessíveis",
            "Desenvolvimento com JavaScript, HTML5 e CSS3",
            "Colaboração com designers e equipe de UX",
            "Implementação de arquitetura de microsserviços e APIs RESTful usando Spring Boot"
          ]
        }
      ],
      ctaTitle: "Vamos trabalhar juntos?",
      ctaDesc: "Estou sempre aberto a novos desafios e oportunidades de colaboração.",
      btnContact: "Entre em Contato",
      btnLang: "EN",
      ariaLabel: "Switch to English"
    },
    en: {
      title: "About Me",
      hello: "Hi! I'm ",
      name: "João Nascimento",
      dev: "a passionate fullstack developer creating innovative solutions and amazing digital experiences.",
      whoTitle: "Who Am I",
      whoDesc1: "I'm a fullstack developer with expertise in building modern web and mobile applications, scalable and high-performance. I'm fascinated by technology and always looking to learn new tools and frameworks to improve my skills.",
      whoDesc2: "With solid experience in both front-end and back-end, I can turn ideas into complete digital products, from conception to implementation and deployment.",
      skillsTitle: "Technical Skills",
      front: "Front-end",
      back: "Back-end",
      frontSkills: ["React.js / Next.js", "Tailwind CSS", "HTML5 & CSS3", "Responsive Design"],
      backSkills: ["Java / Spring Boot", "PostgreSQL / MySQL", "RESTful APIs", "Git & GitHub"],
      expTitle: "Professional Experience",
      jobs: [
        {
          role: "Fullstack Developer",
          date: "Jan 2025 - Present",
          company: "Centra",
          tasks: [
            "Development of e-commerce platform using React and Next.js",
            "Implementation of microservices architecture and RESTful APIs using Spring Boot",
            "Technical leadership in building API and microservices",
            "Integration with payment APIs and third-party services",
            "Maintenance of extensive databases in both PostgreSQL and MySQL",
            "Building AI for product recommendation, sales statistics, and user behavior analysis using Spring AI and Google Studio Gemini"
          ]
        },
        {
          role: "Backend Developer",
          date: "Mar 2024 - Aug 2024",
          company: "StarColors",
          tasks: [
            "Implementation of microservices architecture and RESTful APIs using Spring Boot",
            "Integration with payment APIs and third-party services",
            "Building AI for paint usage recommendation",
            "Database maintenance in MySQL"
          ]
        },
        {
          role: "Junior Full Stack Developer",
          date: "May 2023 - Oct 2025",
          company: "Escritorio Escola de Sistemas de Informação - CEST",
          tasks: [
            "Mentoring and support for students in development projects",
            "Experience as Teacher and Mentor in Software Development focused on agile practices, versioning techniques with Git and GitHub, and technologies like Html, CSS, JavaScript, Java Spring Boot and Python",
            "Creation of responsive and accessible interfaces",
            "Development with JavaScript, HTML5 and CSS3",
            "Collaboration with designers and UX team",
            "Implementation of microservices architecture and RESTful APIs using Spring Boot"
          ]
        }
      ],
      ctaTitle: "Let's work together?",
      ctaDesc: "I'm always open to new challenges and collaboration opportunities.",
      btnContact: "Contact Me",
      btnLang: "PT",
      ariaLabel: "Mudar para Português"
    }
  };
  const tr = t[lang];

  return (
    <main className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end w-full mb-4">
          <button
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800 transition-colors text-sm font-semibold"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            aria-label={tr.ariaLabel}
          >
            {tr.btnLang}
          </button>
        </div>
        <div className="mb-16 grid gap-8 md:grid-cols-[160px_1fr] md:items-center">
          <div className="group w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-blue-500/40 ring-offset-2 ring-offset-gray-950 shadow-lg">
            <Image
              src="/cestIMG_2738.jpg"
              alt={`Foto de perfil de ${tr.name}`}
              width={160}
              height={160}
              priority
              className="w-full h-full object-cover object-center transition-transform duration-300 ease-out hover:scale-110 group-hover:scale-110 transform-gpu will-change-transform"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              {tr.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {tr.hello}
              <span className="text-blue-400 font-semibold">{tr.name}</span>,
              <span className="text-purple-400 font-semibold"> {tr.dev}</span>
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
            {tr.whoTitle}
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>{tr.whoDesc1}</p>
            <p>{tr.whoDesc2}</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-400">
            {tr.skillsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{tr.front}</h3>
              <ul className="space-y-2 text-gray-300">
                {tr.frontSkills.map((skill, idx) => (
                  <li key={skill + idx} className="flex items-center">
                    <span className="mr-2">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">{tr.back}</h3>
              <ul className="space-y-2 text-gray-300">
                {tr.backSkills.map((skill, idx) => (
                  <li key={skill + idx} className="flex items-center">
                    <span className="mr-2">▹</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-blue-400">
            {tr.expTitle}
          </h2>
          <div className="space-y-8">
            {tr.jobs.map((job, idx) => (
              <div key={job.role + idx} className={`border-l-4 pl-6 py-2 ${idx === 0 ? 'border-blue-500' : idx === 1 ? 'border-purple-500' : 'border-green-500'}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                  <span className="text-gray-400 text-sm">{job.date}</span>
                </div>
                <p className="text-purple-400 font-medium mb-3">{job.company}</p>
                <ul className="space-y-2 text-gray-300">
                  {job.tasks.map((task, i) => (
                    <li key={task + i} className="flex items-start">
                      <span className="mr-2 mt-1">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-8 border border-blue-500/30">
          <h2 className="text-2xl font-bold mb-4 text-white">
            {tr.ctaTitle}
          </h2>
          <p className="text-gray-300 mb-6">
            {tr.ctaDesc}
          </p>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-vitor-nascimento1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            {tr.btnContact}
          </a>
        </section>
      </div>
    </main>
  );
}

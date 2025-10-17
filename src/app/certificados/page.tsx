"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialId: string;
  image: string;
  skills: string[];
  description: string;
};

export default function CertificadosPage() {
  const { lang, setLang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const t = {
    pt: {
      title: "Certificados & Conquistas",
      subtitle: "Minha jornada de aprendizado contínuo em tecnologia",
      filterAll: "Todos",
      categories: {
        frontend: "Front-end",
        backend: "Back-end",
        mobile: "Mobile",
        ai: "Inteligência Artificial",
        cloud: "Cloud & DevOps",
        other: "Outros"
      },
      viewCertificate: "Ver Certificado",
      close: "Fechar",
      issuedBy: "Emitido por",
      date: "Data",
      credentialId: "ID da Credencial",
      skills: "Habilidades",
      noCertificates: "Nenhum certificado encontrado nesta categoria",
      btnLang: "EN",
      ariaLabel: "Switch to English",
      certificates: [
        {
          id: 1,
          title: "Desenvolvedor Java Spring Boot",
          issuer: "Udemy",
          date: "2024",
          category: "backend",
          credentialId: "UC-XXXXX",
          image: "/certificates/java-spring.jpg",
          skills: ["Java", "Spring Boot", "REST API", "JPA"],
          description: "Curso completo sobre desenvolvimento de aplicações com Spring Boot, incluindo criação de APIs REST, integração com banco de dados e boas práticas."
        },
        {
          id: 2,
          title: "React - The Complete Guide",
          issuer: "Udemy",
          date: "2024",
          category: "frontend",
          credentialId: "UC-XXXXX",
          image: "/certificates/react.jpg",
          skills: ["React", "Hooks", "Redux", "TypeScript"],
          description: "Curso aprofundado em React, cobrindo desde fundamentos até tópicos avançados como performance optimization e arquitetura de aplicações."
        },
        {
          id: 3,
          title: "Machine Learning & AI Fundamentals",
          issuer: "Coursera",
          date: "2024",
          category: "ai",
          credentialId: "XXXXX",
          image: "/certificates/ai.jpg",
          skills: ["Python", "Machine Learning", "TensorFlow", "Neural Networks"],
          description: "Introdução aos conceitos fundamentais de Machine Learning e Inteligência Artificial, incluindo redes neurais e deep learning."
        },
        {
          id: 4,
          title: "React Native - Mobile Development",
          issuer: "Udemy",
          date: "2023",
          category: "mobile",
          credentialId: "UC-XXXXX",
          image: "/certificates/react-native.jpg",
          skills: ["React Native", "Mobile", "JavaScript", "Expo"],
          description: "Desenvolvimento de aplicações mobile multiplataforma usando React Native, incluindo integração com APIs e publicação nas stores."
        },
        {
          id: 5,
          title: "AWS Cloud Practitioner",
          issuer: "Amazon Web Services",
          date: "2024",
          category: "cloud",
          credentialId: "AWS-XXXXX",
          image: "/certificates/aws.jpg",
          skills: ["AWS", "Cloud Computing", "EC2", "S3"],
          description: "Certificação fundamental da AWS cobrindo conceitos de cloud computing, serviços principais e melhores práticas de segurança."
        },
        {
          id: 6,
          title: "Next.js & React - Complete Guide",
          issuer: "Udemy",
          date: "2024",
          category: "frontend",
          credentialId: "UC-XXXXX",
          image: "/certificates/nextjs.jpg",
          skills: ["Next.js", "React", "SSR", "TypeScript"],
          description: "Desenvolvimento de aplicações web modernas com Next.js, incluindo SSR, SSG, API routes e otimizações de performance."
        }
      ]
    },
    en: {
      title: "Certificates & Achievements",
      subtitle: "My journey of continuous learning in technology",
      filterAll: "All",
      categories: {
        frontend: "Front-end",
        backend: "Back-end",
        mobile: "Mobile",
        ai: "Artificial Intelligence",
        cloud: "Cloud & DevOps",
        other: "Others"
      },
      viewCertificate: "View Certificate",
      close: "Close",
      issuedBy: "Issued by",
      date: "Date",
      credentialId: "Credential ID",
      skills: "Skills",
      noCertificates: "No certificates found in this category",
      btnLang: "PT",
      ariaLabel: "Mudar para Português",
      certificates: [
        {
          id: 1,
          title: "Java Spring Boot Developer",
          issuer: "Udemy",
          date: "2024",
          category: "backend",
          credentialId: "UC-XXXXX",
          image: "/certificates/java-spring.jpg",
          skills: ["Java", "Spring Boot", "REST API", "JPA"],
          description: "Complete course on Spring Boot application development, including REST API creation, database integration, and best practices."
        },
        {
          id: 2,
          title: "React - The Complete Guide",
          issuer: "Udemy",
          date: "2024",
          category: "frontend",
          credentialId: "UC-XXXXX",
          image: "/certificates/react.jpg",
          skills: ["React", "Hooks", "Redux", "TypeScript"],
          description: "In-depth React course covering fundamentals to advanced topics like performance optimization and application architecture."
        },
        {
          id: 3,
          title: "Machine Learning & AI Fundamentals",
          issuer: "Coursera",
          date: "2024",
          category: "ai",
          credentialId: "XXXXX",
          image: "/certificates/ai.jpg",
          skills: ["Python", "Machine Learning", "TensorFlow", "Neural Networks"],
          description: "Introduction to fundamental concepts of Machine Learning and Artificial Intelligence, including neural networks and deep learning."
        },
        {
          id: 4,
          title: "React Native - Mobile Development",
          issuer: "Udemy",
          date: "2023",
          category: "mobile",
          credentialId: "UC-XXXXX",
          image: "/certificates/react-native.jpg",
          skills: ["React Native", "Mobile", "JavaScript", "Expo"],
          description: "Cross-platform mobile application development using React Native, including API integration and store publication."
        },
        {
          id: 5,
          title: "AWS Cloud Practitioner",
          issuer: "Amazon Web Services",
          date: "2024",
          category: "cloud",
          credentialId: "AWS-XXXXX",
          image: "/certificates/aws.jpg",
          skills: ["AWS", "Cloud Computing", "EC2", "S3"],
          description: "AWS fundamental certification covering cloud computing concepts, core services, and security best practices."
        },
        {
          id: 6,
          title: "Next.js & React - Complete Guide",
          issuer: "Udemy",
          date: "2024",
          category: "frontend",
          credentialId: "UC-XXXXX",
          image: "/certificates/nextjs.jpg",
          skills: ["Next.js", "React", "SSR", "TypeScript"],
          description: "Modern web application development with Next.js, including SSR, SSG, API routes, and performance optimizations."
        }
      ]
    }
  };

  const tr = t[lang];

  const filteredCertificates = selectedCategory === 'all' 
    ? tr.certificates 
    : tr.certificates.filter(cert => cert.category === selectedCategory);

  const categoryColors: { [key: string]: string } = {
    frontend: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    backend: "bg-green-500/10 border-green-500/30 text-green-400",
    mobile: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    ai: "bg-pink-500/10 border-pink-500/30 text-pink-400",
    cloud: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    other: "bg-orange-500/10 border-orange-500/30 text-orange-400"
  };

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
            className="px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800 transition-colors text-sm font-semibold"
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            aria-label={tr.ariaLabel}
          >
            {tr.btnLang}
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            {tr.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {tr.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
            }`}
          >
            {tr.filterAll}
          </button>
          {Object.entries(tr.categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {filteredCertificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="rounded-xl border border-gray-700 bg-gray-800/50 overflow-hidden hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative w-full h-48 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  {cert.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="text-6xl">🎓</div>
                  )}
                </div>

                <div className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border ${categoryColors[cert.category]}`}>
                    {tr.categories[cert.category as keyof typeof tr.categories]}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded bg-gray-700/50 text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 rounded bg-gray-700/50 text-xs text-gray-300">
                        +{cert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📜</div>
            <p className="text-xl text-gray-400">{tr.noCertificates}</p>
          </div>
        )}

        {selectedCert && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-gray-900 rounded-2xl border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cabeçalho do Modal */}
              <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">{selectedCert.title}</h2>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="relative w-full h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl overflow-hidden mb-6 flex items-center justify-center">
                  {selectedCert.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div className="text-9xl">🎓</div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">{tr.issuedBy}</h3>
                    <p className="text-lg font-semibold text-white">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">{tr.date}</h3>
                    <p className="text-lg font-semibold text-white">{selectedCert.date}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">{tr.credentialId}</h3>
                    <p className="text-lg font-semibold text-white">{selectedCert.credentialId}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Categoria</h3>
                    <p className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${categoryColors[selectedCert.category]}`}>
                      {tr.categories[selectedCert.category as keyof typeof tr.categories]}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-2">Descrição</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedCert.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">{tr.skills}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

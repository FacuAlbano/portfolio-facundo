'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Sun,
  Moon
} from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [darkMode, setDarkMode] = useState(false);

  // Detectar preferencia del sistema y aplicar modo oscuro
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle modo oscuro
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const content = {
    es: {
      hero: {
        title: "Facundo Ernesto Albano",
        subtitle: "Desarrollador Full Stack & Arquitecto de Soluciones Digitales",
        description: "Transformo ideas en aplicaciones robustas y escalables. Especializado en tecnologías modernas con enfoque en experiencia de usuario excepcional y código de calidad empresarial."
      },
      about: {
        title: "Perfil Profesional",
        description: "Soy un desarrollador Full Stack con sólida formación técnica y pasión por la innovación tecnológica. Mi enfoque se centra en crear soluciones que no solo funcionen, sino que superen las expectativas del usuario y agreguen valor real al negocio. Mi experiencia en desarrollo web moderno me permite abordar proyectos complejos con metodologías ágiles y mejores prácticas de la industria.",
        details: [
          { icon: Calendar, text: "29 años de edad - Nacido el 14 de Agosto de 1996" },
          { icon: MapPin, text: "Rosario, Santa Fe, Argentina - Disponible para trabajo remoto" },
          { icon: GraduationCap, text: "Técnico en Desarrollo de Software - URQUIZA (4 materias pendientes)" },
          { icon: Briefcase, text: "Enfoque en desarrollo web empresarial y aplicaciones escalables" }
        ]
      },
      skills: {
        title: "Competencias Técnicas",
        categories: [
          {
            name: "Frontend Development",
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"]
          },
          {
            name: "Backend Development",
            skills: ["Node.js", "Express.js", "APIs RESTful", "GraphQL", "Microservicios"]
          },
          {
            name: "Base de Datos",
            skills: ["SQL", "MongoDB", "MySQL", "PostgreSQL", "Diseño de esquemas"]
          },
          {
            name: "Herramientas & DevOps",
            skills: ["Git & GitHub", "Docker", "CI/CD", "VS Code", "Figma", "Metodologías Ágiles"]
          }
        ]
      },
      projects: {
        title: "Portfolio de Proyectos",
        items: [
          {
            name: "TRRO - Sistema de Gestión Integral",
            description: "Aplicación web empresarial desarrollada como proyecto final de mi carrera técnica. Demuestra mi capacidad para diseñar e implementar soluciones full-stack complejas, con arquitectura escalable y experiencia de usuario intuitiva. Tecnologías: React, Node.js, Base de datos relacional.",
            tech: ["React", "Node.js", "Base de datos", "Arquitectura MVC"],
            status: "Proyecto Final - Demostración de Competencias",
            link: null
          },
          {
            name: "Alterna Servicios Eléctricos",
            description: "Sitio web corporativo profesional para empresa de servicios eléctricos, implementando diseño responsive, SEO optimizado y funcionalidades avanzadas. Resultado: presencia digital profesional que refleja la calidad de la empresa.",
            tech: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsive Design"],
            link: "https://facualbano.github.io/alterna-servicios-electricos",
            status: "En Producción - Sitio Corporativo"
          }
        ]
      },
      education: {
        title: "Formación Académica",
        items: [
          {
            level: "Educación Primaria",
            school: "Escuela Juan Arzeno",
            status: "Completo",
            description: "Base educativa sólida"
          },
          {
            level: "Educación Secundaria",
            school: "EEMPA 1317",
            status: "Completo",
            description: "Formación integral"
          },
          {
            level: "Educación Superior",
            school: "URQUIZA - Técnico en Desarrollo de Software",
            status: "En progreso (4 materias pendientes)",
            description: "Especialización en desarrollo de software con enfoque práctico"
          }
        ]
      },
      contact: {
        title: "¿Listo para Colaborar?",
        subtitle: "Busco oportunidades para aplicar mis habilidades en proyectos desafiantes y crecer profesionalmente en un entorno dinámico."
      }
    },
    en: {
      hero: {
        title: "Facundo Ernesto Albano",
        subtitle: "Full Stack Developer & Digital Solutions Architect",
        description: "I transform ideas into robust and scalable applications. Specialized in modern technologies with focus on exceptional user experience and enterprise-grade code quality."
      },
      about: {
        title: "Professional Profile",
        description: "I'm a Full Stack developer with solid technical training and passion for technological innovation. My approach focuses on creating solutions that not only work, but exceed user expectations and add real business value. My experience in modern web development allows me to tackle complex projects with agile methodologies and industry best practices.",
        details: [
          { icon: Calendar, text: "29 years old - Born on August 14, 1996" },
          { icon: MapPin, text: "Rosario, Santa Fe, Argentina - Available for remote work" },
          { icon: GraduationCap, text: "Software Development Technician - URQUIZA (4 subjects pending)" },
          { icon: Briefcase, text: "Focus on enterprise web development and scalable applications" }
        ]
      },
      skills: {
        title: "Technical Competencies",
        categories: [
          {
            name: "Frontend Development",
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"]
          },
          {
            name: "Backend Development",
            skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Microservices"]
          },
          {
            name: "Database",
            skills: ["SQL", "MongoDB", "MySQL", "PostgreSQL", "Schema Design"]
          },
          {
            name: "Tools & DevOps",
            skills: ["Git & GitHub", "Docker", "CI/CD", "VS Code", "Figma", "Agile Methodologies"]
          }
        ]
      },
      projects: {
        title: "Project Portfolio",
        items: [
          {
            name: "TRRO - Comprehensive Management System",
            description: "Enterprise web application developed as my technical career final project. Demonstrates my ability to design and implement complex full-stack solutions, with scalable architecture and intuitive user experience. Technologies: React, Node.js, Relational database.",
            tech: ["React", "Node.js", "Database", "MVC Architecture"],
            status: "Final Project - Skills Demonstration",
            link: null
          },
          {
            name: "Alterna Electrical Services",
            description: "Professional corporate website for electrical services company, implementing responsive design, SEO optimization and advanced functionalities. Result: professional digital presence that reflects company quality.",
            tech: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsive Design"],
            link: "https://facualbano.github.io/alterna-servicios-electricos",
            status: "In Production - Corporate Website"
          }
        ]
      },
      education: {
        title: "Academic Background",
        items: [
          {
            level: "Primary Education",
            school: "Juan Arzeno School",
            status: "Complete",
            description: "Solid educational foundation"
          },
          {
            level: "Secondary Education",
            school: "EEMPA 1317",
            status: "Complete",
            description: "Comprehensive formation"
          },
          {
            level: "Higher Education",
            school: "URQUIZA - Software Development Technician",
            status: "In progress (4 subjects pending)",
            description: "Software development specialization with practical focus"
          }
        ]
      },
      contact: {
        title: "Ready to Collaborate?",
        subtitle: "I'm seeking opportunities to apply my skills in challenging projects and grow professionally in a dynamic environment."
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 dark:from-secondary-900 dark:via-primary-900 dark:to-secondary-800 transition-all duration-500 ease-out">
      {/* Header con selector de idioma y modo oscuro */}
      <header className="fixed top-0 w-full bg-white/90 dark:bg-secondary-900/90 backdrop-blur-xl z-50 border-b border-primary-200/50 dark:border-primary-700/50 transition-all duration-500 ease-out shadow-soft dark:shadow-large">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer"
            >
              FA
            </motion.h1>
            <div className="flex items-center space-x-4">
              {/* Selector de idioma */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    language === 'es' 
                      ? 'bg-primary-600 text-white shadow-glow' 
                      : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                    language === 'en' 
                      ? 'bg-primary-600 text-white shadow-glow' 
                      : 'text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  EN
                </button>
              </div>
              
              {/* Toggle modo oscuro */}
              <button
                onClick={toggleDarkMode}
                className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800/50 hover:scale-110 transition-all duration-300 shadow-soft hover:shadow-medium"
                aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                {currentContent.hero.title}
              </h1>
              <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 mb-4 transition-colors duration-300">
                {currentContent.hero.subtitle}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-300">
                {currentContent.hero.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sobre Mí */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                {currentContent.about.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors duration-300">
                {currentContent.about.description}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentContent.about.details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <detail.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                  <p className="text-slate-700 dark:text-slate-300">{detail.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Habilidades */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                {currentContent.skills.title}
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentContent.skills.categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 text-center transition-colors duration-300">
                    {category.name}
                  </h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="bg-blue-50 dark:bg-blue-900/20 px-3 py-2 rounded-md text-sm text-blue-700 dark:text-blue-300 text-center transition-colors duration-300"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                {currentContent.projects.title}
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {currentContent.projects.items.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-sm transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
                      {project.status}
                    </span>
                    {project.link && (
                      <a
                        href={project.link}
          target="_blank"
          rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        Ver proyecto →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Educación */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                {currentContent.education.title}
              </h2>
            </motion.div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {currentContent.education.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors duration-300">
                        {item.level}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300">
                        {item.school}
                      </p>
                    </div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                {currentContent.contact.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 transition-colors duration-300">
                {currentContent.contact.subtitle}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.a
                href="mailto:albano.facundo@hotmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <Mail className="w-8 h-8 mb-3 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-700 dark:text-slate-300">Email</span>
                <span className="text-sm text-blue-600 dark:text-blue-400">albano.facundo@hotmail.com</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/FacuAlbano"
          target="_blank"
          rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <Github className="w-8 h-8 mb-3 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-700 dark:text-slate-300">GitHub</span>
                <span className="text-sm text-blue-600 dark:text-blue-400">@FacuAlbano</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/facundo-albano-5b0495337"
          target="_blank"
          rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <Linkedin className="w-8 h-8 mb-3 text-blue-600 dark:text-blue-400" />
                <span className="text-slate-700 dark:text-slate-300">LinkedIn</span>
                <span className="text-sm text-blue-600 dark:text-blue-400">Facundo Albano</span>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 Facundo Ernesto Albano. Desarrollado con Next.js y Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

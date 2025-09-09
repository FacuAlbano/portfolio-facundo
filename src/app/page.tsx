
'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Sun,
  Moon,
  ExternalLink,
  Play,
  Pause,
  Code,
  Palette,
  Database,
  Globe,
  Zap,
  Star,
  Award,
  ChevronDown,
  Download,
  Phone,
  MessageCircle,
  X,
  Copy,
  Check
} from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [darkMode, setDarkMode] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Scroll parallax effects
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Detectar preferencia del sistema y aplicar modo oscuro
  useEffect(() => {
    setIsClient(true);
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
        subtitle: "Explora mis proyectos más destacados con demostraciones interactivas",
        items: [
          {
            name: "TRRO - Sistema de Gestión Integral",
            description: "Aplicación web empresarial desarrollada como proyecto final de mi carrera técnica. Demuestra mi capacidad para diseñar e implementar soluciones full-stack complejas, con arquitectura escalable y experiencia de usuario intuitiva.",
            tech: ["React", "Node.js", "MySQL", "Express.js", "JWT Auth", "Material-UI"],
            status: "Proyecto Final - Demostración de Competencias",
            link: null,
            github: "https://github.com/FacuAlbano/TransitoRosario",
            video: "/videos/trro-demo.mp4", // Placeholder para tu video futuro
            image: "/images/trro-preview.jpg",
            features: ["Gestión de usuarios", "Dashboard analítico", "Sistema de reportes", "API RESTful"],
            category: "Full Stack"
          },
          {
            name: "Alterna Servicios Eléctricos",
            description: "Sitio web corporativo profesional para empresa de servicios eléctricos, implementando diseño responsive, SEO optimizado y funcionalidades avanzadas. Resultado: presencia digital profesional que refleja la calidad de la empresa.",
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO", "Google Analytics"],
            link: "https://facualbano.github.io/alterna-servicios-electricos",
            status: "En Producción - Sitio Corporativo",
            github: "https://github.com/FacuAlbano/alterna-servicios-electricos",
            video: "/videos/alterna-demo.mp4", // Placeholder para tu video futuro
            image: "/images/alterna-preview.jpg",
            features: ["Diseño responsive", "Optimización SEO", "Formularios contacto", "Galería de servicios"],
            category: "Frontend"
          },
          {
            name: "Portfolio Personal",
            description: "Este mismo portfolio que estás viendo ahora. Desarrollado con las tecnologías más modernas para demostrar mis habilidades en desarrollo frontend avanzado y diseño de experiencia de usuario.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hooks"],
            link: 'https://github.com/FacuAlbano/portfolio-facundo',
            status: "Proyecto Actual - En Desarrollo",
            github: "https://github.com/FacuAlbano/portfolio-facundo",
            video: "/videos/portfolio-demo.mp4", // Placeholder para tu video futuro
            image: "/images/portfolio-preview.jpg",
            features: ["Animaciones fluidas", "Modo oscuro", "Multiidioma", "Diseño responsive"],
            category: "Frontend"
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
      experience: {
        title: "Experiencia Profesional",
        subtitle: "9 años en administración que me aportan una perspectiva única al desarrollo",
        intro: "Mi extensa experiencia en el rubro administrativo me ha proporcionado habilidades transferibles valiosas que potencian mi trabajo como desarrollador:",
        skills: [
          {
            title: "Gestión de Proyectos",
            description: "Coordinación de múltiples tareas y deadlines, metodologías de trabajo eficientes",
            icon: "📊"
          },
          {
            title: "Atención al Detalle",
            description: "Precisión en documentación y procesos, esencial para código limpio y libre de errores",
            icon: "🔍"
          },
          {
            title: "Comunicación Efectiva",
            description: "Experiencia trabajando con diferentes stakeholders y traduciendo requerimientos técnicos",
            icon: "💬"
          },
          {
            title: "Resolución de Problemas",
            description: "Análisis crítico y pensamiento sistemático para encontrar soluciones eficientes",
            icon: "🎯"
          },
          {
            title: "Trabajo en Equipo",
            description: "Colaboración efectiva en equipos multidisciplinarios y liderazgo de procesos",
            icon: "🤝"
          },
          {
            title: "Orientación a Resultados",
            description: "Enfoque en objetivos medibles y mejora continua de procesos",
            icon: "📈"
          }
        ],
        transition: "Esta combinación única de experiencia administrativa y pasión por la tecnología me permite aportar una perspectiva integral a cualquier equipo de desarrollo."
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
        subtitle: "Explore my featured projects with interactive demonstrations",
        items: [
          {
            name: "TRRO - Comprehensive Management System",
            description: "Enterprise web application developed as my technical career final project. Demonstrates my ability to design and implement complex full-stack solutions, with scalable architecture and intuitive user experience.",
            tech: ["React", "Node.js", "MySQL", "Express.js", "JWT Auth", "Material-UI"],
            status: "Final Project - Skills Demonstration",
            link: null,
            github: "https://github.com/FacuAlbano/TransitoRosario",
            video: "/videos/trro-demo.mp4",
            image: "/images/trro-preview.jpg",
            features: ["User management", "Analytics dashboard", "Report system", "RESTful API"],
            category: "Full Stack"
          },
          {
            name: "Alterna Electrical Services",
            description: "Professional corporate website for electrical services company, implementing responsive design, SEO optimization and advanced functionalities. Result: professional digital presence that reflects company quality.",
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO", "Google Analytics"],
            link: "https://facualbano.github.io/alterna-servicios-electricos",
            status: "In Production - Corporate Website",
            github: "https://github.com/FacuAlbano/alterna-servicios-electricos",
            video: "/videos/alterna-demo.mp4",
            image: "/images/alterna-preview.jpg",
            features: ["Responsive design", "SEO optimization", "Contact forms", "Service gallery"],
            category: "Frontend"
          },
          {
            name: "Personal Portfolio",
            description: "This very portfolio you're viewing now. Developed with the most modern technologies to demonstrate my skills in advanced frontend development and user experience design.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hooks"],
            link: 'https://github.com/FacuAlbano/portfolio-facundo',
            status: "Current Project - In Development",
            github: "https://github.com/FacuAlbano/portfolio-facundo",
            video: "/videos/portfolio-demo.mp4",
            image: "/images/portfolio-preview.jpg",
            features: ["Smooth animations", "Dark mode", "Multi-language", "Responsive design"],
            category: "Frontend"
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
      experience: {
        title: "Professional Experience",
        subtitle: "9 years in administration providing a unique perspective to development",
        intro: "My extensive experience in administration has provided me with valuable transferable skills that enhance my work as a developer:",
        skills: [
          {
            title: "Project Management",
            description: "Coordination of multiple tasks and deadlines, efficient work methodologies",
            icon: "📊"
          },
          {
            title: "Attention to Detail",
            description: "Precision in documentation and processes, essential for clean and error-free code",
            icon: "🔍"
          },
          {
            title: "Effective Communication",
            description: "Experience working with different stakeholders and translating technical requirements",
            icon: "💬"
          },
          {
            title: "Problem Solving",
            description: "Critical analysis and systematic thinking to find efficient solutions",
            icon: "🎯"
          },
          {
            title: "Teamwork",
            description: "Effective collaboration in multidisciplinary teams and process leadership",
            icon: "🤝"
          },
          {
            title: "Results Oriented",
            description: "Focus on measurable objectives and continuous process improvement",
            icon: "📈"
          }
        ],
        transition: "This unique combination of administrative experience and passion for technology allows me to bring a comprehensive perspective to any development team."
      },
      contact: {
        title: "Ready to Collaborate?",
        subtitle: "I'm seeking opportunities to apply my skills in challenging projects and grow professionally in a dynamic environment."
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  // Video player handler
  const toggleVideo = (videoId: string) => {
    if (videoPlaying === videoId) {
      setVideoPlaying(null);
    } else {
      setVideoPlaying(videoId);
    }
  };

  // Contact handlers
  const handleContact = (type: string) => {
    switch (type) {
      case 'phone':
        window.open('tel:+543413319513', '_self');
        break;
      case 'whatsapp':
        window.open('https://wa.me/543413319513?text=Hola%20Facundo,%20vi%20tu%20portfolio%20y%20me%20interesa%20contactarte', '_blank');
        break;
      case 'email':
        window.open('mailto:albano.facundo@hotmail.com?subject=Contacto%20desde%20Portfolio&body=Hola%20Facundo,%20vi%20tu%20portfolio%20y%20me%20interesa%20contactarte.', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/facundo-albano-5b0495337', '_blank');
        break;
      case 'github':
        window.open('https://github.com/FacuAlbano', '_blank');
        break;
    }
    setShowContactModal(false);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Download CV + Cover Letter handler
  const downloadCV = () => {
    // Definir archivos según idioma
    const files = language === 'es' 
      ? [
          { path: '/documents/CV_Facundo_Albano.pdf', name: 'CV_Facundo_Albano.pdf' },
          { path: '/documents/Carta de presentacion  Porfolio.docx', name: 'Carta_Presentacion_Facundo_Albano.docx' }
        ]
      : [
          { path: '/documents/Facundo_Albano_Software_Developer_Resume.pdf', name: 'Facundo_Albano_Software_Developer_Resume.pdf' },
          { path: '/documents/Facundo_Albano_Junior_Web_Developer_Cover_Letter.docx', name: 'Facundo_Albano_Cover_Letter.docx' }
        ];

    // Descargar cada archivo con un pequeño delay
    files.forEach((file, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = file.path;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500); // 500ms de delay entre descargas
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-all duration-700">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/4 -right-4 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl z-50 border-b border-slate-200/50 dark:border-slate-700/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">FA</span>
              </div>
              <span className="font-semibold text-slate-900 dark:text-white">Facundo Albano</span>
            </motion.div>
            
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    language === 'es' 
                      ? 'bg-primary-500 text-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                    language === 'en' 
                      ? 'bg-primary-500 text-white shadow-sm' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-primary-500'
                  }`}
                >
                  EN
                </button>
              </div>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative pt-16">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-accent-600/10 dark:from-primary-400/10 dark:to-accent-400/10"
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6"
                >
                  <span className="text-primary-600 dark:text-primary-400 font-medium">👋 ¡Hola! Soy</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
                >
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
                    {currentContent.hero.title}
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 font-semibold mb-6"
                >
                  {currentContent.hero.subtitle}
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl"
                >
                  {currentContent.hero.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <button 
                    onClick={() => setShowContactModal(true)}
                    className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5 group-hover:animate-icon-bounce" />
                    Contactar
                  </button>
                  <button 
                    onClick={downloadCV}
                    className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-xl font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    {language === 'es' ? 'CV + Carta' : 'CV + Cover Letter'}
                  </button>
                </motion.div>
                
                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex gap-4 mt-8"
                >
                  <a href="https://github.com/FacuAlbano" target="_blank" rel="noopener noreferrer" 
                     className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300 hover:shadow-lg">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/facundo-albano-5b0495337" target="_blank" rel="noopener noreferrer"
                     className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300 hover:shadow-lg">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="mailto:albano.facundo@hotmail.com"
                     className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all duration-300 hover:shadow-lg">
                    <Mail className="w-6 h-6" />
                  </a>
                </motion.div>
              </motion.div>
              
              {/* Right Content - Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl blur-lg opacity-20 animate-pulse-slow"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-400 rounded-full opacity-20 animate-bounce-gentle"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-400 rounded-full opacity-15 animate-float"></div>
                  
                  {/* Profile Image Container */}
                  <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="/images/fotocv.jpg" 
                      alt="Facundo Ernesto Albano - Desarrollador Full Stack"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay with tech icons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-4">
                        <div className="p-2 bg-white/90 rounded-lg">
                          <Code className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="p-2 bg-white/90 rounded-lg">
                          <Database className="w-6 h-6 text-accent-600" />
                        </div>
                        <div className="p-2 bg-white/90 rounded-lg">
                          <Globe className="w-6 h-6 text-primary-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="flex flex-col items-center text-slate-400 dark:text-slate-500">
                <span className="text-sm mb-2">Scroll para explorar</span>
                <ChevronDown className="w-6 h-6 animate-bounce-gentle" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sobre Mí */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 transition-colors duration-300">
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
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block p-3 bg-accent-100 dark:bg-accent-900/30 rounded-2xl mb-6"
              >
                <Code className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {currentContent.skills.title}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Tecnologías y herramientas que domino para crear soluciones excepcionales
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentContent.skills.categories.map((category, index) => {
                const iconMap = {
                  'Frontend Development': Palette,
                  'Backend Development': Database,
                  'Base de Datos': Database,
                  'Database': Database,
                  'Herramientas & DevOps': Globe,
                  'Tools & DevOps': Globe,
                };
                const IconComponent = iconMap[category.name as keyof typeof iconMap] || Code;
                
                return (
                <motion.div
                  key={index}
                    initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                      <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {category.name}
                  </h3>
                      </div>
                      
                      <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                          <motion.div
                        key={skillIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 cursor-pointer"
                          >
                            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {skill}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                  </div>
                </motion.div>
                );
              })}
            </div>
            
            {/* Skills Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-3 gap-8"
            >
              <div className="text-center p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">3+</div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">Años de Experiencia</div>
              </div>
              <div className="text-center p-6 bg-accent-50 dark:bg-accent-900/20 rounded-2xl">
                <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">20+</div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">Tecnologías Dominadas</div>
              </div>
              <div className="text-center p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">10+</div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">Proyectos Completados</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl mb-6"
              >
                <Zap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {currentContent.projects.title}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {currentContent.projects.subtitle}
              </p>
            </motion.div>
            
            <div className="grid gap-8 lg:gap-12">
              {currentContent.projects.items.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700">
                    <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                      
                      {/* Video/Image Preview */}
                      <div className={`relative bg-slate-100 dark:bg-slate-700 ${index % 2 === 0 ? 'order-1' : 'lg:order-2'}`}>
                        <div className="aspect-video relative overflow-hidden">
                          {videoPlaying === project.name && isClient ? (
                            /* Video Player */
                            <div className="absolute inset-0">
                              <video
                                className="w-full h-full object-cover"
                                controls
                                autoPlay
                                onEnded={() => {
                                  const video = document.querySelector(`video[data-project="${project.name}"]`) as HTMLVideoElement;
                                  if (video) {
                                    video.currentTime = 0; // Restart from beginning
                                    video.play(); // Auto restart
                                  }
                                }}
                                onLoadedData={(e) => {
                                  const video = e.target as HTMLVideoElement;
                                  video.playbackRate = 2.0; // Velocidad x2
                                }}
                                onCanPlay={(e) => {
                                  const video = e.target as HTMLVideoElement;
                                  video.playbackRate = 2.0; // Asegurar velocidad x2
                                }}
                                data-project={project.name}
                              >
                                <source src={project.video} type="video/mp4" />
                                Tu navegador no soporta videos HTML5.
                              </video>
                              
                              {/* Video Controls Overlay */}
                              <div className="absolute top-4 right-4 flex gap-2 z-10">
                                {/* Speed Indicator */}
                                <div className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                                  2x
                                </div>
                                {/* Close Video Button */}
                                <button
                                  onClick={() => setVideoPlaying(null)}
                                  className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          ) : (
                            /* Video Thumbnail/Preview */
                            <div className="absolute inset-0">
                              {/* Background Video Preview (muted) */}
                              {isClient ? (
                                <video
                                  className="w-full h-full object-cover opacity-40"
                                  muted
                                  loop
                                  autoPlay
                                  playsInline
                                  onLoadedData={(e) => {
                                    const video = e.target as HTMLVideoElement;
                                    video.playbackRate = 2.0; // Velocidad x2
                                    video.currentTime = 10; // Start at 10 seconds for better preview
                                  }}
                                  onCanPlay={(e) => {
                                    const video = e.target as HTMLVideoElement;
                                    video.playbackRate = 2.0; // Asegurar velocidad x2
                                  }}
                                  onEnded={(e) => {
                                    const video = e.target as HTMLVideoElement;
                                    video.currentTime = 10; // Restart from 10 seconds
                                    video.play(); // Auto restart
                                  }}
                                >
                                  <source src={project.video} type="video/mp4" />
                                </video>
                              ) : (
                                /* Loading placeholder */
                                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 animate-pulse" />
                              )}
                              
                              {/* Play Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center">
                                <div className="text-center">
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => toggleVideo(project.name)}
                                    className="w-20 h-20 bg-white/95 dark:bg-slate-800/95 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 mb-4 backdrop-blur-sm"
                                  >
                                    <Play className="w-8 h-8 text-primary-600 ml-1" />
                                  </motion.button>
                                  <p className="text-white font-semibold text-lg drop-shadow-lg">
                                    {language === 'es' ? 'Ver Demo Completo' : 'Watch Full Demo'}
                                  </p>
                                  <p className="text-white/80 text-sm mt-1">
                                    {language === 'es' ? 'Click para ver a tamaño completo (2x)' : 'Click for full size (2x speed)'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Project Category Badge */}
                          <div className="absolute top-4 left-4 z-20 flex gap-2">
                            <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full shadow-lg">
                              {project.category}
                            </span>
                            {videoPlaying !== project.name && (
                              <span className="px-2 py-1 bg-accent-500 text-white text-xs font-medium rounded-full shadow-lg animate-pulse">
                                Auto 2x
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'order-2' : 'lg:order-1'}`}>
                        <motion.div
                          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {project.name}
                  </h3>
                          
                          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                          
                          {/* Features */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                              Características principales
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {project.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2">
                                  <Star className="w-4 h-4 text-accent-500" />
                                  <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Tech Stack */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                              Tecnologías utilizadas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                                  className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                          </div>
                          
                          {/* Actions */}
                          <div className="flex flex-col sm:flex-row gap-4">
                    {project.link && (
                      <a
                        href={project.link}
          target="_blank"
          rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                                <ExternalLink className="w-5 h-5" />
                                Ver Proyecto
                      </a>
                    )}
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-xl font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-slate-900 transition-all duration-300"
                            >
                              <Github className="w-5 h-5" />
                              Código
                            </a>
                          </div>
                          
                          {/* Status */}
                          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-accent-500" />
                              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                                {project.status}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>
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

        {/* Experiencia Profesional */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block p-3 bg-accent-100 dark:bg-accent-900/30 rounded-2xl mb-6"
              >
                <Briefcase className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                {currentContent.experience.title}
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
                {currentContent.experience.subtitle}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                {currentContent.experience.intro}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentContent.experience.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700 h-full">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-3">{skill.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                        {skill.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-center">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {currentContent.experience.transition}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 transition-colors duration-300">
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
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FA</span>
                </div>
                <div>
                  <div className="font-bold text-xl">Facundo Albano</div>
                  <div className="text-slate-400 text-sm">Full Stack Developer</div>
                </div>
              </div>
              <p className="text-slate-400 max-w-xs mx-auto md:mx-0">
                Creando soluciones digitales innovadoras con pasión y dedicación.
              </p>
            </div>
            
            {/* Links */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-slate-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                >
                  {language === 'es' ? 'Sobre Mí' : 'About Me'}
                </button>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="block text-slate-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                >
                  {language === 'es' ? 'Habilidades' : 'Skills'}
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="block text-slate-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                >
                  {language === 'es' ? 'Proyectos' : 'Projects'}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-slate-400 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
                >
                  {language === 'es' ? 'Contacto' : 'Contact'}
                </button>
              </div>
            </div>
            
            {/* Contact */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-lg mb-4">Conecta Conmigo</h3>
              <div className="flex justify-center md:justify-end gap-4 mb-4">
                <a href="https://github.com/FacuAlbano" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-slate-800 rounded-xl hover:bg-primary-600 transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/facundo-albano-5b0495337" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-800 rounded-xl hover:bg-primary-600 transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:albano.facundo@hotmail.com"
                   className="p-3 bg-slate-800 rounded-xl hover:bg-primary-600 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <a href="mailto:albano.facundo@hotmail.com" 
                 className="text-slate-400 hover:text-primary-400 transition-colors duration-200">
                albano.facundo@hotmail.com
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 Facundo Ernesto Albano. Desarrollado con ❤️ usando Next.js y Tailwind CSS.
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Diseño moderno · Código limpio · Experiencia excepcional
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {language === 'es' ? '¡Conecta conmigo!' : 'Get in touch!'}
              </h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              {language === 'es' 
                ? 'Elige la forma que prefieras para contactarme:' 
                : 'Choose your preferred way to contact me:'}
            </p>

            <div className="space-y-3">
              {/* WhatsApp */}
              <button
                onClick={() => handleContact('whatsapp')}
                className="w-full flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-xl transition-colors duration-200 group"
              >
                <div className="p-2 bg-green-500 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-slate-900 dark:text-white">WhatsApp</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">+54 341 331-9513</div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-green-600" />
              </button>

              {/* Phone */}
              <button
                onClick={() => handleContact('phone')}
                className="w-full flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-colors duration-200 group"
              >
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {language === 'es' ? 'Teléfono' : 'Phone'}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">+54 341 331-9513</div>
                </div>
                <Phone className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </button>

              {/* Email */}
              <button
                onClick={() => handleContact('email')}
                className="w-full flex items-center gap-4 p-4 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-xl transition-colors duration-200 group"
              >
                <div className="p-2 bg-red-500 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-slate-900 dark:text-white">Email</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">albano.facundo@hotmail.com</div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-red-600" />
              </button>

              {/* LinkedIn */}
              <button
                onClick={() => handleContact('linkedin')}
                className="w-full flex items-center gap-4 p-4 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-xl transition-colors duration-200 group"
              >
                <div className="p-2 bg-primary-600 rounded-lg">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-slate-900 dark:text-white">LinkedIn</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Facundo Albano</div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-primary-600" />
              </button>

              {/* GitHub */}
              <button
                onClick={() => handleContact('github')}
                className="w-full flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-xl transition-colors duration-200 group"
              >
                <div className="p-2 bg-slate-800 dark:bg-slate-600 rounded-lg">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-slate-900 dark:text-white">GitHub</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">@FacuAlbano</div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}


'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin,
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
  Check,
  Volume2,
  VolumeX,
  Maximize
} from 'lucide-react';

export default function Home() {
  const [language, setLanguage] = useState('es');
  const [darkMode, setDarkMode] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState<string | null>(null);
  const [videoPaused, setVideoPaused] = useState<{[key: string]: boolean}>({});
  const [videoHoverPreview, setVideoHoverPreview] = useState<string | null>(null); // YouTube-style: mini preview on hover
  const [videoHovering, setVideoHovering] = useState<string | null>(null); // controles visibles cuando el mouse está sobre el video
  const [videoProgress, setVideoProgress] = useState<{[key: string]: { currentTime: number; duration: number }}>({});
  const [videoVolume, setVideoVolume] = useState(1);
  const [videoMuted, setVideoMuted] = useState(false);
  const videoContainerRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [showContactModal, setShowContactModal] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Prefijo para imágenes (necesario en GitHub Pages con basePath)
  const imageBase = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
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
        subtitle: "Full Stack Developer (React · Node.js · PostgreSQL)",
        description: "Construyo aplicaciones web modernas, seguras y escalables, enfocadas en rendimiento, arquitectura limpia y experiencia de usuario.",
        description2: "Experiencia desarrollando soluciones completas desde el diseño de la base de datos hasta la implementación en producción."
      },
      about: {
        title: "Perfil Profesional",
        description: "Soy desarrollador Full Stack con enfoque en arquitectura moderna y buenas prácticas de desarrollo. Trabajo construyendo aplicaciones completas, desde el modelado de base de datos hasta la interfaz de usuario, aplicando validaciones seguras y estructuras escalables. Me interesa crear soluciones que no solo funcionen, sino que sean mantenibles, eficientes y preparadas para crecer.",
        details: [
          { icon: MapPin, text: "Rosario, Santa Fe, Argentina - Disponible para trabajo remoto" },
          { icon: GraduationCap, text: "Técnico en Desarrollo de Software - URQUIZA" },
          { icon: Briefcase, text: "Enfoque en desarrollo web y aplicaciones escalables" }
        ]
      },
      skills: {
        title: "Competencias Técnicas",
        stats: ["Proyectos Full Stack desarrollados", "Aplicaciones con arquitectura moderna", "Experiencia práctica en desarrollo web"],
        categories: [
          {
            name: "Frontend Development",
            skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
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
            name: "Sunshine – Sistema de Gestión Web Full Stack",
            description: "Sistema de gestión web desarrollado para administrar procesos internos y datos críticos de forma segura y escalable. Proyecto productivo en evolución continua donde participé en el desarrollo completo del frontend y backend, aplicando arquitectura modular, validación en doble capa (cliente/servidor) y autenticación segura.",
            tech: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "TailwindCSS", "Zod", "React Hook Form", "Argon2", "Vite"],
            link: "https://sunshine-v2.vercel.app/",
            status: "Proyecto productivo - En evolución",
            github: "https://github.com/FacuAlbano",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/sunshine-demo.mp4",
            image: "/images/image-sunshine.png",
            features: ["Autenticación segura con hash de contraseñas", "Gestión de usuarios y control de roles", "Validación cliente y servidor", "CRUD completo con PostgreSQL", "Migraciones y control de esquema", "Componentes reutilizables y UI moderna", "Arquitectura preparada para producción"],
            category: "Full Stack"
          },
          {
            name: "Clínica – Sistema de Gestión Médica Full Stack",
            description: "Sistema web desarrollado para la gestión integral de una clínica médica, incluyendo administración de pacientes, turnos y control de información sensible. Sistema de gestión clínica desarrollado con arquitectura modular y validación en doble capa, enfocado en seguridad, organización de datos y escalabilidad.",
            tech: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "TailwindCSS", "Zod", "React Hook Form", "Argon2"],
            link: "https://consultorio-topaz.vercel.app/",
            status: "Full Stack - Gestión médica",
            github: "https://github.com/FacuAlbano/consultorio",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/clinica-demo.mp4",
            image: "/images/image-consultorio.png",
            features: ["Gestión de pacientes", "Administración de turnos médicos", "Control de usuarios y roles", "Validación cliente/servidor", "Persistencia de datos con PostgreSQL", "Arquitectura modular escalable", "Preparado para entorno productivo"],
            category: "Full Stack"
          },
          {
            name: "Alterna Servicios Eléctricos",
            description: "Sitio web corporativo profesional para empresa de servicios eléctricos, implementando diseño responsive, SEO optimizado y funcionalidades avanzadas. Resultado: presencia digital profesional que refleja la calidad de la empresa.",
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO", "Google Analytics"],
            link: "https://facualbano.github.io/alterna-servicios-electricos",
            status: "En Producción - Sitio Corporativo",
            github: "https://github.com/FacuAlbano/alterna-servicios-electricos",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/alterna-demo.mp4",
            image: "/images/image-alterna.png",
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
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/portfolio-demo.mp4",
            image: "/images/image-porfolio.png",
            features: ["Animaciones fluidas", "Modo oscuro", "Multiidioma", "Diseño responsive"],
            category: "Frontend"
          },
          {
            name: "TRRO - Sistema de Gestión Integral",
            description: "Sistema de gestión integral desarrollado como solución full stack con API REST, autenticación y dashboard administrativo. Demuestra capacidad para diseñar arquitecturas escalables y manejar flujos completos de datos.",
            tech: ["React", "Node.js", "MySQL", "Express.js", "JWT Auth", "Material-UI"],
            status: "Solución empresarial full stack",
            link: null,
            github: "https://github.com/FacuAlbano/TransitoRosario",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/trro-demo.mp4",
            image: "/images/image-trro.png",
            features: ["Gestión de usuarios", "Dashboard analítico", "Sistema de reportes", "API RESTful"],
            category: "Full Stack"
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
            status: "Próximo a graduarme (2 materias pendientes)",
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
        transition: "Mi experiencia administrativa me permitió desarrollar habilidades clave como organización, comunicación efectiva y resolución de problemas en entornos dinámicos, competencias que aplico directamente en el desarrollo de software."
      },
      contact: {
        title: "¿Listo para Colaborar?",
        subtitle: "Estoy abierto a oportunidades como Full Stack Developer donde pueda aportar valor técnico desde el primer día y seguir creciendo en entornos desafiantes. Si querés trabajar en un proyecto moderno, escalable y bien estructurado, conversemos."
      },
      howIWork: {
        title: "Cómo Trabajo",
        items: [
          "Arquitectura modular y escalable",
          "Validación en doble capa (cliente + servidor)",
          "Enfoque en seguridad y buenas prácticas",
          "Código limpio y mantenible",
          "Separación clara de responsabilidades",
          "Optimización de consultas y rendimiento"
        ]
      }
    },
    en: {
      hero: {
        title: "Facundo Ernesto Albano",
        subtitle: "Full Stack Developer (React · Node.js · PostgreSQL)",
        description: "I build modern, secure and scalable web applications, focused on performance, clean architecture and user experience.",
        description2: "Experience developing complete solutions from database design to production deployment."
      },
      about: {
        title: "Professional Profile",
        description: "I'm a Full Stack developer focused on modern architecture and development best practices. I build complete applications, from database modeling to user interface, applying secure validation and scalable structures. I aim to create solutions that not only work, but are maintainable, efficient and ready to grow.",
        details: [
          { icon: MapPin, text: "Rosario, Santa Fe, Argentina - Available for remote work" },
          { icon: GraduationCap, text: "Software Development Technician - URQUIZA" },
          { icon: Briefcase, text: "Focus on web development and scalable applications" }
        ]
      },
      skills: {
        title: "Technical Competencies",
        stats: ["Full Stack projects developed", "Applications with modern architecture", "Practical experience in web development"],
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
            name: "Sunshine – Full Stack Web Management System",
            description: "Web management system developed to handle internal processes and critical data securely and at scale. Production project in continuous evolution where I participated in the full frontend and backend development, applying modular architecture, double-layer validation (client/server) and secure authentication.",
            tech: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "TailwindCSS", "Zod", "React Hook Form", "Argon2", "Vite"],
            link: "https://sunshine-v2.vercel.app/",
            status: "Production project - Evolving",
            github: "https://github.com/FacuAlbano",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/sunshine-demo.mp4",
            image: "/images/image-sunshine.png",
            features: ["Secure authentication with password hashing", "User management and role control", "Client and server validation", "Full CRUD with PostgreSQL", "Migrations and schema control", "Reusable components and modern UI", "Production-ready architecture"],
            category: "Full Stack"
          },
          {
            name: "Clínica – Full Stack Medical Management System",
            description: "Web system developed for the comprehensive management of a medical clinic, including patient administration, appointments and control of sensitive information. Clinic management system built with modular architecture and double-layer validation, focused on security, data organization and scalability.",
            tech: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "TailwindCSS", "Zod", "React Hook Form", "Argon2"],
            link: "https://consultorio-topaz.vercel.app/",
            status: "Full Stack - Medical management",
            github: "https://github.com/FacuAlbano/consultorio",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/clinica-demo.mp4",
            image: "/images/image-consultorio.png",
            features: ["Patient management", "Medical appointments administration", "User and role control", "Client/server validation", "Data persistence with PostgreSQL", "Scalable modular architecture", "Production-ready"],
            category: "Full Stack"
          },
          {
            name: "Alterna Electrical Services",
            description: "Professional corporate website for electrical services company, implementing responsive design, SEO optimization and advanced functionalities. Result: professional digital presence that reflects company quality.",
            tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO", "Google Analytics"],
            link: "https://facualbano.github.io/alterna-servicios-electricos",
            status: "In Production - Corporate Website",
            github: "https://github.com/FacuAlbano/alterna-servicios-electricos",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/alterna-demo.mp4",
            image: "/images/image-alterna.png",
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
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/portfolio-demo.mp4",
            image: "/images/image-porfolio.png",
            features: ["Smooth animations", "Dark mode", "Multi-language", "Responsive design"],
            category: "Frontend"
          },
          {
            name: "TRRO - Comprehensive Management System",
            description: "Comprehensive management system developed as a full stack solution with REST API, authentication and administrative dashboard. Demonstrates ability to design scalable architectures and handle complete data flows.",
            tech: ["React", "Node.js", "MySQL", "Express.js", "JWT Auth", "Material-UI"],
            status: "Full stack enterprise solution",
            link: null,
            github: "https://github.com/FacuAlbano/TransitoRosario",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/trro-demo.mp4",
            image: "/images/image-trro.png",
            features: ["User management", "Analytics dashboard", "Report system", "RESTful API"],
            category: "Full Stack"
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
            status: "Graduating soon (2 subjects pending)",
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
        transition: "My administrative experience allowed me to develop key skills such as organization, effective communication and problem-solving in dynamic environments—competencies I apply directly in software development."
      },
      contact: {
        title: "Ready to Collaborate?",
        subtitle: "I'm open to opportunities as a Full Stack Developer where I can add technical value from day one and keep growing in challenging environments. If you want to work on a modern, scalable and well-structured project, let's talk."
      },
      howIWork: {
        title: "How I Work",
        items: [
          "Modular and scalable architecture",
          "Double-layer validation (client + server)",
          "Focus on security and best practices",
          "Clean and maintainable code",
          "Clear separation of responsibilities",
          "Query and performance optimization"
        ]
      }
    }
  };

  const currentContent = content[language as keyof typeof content];

  // Video player handler
  const toggleVideo = (videoId: string) => {
    if (videoPlaying === videoId) {
      if (document.fullscreenElement) document.exitFullscreen?.();
      setVideoPlaying(null);
      setVideoHovering(null);
    } else {
      setVideoPlaying(videoId);
      setVideoHovering(videoId); // mostrar controles al abrir (el cursor ya puede estar sobre el área)
    }
  };

  // Toggle video play/pause
  const togglePlayPause = (projectName: string) => {
    const video = document.querySelector(`video[data-project="${projectName}"]`) as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        setVideoPaused(prev => ({ ...prev, [projectName]: false }));
      } else {
        video.pause();
        setVideoPaused(prev => ({ ...prev, [projectName]: true }));
      }
    }
  };

  const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleVideoSeek = (projectName: string, value: number) => {
    const video = document.querySelector(`video[data-project="${projectName}"]`) as HTMLVideoElement;
    if (video && Number.isFinite(video.duration)) {
      video.currentTime = value;
      setVideoProgress(prev => ({ ...prev, [projectName]: { currentTime: value, duration: video.duration } }));
    }
  };

  const handleVolumeChange = (projectName: string, newVolume: number) => {
    const video = document.querySelector(`video[data-project="${projectName}"]`) as HTMLVideoElement;
    if (video) {
      const v = Math.max(0, Math.min(1, newVolume));
      video.volume = v;
      video.muted = v === 0;
      setVideoVolume(v);
      setVideoMuted(v === 0);
    }
  };

  const toggleMute = (projectName: string) => {
    const video = document.querySelector(`video[data-project="${projectName}"]`) as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setVideoMuted(video.muted);
      if (!video.muted) setVideoVolume(video.volume);
    }
  };

  const toggleFullscreen = (projectName: string) => {
    const container = videoContainerRefs.current[projectName];
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
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

  // Download CV + Cover Letter handler (ES: CV + Carta | EN: Resume + Cover Letter)
  const downloadCV = () => {
    const files = language === 'es'
      ? [
          { path: '/documents/CV_Facundo_Albano.pdf', name: 'CV_Facundo_Albano.pdf' },
          { path: '/documents/Carta_Presentacion_Facundo_Albano.docx', name: 'Carta_Presentacion_Facundo_Albano.docx' }
        ]
      : [
          { path: '/documents/Facundo_Albano_Software_Developer_Resume.pdf', name: 'Facundo_Albano_Software_Developer_Resume.pdf' },
          { path: '/documents/Facundo_Albano_Cover_Letter.docx', name: 'Facundo_Albano_Cover_Letter.docx' }
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
                  className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed max-w-2xl"
                >
                  {currentContent.hero.description}
                </motion.p>
                {"description2" in currentContent.hero && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl"
                  >
                    {(currentContent.hero as { description2?: string }).description2}
                  </motion.p>
                )}
                
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
              {currentContent.skills.stats?.map((stat, i) => (
                <div key={i} className={`text-center p-6 rounded-2xl ${i === 1 ? "bg-accent-50 dark:bg-accent-900/20" : "bg-primary-50 dark:bg-primary-900/20"}`}>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">{stat}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cómo Trabajo */}
        {"howIWork" in currentContent && (
          <section id="how-i-work" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                  {(currentContent as { howIWork?: { title: string; items: string[] } }).howIWork?.title}
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {((currentContent as { howIWork?: { title: string; items: string[] } }).howIWork?.items ?? []).map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-500/20 dark:bg-primary-400/20 flex items-center justify-center">
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">{i + 1}</span>
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

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
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 items-stretch">
                      
                      {/* Video/Image Preview - misma altura que la columna de contenido */}
                      <div className={`relative bg-slate-100 dark:bg-slate-700 min-w-0 flex flex-col ${index % 2 === 0 ? 'order-1' : 'lg:order-2'}`}>
                        <div className="aspect-video lg:aspect-auto lg:min-h-0 lg:flex-1 relative overflow-hidden">
                          {videoPlaying === project.name && isClient ? (
                            /* Video Player */
                            <div 
                              ref={(el) => { videoContainerRefs.current[project.name] = el; }}
                              className="absolute inset-0"
                              onMouseEnter={() => setVideoHovering(project.name)}
                              onMouseLeave={() => setVideoHovering(null)}
                            >
                              <video
                                className="w-full h-full object-cover"
                                autoPlay
                                onEnded={() => {
                                  const video = document.querySelector(`video[data-project="${project.name}"]`) as HTMLVideoElement;
                                  if (video) {
                                    video.currentTime = 0; // Restart from beginning
                                    video.play(); // Auto restart
                                  }
                                }}
                                onPlay={() => setVideoPaused(prev => ({ ...prev, [project.name]: false }))}
                                onPause={() => setVideoPaused(prev => ({ ...prev, [project.name]: true }))}
                                onTimeUpdate={(e) => {
                                  const v = e.currentTarget;
                                  setVideoProgress(prev => ({ ...prev, [project.name]: { currentTime: v.currentTime, duration: v.duration } }));
                                }}
                                onLoadedMetadata={(e) => {
                                  const v = e.currentTarget;
                                  v.playbackRate = 2.0;
                                  setVideoProgress(prev => ({ ...prev, [project.name]: { currentTime: v.currentTime, duration: v.duration } }));
                                }}
                                onLoadedData={(e) => {
                                  const video = e.target as HTMLVideoElement;
                                  video.playbackRate = 2.0; // Velocidad x2
                                  video.volume = videoVolume;
                                  video.muted = videoMuted;
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
                              
                              {/* Controles del video: visibles al hacer mouse over, se ocultan al salir */}
                              <motion.div
                                className="absolute inset-0 flex items-center justify-center z-10"
                                initial={{ opacity: 1 }}
                                animate={{
                                  opacity: videoPaused[project.name] || videoHovering === project.name ? 1 : 0,
                                  pointerEvents: videoPaused[project.name] || videoHovering === project.name ? 'auto' : 'none',
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => togglePlayPause(project.name)}
                                  className="w-20 h-20 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 backdrop-blur-sm"
                                >
                                  {videoPaused[project.name] ? (
                                    <Play className="w-8 h-8" />
                                  ) : (
                                    <Pause className="w-8 h-8" />
                                  )}
                                </motion.button>
                              </motion.div>
                              <motion.div
                                className="absolute top-4 right-4 flex gap-2 z-10"
                                initial={{ opacity: 1 }}
                                animate={{
                                  opacity: videoPaused[project.name] || videoHovering === project.name ? 1 : 0,
                                  pointerEvents: videoPaused[project.name] || videoHovering === project.name ? 'auto' : 'none',
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">
                                  2x
                                </div>
                                <button
                                  onClick={() => setVideoPlaying(null)}
                                  className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200"
                                >
                                  <X className="w-5 h-5" />
                                </button>
                              </motion.div>
                              {/* Barra de controles inferior: tiempo, progreso, volumen, fullscreen */}
                              <motion.div
                                className="absolute bottom-0 left-0 right-0 z-10 flex items-center gap-3 px-3 py-2 bg-black/70 text-white"
                                initial={{ opacity: 1 }}
                                animate={{
                                  opacity: videoPaused[project.name] || videoHovering === project.name ? 1 : 0,
                                  pointerEvents: videoPaused[project.name] || videoHovering === project.name ? 'auto' : 'none',
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <button
                                  onClick={() => togglePlayPause(project.name)}
                                  className="p-1 rounded hover:bg-white/20 transition-colors"
                                  aria-label={videoPaused[project.name] ? 'Play' : 'Pause'}
                                >
                                  {videoPaused[project.name] ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                                </button>
                                <span className="text-xs tabular-nums min-w-[4rem]">
                                  {formatTime(videoProgress[project.name]?.currentTime ?? 0)} / {formatTime(videoProgress[project.name]?.duration ?? 0)}
                                </span>
                                <input
                                  type="range"
                                  min={0}
                                  max={videoProgress[project.name]?.duration ?? 100}
                                  step={0.1}
                                  value={videoProgress[project.name]?.currentTime ?? 0}
                                  onChange={(e) => handleVideoSeek(project.name, parseFloat(e.target.value))}
                                  className="flex-1 h-1.5 accent-white/80 bg-white/30 rounded-full cursor-pointer"
                                />
                                <div className="flex items-center gap-1">
                                  <button
                                    onClick={() => toggleMute(project.name)}
                                    className="p-1 rounded hover:bg-white/20 transition-colors"
                                    aria-label={videoMuted ? 'Unmute' : 'Mute'}
                                  >
                                    {videoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                  </button>
                                  <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.05}
                                    value={videoMuted ? 0 : videoVolume}
                                    onChange={(e) => handleVolumeChange(project.name, parseFloat(e.target.value))}
                                    className="w-16 h-1 accent-white/80 bg-white/30 rounded-full cursor-pointer"
                                  />
                                </div>
                                <button
                                  onClick={() => toggleFullscreen(project.name)}
                                  className="p-1 rounded hover:bg-white/20 transition-colors"
                                  aria-label="Pantalla completa"
                                >
                                  <Maximize className="w-5 h-5" />
                                </button>
                              </motion.div>
                            </div>
                          ) : (
                            /* Portada + mini preview al hover + click para video completo (estilo YouTube) */
                            <div
                              className="absolute inset-0"
                              onMouseEnter={() => setVideoHoverPreview(project.name)}
                              onMouseLeave={() => setVideoHoverPreview(null)}
                            >
                              {/* Por defecto: imagen de portada (background + img para que siempre se vea) */}
                              {videoHoverPreview !== project.name ? (
                                <div
                                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                  style={{ backgroundImage: `url(${imageBase}${project.image})` }}
                                  aria-hidden
                                >
                                  <img
                                    src={`${imageBase}${project.image}`}
                                    alt={project.name}
                                    className="w-full h-full object-cover block"
                                    loading="eager"
                                    decoding="async"
                                  />
                                </div>
                              ) : (
                                /* Al pasar el mouse: mini reproducción (muted, loop) */
                                isClient && (
                                  <video
                                    className="w-full h-full object-cover"
                                    muted
                                    loop
                                    playsInline
                                    data-preview={project.name}
                                    onCanPlay={(e) => e.currentTarget.play()}
                                    onLoadedData={(e) => {
                                      const v = e.currentTarget;
                                      v.playbackRate = 2.0;
                                      v.currentTime = 10;
                                    }}
                                    onEnded={(e) => {
                                      e.currentTarget.currentTime = 10;
                                      e.currentTarget.play();
                                    }}
                                  >
                                    <source src={project.video} type="video/mp4" />
                                  </video>
                                )
                              )}
                              {/* Overlay con botón Play: click = video completo. Círculo centrado en el cuadrado del video. */}
                              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 group/overlay">
                                {/* Círculo centrado exactamente en el medio del cuadrado */}
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => toggleVideo(project.name)}
                                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/95 dark:bg-slate-800/95 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm z-10"
                                >
                                  <Play className="w-8 h-8 text-primary-600" />
                                </motion.button>
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
                      
                      {/* Project Info - mismo ancho que el video */}
                      <div className={`p-8 lg:p-12 flex flex-col justify-center min-w-0 ${index % 2 === 0 ? 'order-2' : 'lg:order-1'}`}>
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

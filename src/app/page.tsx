
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
        subtitle: "Full Stack Developer · React · TypeScript · Node.js · PostgreSQL · Open to Work",
        description: "Desarrollador Full Stack freelance. Sistemas reales en producción: frontend, backend, APIs, autenticación y modelado de datos."
      },
      about: {
        title: "Perfil Profesional",
        description: "Desarrollador Full Stack con 2 años de experiencia profesional freelance desarrollando aplicaciones web en producción. Experiencia en React, TypeScript, Node.js y PostgreSQL, participando en el desarrollo completo de sistemas reales para clientes: frontend, backend, APIs, autenticación, validación y modelado de bases de datos. Orientado a crear soluciones escalables, seguras y con buena experiencia de usuario. Busco integrarme a un equipo donde pueda aportar valor técnico y continuar creciendo profesionalmente.",
        details: [
          { icon: MapPin, text: "Rosario, Santa Fe, Argentina — Disponible para trabajo remoto" },
          { icon: GraduationCap, text: "Tecnicatura Superior en Desarrollo de Software — URQUIZA" },
          { icon: Briefcase, text: "Freelance 2024 – Actualidad · Sistemas en producción" }
        ]
      },
      projects: {
        title: "Proyectos destacados",
        subtitle: "Sistemas reales en producción — mismos proyectos que en el CV",
        labels: { features: "Qué incluye", tech: "Stack" },
        items: [
          {
            name: "Sunshine — Sistema de Gestión Web",
            description: "Aplicación full stack en producción para la gestión de un instituto educativo. Frontend con React 19 + TypeScript y backend con Node.js. Autenticación segura con Argon2, validación cliente/servidor con Zod y PostgreSQL.",
            tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
            link: "https://sunshine-v2.vercel.app/",
            status: "En producción",
            github: "https://github.com/FacuAlbano",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/sunshine-demo.mp4",
            image: "/images/image-sunshine.png",
            features: ["Autenticación con Argon2", "Validación cliente/servidor (Zod)", "PostgreSQL y migraciones", "Arquitectura modular"],
            category: "Full Stack",
            variant: "featured"
          },
          {
            name: "Sistema de Gestión Clínica",
            description: "Plataforma web para administración de pacientes y turnos con control de accesos. Frontend con React + TypeScript y API REST con Node.js. Autenticación, roles y manejo seguro de datos.",
            tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM"],
            link: "https://consultorio-topaz.vercel.app/",
            status: "En producción",
            github: "https://github.com/FacuAlbano/consultorio",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/clinica-demo.mp4",
            image: "/images/image-consultorio.png",
            features: ["Pacientes y turnos", "Roles y control de acceso", "API REST + PostgreSQL", "Datos sensibles"],
            category: "Full Stack",
            variant: "featured"
          },
          {
            name: "Tu Invitación — Plataforma de Invitaciones Web",
            description: "Invitaciones web multi-evento con Next.js 15, React, TypeScript y Tailwind; persistencia con Prisma + PostgreSQL (Supabase) y deploy en Vercel. Admin, RSVP, CSV, temas y previews sociales.",
            tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Supabase", "Vercel", "Vitest"],
            link: "https://tuinvitacion.vercel.app/e/prueba",
            status: "En producción",
            github: null,
            video: null,
            image: "/images/image-tuinvitacion.png",
            features: ["Admin: temas, tipografías e imágenes", "RSVP, invitados y export CSV", "Link privado para la organizadora", "QR del álbum y Open Graph"],
            category: "Full Stack",
            variant: "featured"
          },
          {
            name: "TRRO — Tránsito Rosario",
            description: "Aplicación web interactiva con autenticación, búsqueda de rutas, favoritos y reportes.",
            tech: ["Node.js", "React", "SQL", "APIs", "JSON"],
            link: null,
            status: "",
            github: "https://github.com/FacuAlbano/TransitoRosario",
            video: null,
            image: "/images/image-trro.png",
            features: [],
            category: "Full Stack",
            variant: "compact"
          },
          {
            name: "Alterna Servicios Eléctricos",
            description: "Sitio web corporativo profesional. Frontend completo, arquitectura MVC y diseño responsive.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            link: "https://facualbano.github.io/alterna-servicios-electricos",
            status: "En producción",
            github: "https://github.com/FacuAlbano/alterna-servicios-electricos",
            video: null,
            image: "/images/image-alterna.png",
            features: [],
            category: "Frontend",
            variant: "compact"
          },
          {
            name: "Portfolio Personal",
            description: "Este sitio. Next.js, TypeScript y Tailwind.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            link: "https://falbano.vercel.app/",
            status: "",
            github: "https://github.com/FacuAlbano/portfolio-facundo",
            video: null,
            image: "/images/image-porfolio.png",
            features: [],
            category: "Frontend",
            variant: "minimal"
          }
        ]
      },
      skills: {
        title: "Habilidades técnicas",
        stats: [],
        categories: [
          {
            name: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
          },
          {
            name: "Backend",
            skills: ["Node.js", "APIs REST", "Server Actions", "JWT", "Argon2"]
          },
          {
            name: "Datos",
            skills: ["PostgreSQL", "MySQL", "Prisma", "Drizzle ORM", "Supabase"]
          },
          {
            name: "Calidad y deploy",
            skills: ["Vitest", "ESLint", "TypeScript", "Git", "GitHub", "Vite", "Vercel"]
          }
        ]
      },
      education: {
        title: "Formación académica",
        items: [
          {
            level: "Tecnicatura Superior en Desarrollo de Software",
            school: "Escuela Superior N°49 Cap. Justo José de Urquiza, Rosario",
            status: "Completo",
            description: ""
          }
        ]
      },
      experience: {
        title: "Experiencia profesional",
        subtitle: "",
        intro: "",
        roles: [
          {
            title: "Desarrollador Full Stack Freelance",
            period: "2024 – Actualidad",
            tag: "",
            bullets: [
              "Aplicaciones web y sistemas de gestión para clientes reales, frontend y backend.",
              "APIs, autenticación, validación y persistencia de datos.",
              "Mantenimiento, migraciones y evolución de aplicaciones en producción."
            ]
          },
          {
            title: "Administrativo — Terminal de Ómnibus de Rosario",
            period: "Julio 2016 – Mayo 2026",
            tag: "Experiencia laboral adicional",
            bullets: [
              "Documentación, organización en sistemas digitales y resolución de problemas en tiempo real.",
              "Atención a usuarios y empresas, trabajo en equipo y coordinación operativa."
            ]
          }
        ],
        skills: [],
        transition: ""
      },
      contact: {
        title: "¿Listo para Colaborar?",
        subtitle: "Estoy abierto a oportunidades como Full Stack Developer donde pueda aportar valor técnico desde el primer día y seguir creciendo en entornos desafiantes. Si querés trabajar en un proyecto moderno, escalable y bien estructurado, conversemos."
      },
    },
    en: {
      hero: {
        title: "Facundo Ernesto Albano",
        subtitle: "Full Stack Developer · React · TypeScript · Node.js · PostgreSQL · Open to Work",
        description: "Freelance Full Stack developer. Real production systems: frontend, backend, APIs, authentication and data modeling."
      },
      about: {
        title: "Professional Profile",
        description: "Full Stack developer with 2 years of professional freelance experience building production web applications. Experience with React, TypeScript, Node.js and PostgreSQL, owning complete systems for clients: frontend, backend, APIs, authentication, validation and database modeling. Focused on scalable, secure solutions with a strong user experience. Looking to join a team where I can add technical value and keep growing.",
        details: [
          { icon: MapPin, text: "Rosario, Santa Fe, Argentina — Available for remote work" },
          { icon: GraduationCap, text: "Software Development Technician — URQUIZA" },
          { icon: Briefcase, text: "Freelance 2024 – Present · Production systems" }
        ]
      },
      skills: {
        title: "Technical skills",
        stats: [],
        categories: [
          {
            name: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
          },
          {
            name: "Backend",
            skills: ["Node.js", "REST APIs", "Server Actions", "JWT", "Argon2"]
          },
          {
            name: "Data",
            skills: ["PostgreSQL", "MySQL", "Prisma", "Drizzle ORM", "Supabase"]
          },
          {
            name: "Quality & deploy",
            skills: ["Vitest", "ESLint", "TypeScript", "Git", "GitHub", "Vite", "Vercel"]
          }
        ]
      },
      projects: {
        title: "Featured projects",
        subtitle: "Real production systems — the same projects as on my resume",
        labels: { features: "What's included", tech: "Stack" },
        items: [
          {
            name: "Sunshine — Web Management System",
            description: "Full stack production app for an educational institute. React 19 + TypeScript frontend and Node.js backend. Secure Argon2 auth, client/server validation with Zod, and PostgreSQL.",
            tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
            link: "https://sunshine-v2.vercel.app/",
            status: "In production",
            github: "https://github.com/FacuAlbano",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/sunshine-demo.mp4",
            image: "/images/image-sunshine.png",
            features: ["Argon2 authentication", "Client/server validation (Zod)", "PostgreSQL and migrations", "Modular architecture"],
            category: "Full Stack",
            variant: "featured"
          },
          {
            name: "Clinic Management System",
            description: "Web platform for patients and appointments with access control. React + TypeScript frontend and Node.js REST API. Auth, roles and safe handling of sensitive data.",
            tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Drizzle ORM"],
            link: "https://consultorio-topaz.vercel.app/",
            status: "In production",
            github: "https://github.com/FacuAlbano/consultorio",
            video: "https://github.com/FacuAlbano/portfolio-facundo/releases/download/v1.0.0/clinica-demo.mp4",
            image: "/images/image-consultorio.png",
            features: ["Patients and appointments", "Roles and access control", "REST API + PostgreSQL", "Sensitive data"],
            category: "Full Stack",
            variant: "featured"
          },
          {
            name: "Tu Invitación — Web Invitations Platform",
            description: "Multi-event web invitations with Next.js 15, React, TypeScript and Tailwind; Prisma + PostgreSQL (Supabase) and Vercel. Admin, RSVP, CSV, themes and social previews.",
            tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Supabase", "Vercel", "Vitest"],
            link: "https://tuinvitacion.vercel.app/e/prueba",
            status: "In production",
            github: null,
            video: null,
            image: "/images/image-tuinvitacion.png",
            features: ["Admin: themes, fonts and images", "RSVP, guest list and CSV export", "Private link for the organizer", "Album QR and Open Graph"],
            category: "Full Stack",
            variant: "featured"
          },
          {
            name: "TRRO — Tránsito Rosario",
            description: "Interactive web app with authentication, route search, favorites and reports.",
            tech: ["Node.js", "React", "SQL", "APIs", "JSON"],
            link: null,
            status: "",
            github: "https://github.com/FacuAlbano/TransitoRosario",
            video: null,
            image: "/images/image-trro.png",
            features: [],
            category: "Full Stack",
            variant: "compact"
          },
          {
            name: "Alterna Electrical Services",
            description: "Professional corporate website. Full frontend, MVC architecture and responsive design.",
            tech: ["HTML5", "CSS3", "JavaScript"],
            link: "https://facualbano.github.io/alterna-servicios-electricos",
            status: "In production",
            github: "https://github.com/FacuAlbano/alterna-servicios-electricos",
            video: null,
            image: "/images/image-alterna.png",
            features: [],
            category: "Frontend",
            variant: "compact"
          },
          {
            name: "Personal Portfolio",
            description: "This site. Next.js, TypeScript and Tailwind.",
            tech: ["Next.js", "TypeScript", "Tailwind CSS"],
            link: "https://falbano.vercel.app/",
            status: "",
            github: "https://github.com/FacuAlbano/portfolio-facundo",
            video: null,
            image: "/images/image-porfolio.png",
            features: [],
            category: "Frontend",
            variant: "minimal"
          }
        ]
      },
      education: {
        title: "Education",
        items: [
          {
            level: "Software Development Technician",
            school: "Escuela Superior N°49 Cap. Justo José de Urquiza, Rosario",
            status: "Complete",
            description: ""
          }
        ]
      },
      experience: {
        title: "Professional experience",
        subtitle: "",
        intro: "",
        roles: [
          {
            title: "Full Stack Developer — Freelance",
            period: "2024 – Present",
            tag: "",
            bullets: [
              "Web apps and management systems for real clients, frontend and backend.",
              "APIs, authentication, validation and data persistence.",
              "Maintenance, migrations and evolution of production applications."
            ]
          },
          {
            title: "Administrative — Rosario Bus Terminal",
            period: "July 2016 – May 2026",
            tag: "Additional work experience",
            bullets: [
              "Documentation, digital systems and real-time problem solving.",
              "User and company support, teamwork and operational coordination."
            ]
          }
        ],
        skills: [],
        transition: ""
      },
      contact: {
        title: "Ready to collaborate?",
        subtitle: "I'm open to Full Stack Developer roles where I can add technical value from day one and keep growing in challenging environments."
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
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
            
            <div className="grid gap-6 lg:gap-8">
              {currentContent.projects.items.map((project, index) => {
                const variant = "variant" in project ? (project as { variant?: string }).variant : "featured";
                const github = "github" in project ? (project as { github?: string | null }).github : null;
                const video = "video" in project ? (project as { video?: string | null }).video : null;
                const hasVideo = Boolean(video);

                if (variant === "compact" || variant === "minimal") {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 ${variant === "minimal" ? "p-5" : "p-6"} shadow-sm`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        {variant === "compact" && (
                          <img src={`${imageBase}${project.image}`} alt="" className="w-full sm:w-36 h-24 object-cover rounded-xl flex-shrink-0" />
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.name}</h3>
                            <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">{project.category}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tech.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md">{tech}</span>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {project.link && (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline">
                                <ExternalLink className="w-4 h-4" />
                                {language === "es" ? "Ver proyecto" : "View project"}
                              </a>
                            )}
                            {github && (
                              <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:underline">
                                <Github className="w-4 h-4" />
                                {language === "es" ? "Código" : "Code"}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return (
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
                      
                      {/* Video/Image Preview */}
                      <div className={`relative bg-slate-100 dark:bg-slate-700 min-w-0 flex flex-col ${index % 2 === 0 ? 'order-1' : 'lg:order-2'}`}>
                        <div className="aspect-video lg:aspect-auto lg:min-h-0 lg:flex-1 relative overflow-hidden">
                          {videoPlaying === project.name && isClient ? (
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
                                  if (video) { video.currentTime = 0; video.play(); }
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
                                  video.playbackRate = 2.0;
                                  video.volume = videoVolume;
                                  video.muted = videoMuted;
                                }}
                                onCanPlay={(e) => { (e.target as HTMLVideoElement).playbackRate = 2.0; }}
                                data-project={project.name}
                              >
                                <source src={video ?? undefined} type="video/mp4" />
                              </video>
                              
                              <motion.div
                                className="absolute inset-0 flex items-center justify-center z-10"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: videoPaused[project.name] || videoHovering === project.name ? 1 : 0, pointerEvents: videoPaused[project.name] || videoHovering === project.name ? 'auto' : 'none' }}
                                transition={{ duration: 0.2 }}
                              >
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => togglePlayPause(project.name)} className="w-20 h-20 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 backdrop-blur-sm">
                                  {videoPaused[project.name] ? <Play className="w-8 h-8" /> : <Pause className="w-8 h-8" />}
                                </motion.button>
                              </motion.div>
                              <motion.div
                                className="absolute top-4 right-4 flex gap-2 z-10"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: videoPaused[project.name] || videoHovering === project.name ? 1 : 0, pointerEvents: videoPaused[project.name] || videoHovering === project.name ? 'auto' : 'none' }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">2x</div>
                                <button onClick={() => setVideoPlaying(null)} className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200">
                                  <X className="w-5 h-5" />
                                </button>
                              </motion.div>
                              <motion.div
                                className="absolute bottom-0 left-0 right-0 z-10 flex items-center gap-3 px-3 py-2 bg-black/70 text-white"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: videoPaused[project.name] || videoHovering === project.name ? 1 : 0, pointerEvents: videoPaused[project.name] || videoHovering === project.name ? 'auto' : 'none' }}
                                transition={{ duration: 0.2 }}
                              >
                                <button onClick={() => togglePlayPause(project.name)} className="p-1 rounded hover:bg-white/20 transition-colors" aria-label={videoPaused[project.name] ? 'Play' : 'Pause'}>
                                  {videoPaused[project.name] ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                                </button>
                                <span className="text-xs tabular-nums min-w-[4rem]">
                                  {formatTime(videoProgress[project.name]?.currentTime ?? 0)} / {formatTime(videoProgress[project.name]?.duration ?? 0)}
                                </span>
                                <input type="range" min={0} max={videoProgress[project.name]?.duration ?? 100} step={0.1} value={videoProgress[project.name]?.currentTime ?? 0} onChange={(e) => handleVideoSeek(project.name, parseFloat(e.target.value))} className="flex-1 h-1.5 accent-white/80 bg-white/30 rounded-full cursor-pointer" />
                                <div className="flex items-center gap-1">
                                  <button onClick={() => toggleMute(project.name)} className="p-1 rounded hover:bg-white/20 transition-colors" aria-label={videoMuted ? 'Unmute' : 'Mute'}>
                                    {videoMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                  </button>
                                  <input type="range" min={0} max={1} step={0.05} value={videoMuted ? 0 : videoVolume} onChange={(e) => handleVolumeChange(project.name, parseFloat(e.target.value))} className="w-16 h-1 accent-white/80 bg-white/30 rounded-full cursor-pointer" />
                                </div>
                                <button onClick={() => toggleFullscreen(project.name)} className="p-1 rounded hover:bg-white/20 transition-colors" aria-label="Pantalla completa">
                                  <Maximize className="w-5 h-5" />
                                </button>
                              </motion.div>
                            </div>
                          ) : (
                            <div className="absolute inset-0">
                              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${imageBase}${project.image})` }} aria-hidden>
                                <img src={`${imageBase}${project.image}`} alt={project.name} className="w-full h-full object-cover block" loading="eager" decoding="async" />
                              </div>
                              {hasVideo && (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10">
                                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => toggleVideo(project.name)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/95 dark:bg-slate-800/95 rounded-full flex items-center justify-center shadow-lg z-10">
                                    <Play className="w-7 h-7 text-primary-600" />
                                  </motion.button>
                                </div>
                              )}
                            </div>
                          )}
                          
                          <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full shadow-lg">{project.category}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Project Info */}
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
                          <p className="text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {project.features.length > 0 && (
                          <div className="mb-5">
                            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                              {(currentContent.projects as { labels?: { features: string } }).labels?.features ?? "Qué incluye"}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {project.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2">
                                  <Star className="w-4 h-4 text-accent-500 flex-shrink-0" />
                                  <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          )}
                          
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3">
                              {(currentContent.projects as { labels?: { tech: string } }).labels?.tech ?? "Tecnologías utilizadas"}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-lg hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-200">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            {project.link && (
                              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-md">
                                <ExternalLink className="w-5 h-5" />
                                {language === "es" ? "Ver proyecto" : "View project"}
                              </a>
                            )}
                            {github && (
                              <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-xl font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-slate-900 transition-colors">
                                <Github className="w-5 h-5" />
                                {language === "es" ? "Código" : "Code"}
                              </a>
                            )}
                          </div>
                          
                          {project.status && (
                          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-accent-500" />
                              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{project.status}</span>
                            </div>
                          </div>
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                );
              })}
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
            
          </div>
        </section>

        {/* Experiencia */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                {currentContent.experience.title}
              </h2>
            </motion.div>
            <div className="space-y-6">
              {((currentContent.experience as { roles?: { title: string; period: string; tag: string; bullets: string[] }[] }).roles ?? []).map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{role.title}</h3>
                      {role.tag && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{role.tag}</p>}
                    </div>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 whitespace-nowrap">{role.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 text-sm">
                    {role.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
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

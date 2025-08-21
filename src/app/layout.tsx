import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Facundo Ernesto Albano - Desarrollador Full Stack",
  description: "Portafolio personal de Facundo Ernesto Albano, desarrollador Full Stack apasionado por crear soluciones digitales innovadoras. Especializado en React, Node.js y desarrollo web moderno.",
  keywords: [
    "Facundo Albano",
    "Desarrollador Full Stack",
    "React Developer",
    "Node.js Developer",
    "Web Development",
    "Portfolio",
    "Rosario",
    "Argentina"
  ],
  authors: [{ name: "Facundo Ernesto Albano" }],
  creator: "Facundo Ernesto Albano",
  publisher: "Facundo Ernesto Albano",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://facundo-albano.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Facundo Ernesto Albano - Desarrollador Full Stack",
    description: "Portafolio personal de Facundo Ernesto Albano, desarrollador Full Stack apasionado por crear soluciones digitales innovadoras.",
    url: "https://facundo-albano.vercel.app",
    siteName: "Portafolio Facundo Albano",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Facundo Ernesto Albano - Desarrollador Full Stack",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facundo Ernesto Albano - Desarrollador Full Stack",
    description: "Portafolio personal de Facundo Ernesto Albano, desarrollador Full Stack apasionado por crear soluciones digitales innovadoras.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Facundo Ernesto Albano",
              "jobTitle": "Desarrollador Full Stack",
              "description": "Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras",
              "birthDate": "1996-08-14",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rosario",
                "addressRegion": "Santa Fe",
                "addressCountry": "AR"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "URQUIZA",
                "description": "Técnico en Desarrollo de Software"
              },
              "knowsAbout": [
                "React",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "HTML",
                "CSS",
                "Web Development",
                "Full Stack Development"
              ],
              "url": "https://facundo-albano.vercel.app",
              "sameAs": [
                "https://github.com/FacuAlbano",
                "https://www.linkedin.com/in/facundo-albano-5b0495337"
              ],
              "email": "albano.facundo@hotmail.com"
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

# 🚀 Portafolio Personal - Facundo Ernesto Albano

Un portafolio moderno y elegante desarrollado con tecnologías web de última generación.

## ✨ Características

- **Diseño Responsivo** - Se adapta perfectamente a todos los dispositivos
- **Modo Oscuro/Claro** - Soporte automático para preferencias del sistema
- **Multilingüe** - Disponible en Español e Inglés
- **Animaciones Suaves** - Transiciones elegantes con Framer Motion
- **SEO Optimizado** - Preparado para motores de búsqueda
- **Performance** - Construido con Next.js 14 para máxima velocidad

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React
- **Fuentes**: Inter (Google Fonts)
- **Deploy**: Vercel (recomendado)

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd portfolio-facundo
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificar código con ESLint

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página principal del portafolio
├── components/               # Componentes reutilizables (futuro)
└── lib/                     # Utilidades y configuraciones (futuro)
```

## 🎨 Personalización

### Colores
Los colores se pueden personalizar en `tailwind.config.ts`:
- `primary`: Azules para elementos principales
- `secondary`: Grises para elementos secundarios  
- `accent`: Púrpuras para acentos

### Contenido
El contenido se puede editar directamente en `src/app/page.tsx` en el objeto `content`.

### Estilos
Los estilos personalizados están en `src/app/globals.css`.

## 🌐 Deploy

### Vercel (Recomendado)
1. Conectar tu repositorio de GitHub
2. Importar el proyecto
3. Deploy automático en cada push

### Otros Hostings
- **Netlify**: Compatible con Next.js
- **GitHub Pages**: Requiere configuración adicional
- **Hosting propio**: Exportar como estático

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🔧 Configuración Avanzada

### Variables de Entorno
Crear archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_GA_ID=tu-google-analytics-id
```

### Meta Tags
Editar `src/app/layout.tsx` para SEO personalizado.

## 📈 Performance

- **Lighthouse Score**: 95+ en todas las métricas
- **Core Web Vitals**: Optimizado
- **Bundle Size**: Minimizado con Next.js
- **Image Optimization**: Automática con Next.js Image

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor

**Facundo Ernesto Albano**
- 📧 Email: albano.facundo@hotmail.com
- 🔗 LinkedIn: [Facundo Albano](https://www.linkedin.com/in/facundo-albano-5b0495337)
- 🐙 GitHub: [@FacuAlbano](https://github.com/FacuAlbano)

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Framework de React
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animaciones
- [Lucide](https://lucide.dev/) - Iconos hermosos

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

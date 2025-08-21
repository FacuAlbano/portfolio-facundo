# 🚀 Guía de Deploy - Portafolio Facundo Albano

Este documento te guiará a través de las diferentes opciones para publicar tu portafolio en línea.

## 🌟 Opción Recomendada: Vercel

Vercel es la plataforma creadora de Next.js y ofrece el mejor rendimiento y facilidad de uso.

### Pasos para Deploy en Vercel:

1. **Crear cuenta en Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con tu cuenta de GitHub

2. **Conectar repositorio**
   - Haz click en "New Project"
   - Selecciona tu repositorio `portfolio-facundo`
   - Vercel detectará automáticamente que es un proyecto Next.js

3. **Configuración automática**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Variables de entorno (opcional)**
   ```env
   NEXT_PUBLIC_SITE_URL=https://tu-dominio.vercel.app
   ```

5. **Deploy**
   - Haz click en "Deploy"
   - Tu portafolio estará disponible en `https://tu-usuario.vercel.app`

6. **Dominio personalizado (opcional)**
   - Ve a Settings > Domains
   - Agrega tu dominio personalizado
   - Configura los registros DNS según las instrucciones

### Ventajas de Vercel:
- ✅ Deploy automático en cada push
- ✅ SSL gratuito
- ✅ CDN global
- ✅ Analytics integrados
- ✅ Preview deployments para PRs
- ✅ Integración perfecta con Next.js

---

## 🌐 Alternativa: GitHub Pages

GitHub Pages es gratuito pero requiere configuración adicional.

### Pasos para Deploy en GitHub Pages:

1. **Configurar el repositorio**
   ```bash
   # En tu repositorio local
   git add .
   git commit -m "Configuración para GitHub Pages"
   git push origin main
   ```

2. **Configurar GitHub Actions**
   - El archivo `.github/workflows/deploy.yml` ya está configurado
   - GitHub Actions se ejecutará automáticamente en cada push

3. **Habilitar GitHub Pages**
   - Ve a Settings > Pages en tu repositorio
   - Source: "GitHub Actions"
   - El deploy se hará automáticamente

4. **Configurar dominio personalizado (opcional)**
   - En Settings > Pages, agrega tu dominio
   - Crea un archivo `CNAME` en la raíz del proyecto

### Scripts específicos para GitHub Pages:
```bash
# Build para GitHub Pages
npm run build:gh-pages

# O usar el script completo
npm run export:gh-pages
```

---

## 🔧 Configuración Local

### Desarrollo:
```bash
npm run dev
# Abre http://localhost:3000
```

### Build de producción:
```bash
npm run build
npm run start
```

### Verificar tipos:
```bash
npm run type-check
```

### Linting:
```bash
npm run lint
npm run lint:fix
```

---

## 📱 Optimizaciones de Performance

### Lighthouse Score Objetivo:
- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

### Verificar performance:
```bash
# Build y analizar
npm run analyze

# O usar Lighthouse en Chrome DevTools
```

---

## 🌍 SEO y Meta Tags

El portafolio ya incluye:
- ✅ Meta tags completos
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Structured Data (Schema.org)
- ✅ Sitemap automático
- ✅ Robots.txt

### Personalizar:
- Edita `src/app/layout.tsx` para cambiar metadatos
- Actualiza URLs en la configuración
- Agrega tu Google Analytics ID

---

## 🔒 Seguridad

El portafolio incluye:
- ✅ Headers de seguridad
- ✅ CSP (Content Security Policy)
- ✅ XSS Protection
- ✅ Frame Options
- ✅ Content Type Options

---

## 📊 Analytics y Tracking

### Google Analytics:
1. Crea una cuenta en [Google Analytics](https://analytics.google.com)
2. Obtén tu ID de tracking
3. Agrega el ID en las variables de entorno

### Vercel Analytics:
- Automático si usas Vercel
- No requiere configuración adicional

---

## 🚨 Solución de Problemas

### Error de Build:
```bash
# Limpiar cache
npm run clean
rm -rf node_modules
npm install
npm run build
```

### Error de Deploy:
- Verifica que todas las dependencias estén en `package.json`
- Asegúrate de que el build funcione localmente
- Revisa los logs de Vercel/GitHub Actions

### Problemas de Performance:
- Usa `npm run analyze` para identificar problemas
- Optimiza imágenes y assets
- Verifica el bundle size

---

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs de error
2. Verifica la documentación de Next.js
3. Consulta la documentación de Vercel
4. Abre un issue en GitHub

---

## 🎯 Próximos Pasos

Después del deploy:
1. ✅ Configura tu dominio personalizado
2. ✅ Agrega Google Analytics
3. ✅ Configura notificaciones de deploy
4. ✅ Agrega tu portafolio a tu CV
5. ✅ Comparte en LinkedIn y redes sociales

---

**¡Tu portafolio estará listo para impresionar a reclutadores y clientes! 🎉**

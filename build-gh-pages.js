const fs = require('fs');
const { execSync } = require('child_process');

// Copiar la configuración de GitHub Pages
try {
  fs.copyFileSync('next.config.gh-pages.ts', 'next.config.ts');
  console.log('✅ Configuración copiada exitosamente');

  // Ejecutar el build (basePath para que imágenes carguen en GitHub Pages)
  console.log('🚀 Iniciando build...');
  execSync('npx next build', { stdio: 'inherit', env: { ...process.env, NEXT_PUBLIC_BASE_PATH: '/portfolio-facundo' } });
  console.log('✅ Build completado exitosamente');
} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}

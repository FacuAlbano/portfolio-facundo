const fs = require('fs');
const { execSync } = require('child_process');

// Copiar la configuración de GitHub Pages
try {
  fs.copyFileSync('next.config.gh-pages.ts', 'next.config.ts');
  console.log('✅ Configuración copiada exitosamente');
  
  // Ejecutar el build
  console.log('🚀 Iniciando build...');
  execSync('next build', { stdio: 'inherit' });
  console.log('✅ Build completado exitosamente');
} catch (error) {
  console.error('❌ Error durante el build:', error.message);
  process.exit(1);
}

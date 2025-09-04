#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando deploy limpio a GitHub Pages...');

try {
  // 1. Asegurarse de estar en la rama main
  console.log('📍 Verificando rama actual...');
  execSync('git checkout main', { stdio: 'inherit' });

  // 2. Generar el build
  console.log('📦 Generando build...');
  process.env.GITHUB_PAGES = 'true';
  execSync('npm run build:gh-pages', { stdio: 'inherit' });

  // 3. Verificar que la carpeta out existe
  if (!fs.existsSync('out')) {
    throw new Error('❌ La carpeta "out" no existe después del build');
  }

  // 4. Crear una rama temporal limpia
  console.log('🧹 Creando rama temporal limpia...');
  execSync('git checkout -b temp-clean-deploy', { stdio: 'inherit' });

  // 5. Limpiar completamente la rama
  console.log('🗑️ Limpiando rama...');
  execSync('git rm -rf .', { stdio: 'inherit' });

  // 6. Copiar SOLO el contenido de out usando Node.js
  console.log('📋 Copiando archivos del build...');
  
  function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const entries = fs.readdirSync(src, { withFileTypes: true });
    
    for (let entry of entries) {
      // Excluir node_modules y otros archivos/directorios no deseados
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') {
        continue;
      }
      
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      
      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  
  copyDir('out', '.');
  
  // 7. Eliminar la carpeta out
  fs.rmSync('out', { recursive: true, force: true });

  // 8. Crear archivo .nojekyll
  console.log('📄 Creando archivo .nojekyll...');
  fs.writeFileSync('.nojekyll', '');

  // 9. Verificar que NO hay node_modules
  if (fs.existsSync('node_modules')) {
    throw new Error('❌ ERROR: node_modules está presente en el commit');
  }

  // 10. Verificar que NO hay .next
  if (fs.existsSync('.next')) {
    throw new Error('❌ ERROR: .next está presente en el commit');
  }

  // 11. Hacer commit
  console.log('💾 Haciendo commit...');
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Deploy: GitHub Pages con build limpio y .nojekyll"', { stdio: 'inherit' });

  // 12. Hacer push a gh-pages
  console.log('🚀 Haciendo push a gh-pages...');
  execSync('git push origin temp-clean-deploy:gh-pages --force', { stdio: 'inherit' });

  // 13. Limpiar
  console.log('🧹 Limpiando...');
  execSync('git checkout main', { stdio: 'inherit' });
  execSync('git branch -D temp-clean-deploy', { stdio: 'inherit' });

  console.log('✅ ¡Deploy completado exitosamente!');
  console.log('🌐 Tu sitio estará disponible en: https://facualbano.github.io/portfolio-facundo/');

} catch (error) {
  console.error('❌ Error durante el deploy:', error.message);
  
  // Limpiar en caso de error
  try {
    execSync('git checkout main', { stdio: 'inherit' });
    execSync('git branch -D temp-clean-deploy', { stdio: 'inherit' });
  } catch (cleanupError) {
    console.error('⚠️ Error durante la limpieza:', cleanupError.message);
  }
  
  process.exit(1);
}

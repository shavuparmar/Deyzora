import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixImports(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixImports(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Calculate depth from src
      // e.g., src/pages/employee/projects/Projects.jsx
      // parts: src, pages, employee, projects, Projects.jsx
      const parts = fullPath.split(path.sep);
      const srcIndex = parts.indexOf('src');
      const depth = parts.length - srcIndex - 2; // depth from src folder
      
      if (depth > 0) {
        const correctPrefix = '../'.repeat(depth);
        // Replace all incorrect import prefixes
        // E.g. if depth is 3, correctPrefix is `../../../`
        // We look for imports that start with `../` and don't match the correct depth for components/utils/etc.
        
        content = content.replace(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/g, (match, p1) => {
          if (p1.startsWith('../') && (p1.includes('components/') || p1.includes('utils/') || p1.includes('api/'))) {
             // Just force it to the correct depth if it's pointing to root src folders
             const namePart = p1.replace(/(\.\.\/)+/, '');
             return match.replace(p1, correctPrefix + namePart);
          }
          return match;
        });
        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

fixImports(path.join(__dirname, 'src', 'pages'));
console.log('Fixed imports!');

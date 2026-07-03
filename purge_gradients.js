import fs from 'fs';
import path from 'path';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Remove bg-gradient-to-* classes
  content = content.replace(/\bbg-gradient-to-[a-z]+\b/g, '');
  
  // 2. Remove from-*, via-*, to-* color classes (including hover:from, etc.)
  content = content.replace(/\b(hover:|focus:|active:|group-hover:)?(from|via|to)-[a-z]+-\d+(?:\/\d+)?\b/g, '');

  // 3. Replace text-gradient with a clean accent text class
  content = content.replace(/\btext-gradient\b/g, 'text-[var(--color-accent)] font-semibold');

  // 4. Remove extra spaces caused by deletions inside class strings
  content = content.replace(/ className=(["'])\s+/g, ' className=$1');
  content = content.replace(/\s+(["'])/g, '$1');
  content = content.replace(/className=(["'])\s*(.*?)\s*\1/g, (match, quote, inner) => {
      return `className=${quote}${inner.replace(/\s+/g, ' ').trim()}${quote}`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

walk(path.join(process.cwd(), 'src'));
console.log('Purge complete.');

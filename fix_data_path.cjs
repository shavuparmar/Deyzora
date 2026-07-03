const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, 'src'), function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('res.data?.data || []')) {
      content = content.replace(/res\.data\?\.data \|\| \[\]/g, "(Array.isArray(res.data) ? res.data : (res.data?.data || []))");
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed', filePath);
    }
  }
});

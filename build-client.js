// scripts/build-client.js
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(dist)) fs.mkdirSync(dist);
fs.writeFileSync(path.join(dist, 'index.html'), '<!doctype><html><body><h1>Built App</h1></body></html>');
console.log('✅ Client built → dist/index.html created');

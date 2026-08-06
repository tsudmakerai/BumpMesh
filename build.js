const fs = require('fs');
const path = require('path');
const vm = require('vm');
const zlib = require('zlib');

global.window = { __BM: { p: [], r: [] } };

for (const file of ['p01.js','p02.js','p03.js','p04.js','p05.js','p06.js','r01.js','r02.js']) {
  vm.runInThisContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), { filename: file });
}

let html = zlib.gunzipSync(Buffer.from(window.__BM.p.join(''), 'base64')).toString('utf8');
const patches = JSON.parse(zlib.gunzipSync(Buffer.from(window.__BM.r.join(''), 'base64')).toString('utf8'));

for (const [from, to] of patches) {
  if (!html.includes(from)) throw new Error('Patch source not found');
  html = html.replace(from, to);
}

const out = path.join(__dirname, 'dist');
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'index.html'), html);
for (const file of ['_headers', '_redirects']) {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(out, file));
}
console.log(`Built dist/index.html (${Buffer.byteLength(html)} bytes)`);

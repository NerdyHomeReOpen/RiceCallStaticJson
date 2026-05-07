const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DOCS = path.join(ROOT, 'docs');
const DIST = path.join(ROOT, 'dist');
const TMP = path.join(ROOT, 'dist.tmp');
const OLD = path.join(ROOT, 'dist.old');

function sha256(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function gitVersion() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 12);
  try {
    return execSync('git rev-parse --short=12 HEAD', { cwd: ROOT }).toString().trim();
  } catch {
    return 'unknown';
  }
}

function walkRel(dir) {
  const out = [];
  (function recur(current) {
    for (const e of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) recur(full);
      else if (e.isFile()) out.push(path.relative(dir, full));
    }
  })(dir);
  return out;
}

function copyTree(srcDir, destDir) {
  const records = [];
  for (const rel of walkRel(srcDir)) {
    const srcPath = path.join(srcDir, rel);
    const destPath = path.join(destDir, rel);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    const data = fs.readFileSync(srcPath);
    fs.writeFileSync(destPath, data);
    records.push({
      path: rel.split(path.sep).join('/'),
      size: data.length,
      sha256: sha256(data),
    });
  }
  return records;
}

function buildTree(dir) {
  const tree = {};
  const entries = fs.readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name));
  for (const e of entries) {
    if (e.isDirectory()) {
      tree[e.name] = buildTree(path.join(dir, e.name));
    } else if (e.isFile()) {
      tree[e.name] = null;
    }
  }
  return tree;
}

function rmrf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

function main() {
  rmrf(TMP);
  fs.mkdirSync(TMP, { recursive: true });

  const files = copyTree(DOCS, TMP);
  files.sort((a, b) => a.path.localeCompare(b.path));

  const tree = buildTree(DOCS);

  const manifest = {
    version: gitVersion(),
    updatedAt: new Date().toISOString(),
    files,
    tree,
  };

  fs.writeFileSync(path.join(TMP, 'manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

  rmrf(OLD);
  if (fs.existsSync(DIST)) fs.renameSync(DIST, OLD);
  fs.renameSync(TMP, DIST);
  rmrf(OLD);

  console.log(`built dist/ — ${files.length} files, version ${manifest.version}`);
}

main();

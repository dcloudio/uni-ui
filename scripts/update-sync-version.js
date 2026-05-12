#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const UNI_MODULES_DIR = path.join(ROOT, 'uni_modules');
const SYNC_VERSION_FILE = path.join(ROOT, 'temps', 'sync-version.json');
const IGNORED_MODULES = new Set(['uni-ui-x', 'uts-openSchema']);

const args = process.argv.slice(2);
const shouldPrintHelp = args.includes('-h') || args.includes('--help');

if (shouldPrintHelp) {
  console.log(`Usage: node scripts/update-sync-version.js

Options:
  -h, --help  Show help
`);
  process.exit(0);
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function normalizeVersion(version) {
  return String(version || '').trim().replace(/^v/i, '');
}

function getComponentDirs() {
  if (!fs.existsSync(UNI_MODULES_DIR)) {
    throw new Error(`未找到目录：${path.relative(ROOT, UNI_MODULES_DIR)}`);
  }

  return fs.readdirSync(UNI_MODULES_DIR)
    .filter((name) => !IGNORED_MODULES.has(name))
    .map((name) => path.join(UNI_MODULES_DIR, name))
    .filter((dir) => fs.statSync(dir).isDirectory())
    .sort((left, right) => path.basename(left).localeCompare(path.basename(right)));
}

function collectVersions() {
  const versions = {};

  for (const componentDir of getComponentDirs()) {
    const packageFile = path.join(componentDir, 'package.json');
    if (!fs.existsSync(packageFile)) continue;

    const pkg = readJson(packageFile);
    const componentId = pkg.id || path.basename(componentDir);
    const version = normalizeVersion(pkg.version);

    if (version) versions[componentId] = version;
  }

  return versions;
}

const versions = collectVersions();

fs.mkdirSync(path.dirname(SYNC_VERSION_FILE), { recursive: true });
fs.writeFileSync(SYNC_VERSION_FILE, `${JSON.stringify(versions, null, 2)}\n`);

console.log(`已更新：${path.relative(ROOT, SYNC_VERSION_FILE)}`);
console.log(JSON.stringify(versions, null, 2));

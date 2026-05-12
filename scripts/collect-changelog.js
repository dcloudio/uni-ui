#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const UNI_MODULES_DIR = path.join(ROOT, 'uni_modules');
const SYNC_VERSION_FILE = path.join(ROOT, 'temps', 'sync-version.json');
const DEFAULT_OUTPUT_FILE = path.join(ROOT, 'temps', 'sync-changelog.md');
const IGNORED_MODULES = new Set(['uni-ui-x', 'uts-openSchema']);

const args = process.argv.slice(2);
const shouldPrintHelp = args.includes('-h') || args.includes('--help');

if (shouldPrintHelp) {
  console.log(`Usage: node scripts/collect-changelog.js

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

function splitVersion(version) {
  const normalized = normalizeVersion(version);
  const [main, pre = ''] = normalized.split('-', 2);
  return {
    main: main.split('.').map((part) => Number.parseInt(part, 10) || 0),
    pre: pre.split('.').filter(Boolean),
  };
}

function compareIdentifier(left, right) {
  const leftNumber = /^\d+$/.test(left) ? Number(left) : null;
  const rightNumber = /^\d+$/.test(right) ? Number(right) : null;

  if (leftNumber !== null && rightNumber !== null) return leftNumber - rightNumber;
  if (leftNumber !== null) return -1;
  if (rightNumber !== null) return 1;
  return left.localeCompare(right);
}

function compareVersions(left, right) {
  const leftVersion = splitVersion(left);
  const rightVersion = splitVersion(right);
  const maxLength = Math.max(leftVersion.main.length, rightVersion.main.length);

  for (let index = 0; index < maxLength; index += 1) {
    const diff = (leftVersion.main[index] || 0) - (rightVersion.main[index] || 0);
    if (diff !== 0) return diff;
  }

  if (leftVersion.pre.length === 0 && rightVersion.pre.length === 0) return 0;
  if (leftVersion.pre.length === 0) return 1;
  if (rightVersion.pre.length === 0) return -1;

  const preLength = Math.max(leftVersion.pre.length, rightVersion.pre.length);
  for (let index = 0; index < preLength; index += 1) {
    if (leftVersion.pre[index] === undefined) return -1;
    if (rightVersion.pre[index] === undefined) return 1;

    const diff = compareIdentifier(leftVersion.pre[index], rightVersion.pre[index]);
    if (diff !== 0) return diff;
  }

  return 0;
}

function parseChangelog(content) {
  const lines = content.split(/\r?\n/);
  const entries = [];
  let currentEntry = null;

  for (const line of lines) {
    const match = line.match(/^##\s+\[?v?([0-9]+(?:\.[0-9]+)*(?:-[^\]\s（(]+)?)\]?\s*(.*)$/i);

    if (match) {
      if (currentEntry) entries.push(currentEntry);
      currentEntry = {
        version: normalizeVersion(match[1]),
        title: line.trim(),
        lines: [],
      };
      continue;
    }

    if (currentEntry) currentEntry.lines.push(line);
  }

  if (currentEntry) entries.push(currentEntry);
  return entries;
}

function toPlainItems(entry) {
  const items = [];

  for (const line of entry.lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^#{1,6}\s+/.test(trimmed)) continue;

    const text = trimmed
      .replace(/^[-*+]\s+/, '')
      .replace(/^\d+[.)]\s+/, '')
      .trim();

    if (text) items.push(text);
  }

  return items.length > 0 ? items : [`更新至 ${entry.version}`];
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

function getOutputName(pkg, componentDir) {
  const packageId = pkg.id || path.basename(componentDir);
  const displayName = String(pkg.displayName || '').trim().split(/\s+/)[0];

  return displayName || packageId;
}

function collect() {
  const syncVersions = fs.existsSync(SYNC_VERSION_FILE) ? readJson(SYNC_VERSION_FILE) : {};
  const outputLines = [];
  const warnings = [];

  for (const componentDir of getComponentDirs()) {
    const packageFile = path.join(componentDir, 'package.json');
    const changelogFile = path.join(componentDir, 'changelog.md');

    if (!fs.existsSync(packageFile)) continue;

    const pkg = readJson(packageFile);
    const componentId = pkg.id || path.basename(componentDir);
    const outputName = getOutputName(pkg, componentDir);
    const currentVersion = normalizeVersion(pkg.version);
    const previousVersion = syncVersions[componentId] ? normalizeVersion(syncVersions[componentId]) : null;

    if (previousVersion && compareVersions(currentVersion, previousVersion) <= 0) continue;

    if (!fs.existsSync(changelogFile)) {
      warnings.push(`${componentId} 缺少 changelog.md`);
      continue;
    }

    const entries = parseChangelog(fs.readFileSync(changelogFile, 'utf8'))
      .filter((entry) => compareVersions(entry.version, currentVersion) <= 0)
      .filter((entry) => !previousVersion || compareVersions(entry.version, previousVersion) > 0)
      .sort((left, right) => compareVersions(left.version, right.version));

    if (entries.length === 0) {
      warnings.push(`${componentId} ${previousVersion || '无历史版本'} -> ${currentVersion} 未匹配到更新日志`);
      continue;
    }

    for (const entry of entries) {
      for (const item of toPlainItems(entry)) {
        outputLines.push(`- ${outputName} ${item}`);
      }
    }
  }

  return {
    output: outputLines.join('\n'),
    warnings,
  };
}

const result = collect();
const output = result.output || '- 暂无组件更新';

fs.mkdirSync(path.dirname(DEFAULT_OUTPUT_FILE), { recursive: true });
fs.writeFileSync(DEFAULT_OUTPUT_FILE, `${output}\n`);

console.log(output);

if (result.warnings.length > 0) {
  console.warn('\nWarnings:');
  for (const warning of result.warnings) {
    console.warn(`- ${warning}`);
  }
}

console.log(`\n已生成：${path.relative(ROOT, DEFAULT_OUTPUT_FILE)}`);

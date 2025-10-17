#!/usr/bin/env node

/**
 * Design Token Verification Script
 * Prüft alle HTML-Dateien auf hardcoded Farben und Inkonsistenzen
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const errors = [];
const warnings = [];
const stats = {
  totalFiles: 0,
  hardcodedColors: 0,
  inconsistentTransitions: 0,
  inconsistentShadows: 0,
};

// Patterns die NICHT erlaubt sind (hardcoded)
const FORBIDDEN_PATTERNS = [
  /#FF5A10(?![^<]*var\()/g,  // Hardcoded Orange
  /#FFAD75(?![^<]*var\()/g,  // Hardcoded Orange Light
  /#08204A(?![^<]*var\()/g,  // Hardcoded Deep Blue
  /rgba\(255,\s*90,\s*16/g,  // Hardcoded Orange RGBA
  /rgba\(8,\s*32,\s*74/g,    // Hardcoded Blue RGBA
];

// Erlaubte CSS Variablen
const ALLOWED_VARIABLES = [
  '--orange-primary',
  '--orange-light',
  '--orange-hover-bg',
  '--orange-active-bg',
  '--orange-shadow-sm',
  '--orange-shadow-md',
  '--orange-gradient',
  '--blue-deep',
  '--blue-info-bg',
];

function scanDirectory(dir) {
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      scanDirectory(fullPath);
    } else if (file.endsWith('.html') || file.endsWith('.css')) {
      checkFile(fullPath);
    }
  }
}

function checkFile(filePath) {
  stats.totalFiles++;
  const content = readFileSync(filePath, 'utf-8');
  const relativePath = filePath.replace(process.cwd(), '');

  // Check for hardcoded colors
  FORBIDDEN_PATTERNS.forEach((pattern, index) => {
    const matches = content.match(pattern);
    if (matches) {
      stats.hardcodedColors += matches.length;
      errors.push({
        file: relativePath,
        line: getLineNumber(content, matches[0]),
        message: `Hardcoded color found: ${matches[0]}. Use CSS variable instead.`,
        type: 'HARDCODED_COLOR'
      });
    }
  });

  // Check for inconsistent transitions
  const transitions = content.match(/transition:\s*[^;]+;/g) || [];
  const uniqueTransitions = new Set(transitions);
  if (uniqueTransitions.size > 3) {
    stats.inconsistentTransitions++;
    warnings.push({
      file: relativePath,
      message: `${uniqueTransitions.size} different transition styles found. Standardize to 0.2s ease.`,
      type: 'INCONSISTENT_TRANSITION'
    });
  }

  // Check for inconsistent shadows
  const shadows = content.match(/box-shadow:\s*0\s+\d+px\s+\d+px\s+rgba\(255,\s*90,\s*16[^)]+\)/g) || [];
  const uniqueShadows = new Set(shadows.map(s => s.match(/rgba\([^)]+\)/)[0]));
  if (uniqueShadows.size > 2) {
    stats.inconsistentShadows++;
    warnings.push({
      file: relativePath,
      message: `${uniqueShadows.size} different orange shadow variants. Use --orange-shadow-sm or --orange-shadow-md.`,
      type: 'INCONSISTENT_SHADOW'
    });
  }

  // Check title format
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  if (titleMatch && titleMatch[1].includes('Design System V2')) {
    warnings.push({
      file: relativePath,
      message: 'Title uses "V2" (uppercase). Should be "v2" (lowercase).',
      type: 'TITLE_FORMAT'
    });
  }
}

function getLineNumber(content, searchString) {
  const index = content.indexOf(searchString);
  return content.substring(0, index).split('\n').length;
}

// Run verification
console.log('🔍 Design System Token Verification\n');
console.log('Scanning v2 directory...\n');

scanDirectory('./v2');

// Print results
console.log('📊 STATISTICS');
console.log('─'.repeat(50));
console.log(`Total files scanned: ${stats.totalFiles}`);
console.log(`Hardcoded colors found: ${stats.hardcodedColors}`);
console.log(`Files with inconsistent transitions: ${stats.inconsistentTransitions}`);
console.log(`Files with inconsistent shadows: ${stats.inconsistentShadows}`);
console.log('');

if (errors.length > 0) {
  console.log('❌ ERRORS');
  console.log('─'.repeat(50));
  errors.forEach(error => {
    console.log(`${error.file}:${error.line}`);
    console.log(`  ${error.message}`);
    console.log('');
  });
}

if (warnings.length > 0) {
  console.log('⚠️  WARNINGS');
  console.log('─'.repeat(50));
  warnings.forEach(warning => {
    console.log(`${warning.file}`);
    console.log(`  ${warning.message}`);
    console.log('');
  });
}

if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed! Design System is consistent.');
  process.exit(0);
} else {
  console.log(`\n❌ Found ${errors.length} errors and ${warnings.length} warnings.`);
  process.exit(errors.length > 0 ? 1 : 0);
}

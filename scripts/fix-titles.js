#!/usr/bin/env node

/**
 * Title Format Fixer
 * Korrigiert alle "Design System V2" zu "Design System v2"
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

let filesFixed = 0;

function fixDirectory(dir) {
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      fixDirectory(fullPath);
    } else if (file.endsWith('.html')) {
      fixFile(fullPath);
    }
  }
}

function fixFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;

  // Fix title
  content = content.replace(/Design System V2/g, 'Design System v2');

  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    filesFixed++;
    console.log(`✅ Fixed: ${filePath.replace(process.cwd(), '')}`);
  }
}

console.log('🔧 Fixing title format in all HTML files...\n');
fixDirectory('./v2');
console.log(`\n✅ Fixed ${filesFixed} files.`);

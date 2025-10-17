#!/usr/bin/env node

/**
 * Apply Design Tokens Script
 * Ersetzt alle hardcoded Farben durch CSS Variablen
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

let filesUpdated = 0;
let replacements = 0;

// Replacement Map: Hardcoded → CSS Variable
const REPLACEMENTS = [
  // Orange Primary
  { pattern: /#FF5A10/g, replacement: 'var(--orange-primary)', desc: 'Orange Primary' },
  { pattern: /#FFAD75/g, replacement: 'var(--orange-light)', desc: 'Orange Light' },

  // Orange Backgrounds
  { pattern: /rgba\(255,\s*90,\s*16,\s*0\.08\)/g, replacement: 'var(--orange-hover-bg)', desc: 'Orange Hover BG' },
  { pattern: /rgba\(255,\s*90,\s*16,\s*0\.1\)/g, replacement: 'var(--orange-active-bg)', desc: 'Orange Active BG' },
  { pattern: /rgba\(255,\s*90,\s*16,\s*0\.05\)/g, replacement: 'var(--orange-hover-bg)', desc: 'Orange Hover BG (light)' },

  // Orange Gradients - Must handle carefully
  {
    pattern: /background:\s*linear-gradient\(135deg,\s*#FF5A10\s+0%,\s*#FFAD75\s+100%\)/g,
    replacement: 'background: var(--orange-gradient)',
    desc: 'Orange Gradient'
  },
  {
    pattern: /linear-gradient\(135deg,\s*#FF5A10\s+0%,\s*#FFAD75\s+100%\)/g,
    replacement: 'var(--orange-gradient)',
    desc: 'Orange Gradient (inline)'
  },
  {
    pattern: /linear-gradient\(90deg,\s*#FF5A10\s+0%,\s*#FFAD75\s+100%\)/g,
    replacement: 'linear-gradient(90deg, var(--orange-primary) 0%, var(--orange-light) 100%)',
    desc: 'Orange Gradient (90deg)'
  },

  // Orange Shadows
  {
    pattern: /box-shadow:\s*0\s+2px\s+4px\s+rgba\(255,\s*90,\s*16,\s*0\.2\)/g,
    replacement: 'box-shadow: var(--orange-shadow-sm)',
    desc: 'Orange Shadow SM'
  },
  {
    pattern: /box-shadow:\s*0\s+2px\s+8px\s+rgba\(255,\s*90,\s*16,\s*0\.[23]\)/g,
    replacement: 'box-shadow: var(--orange-shadow-md)',
    desc: 'Orange Shadow MD'
  },
  {
    pattern: /box-shadow:\s*0\s+0\s+0\s+3px\s+rgba\(255,\s*90,\s*16,\s*0\.1\)/g,
    replacement: 'box-shadow: var(--orange-shadow-focus)',
    desc: 'Orange Focus Shadow'
  },

  // Deep Blue
  { pattern: /#08204A/g, replacement: 'var(--blue-deep)', desc: 'Deep Blue' },
  { pattern: /rgba\(8,\s*32,\s*74,\s*0\.08\)/g, replacement: 'var(--blue-info-bg)', desc: 'Blue Info BG' },
  { pattern: /rgba\(8,\s*32,\s*74,\s*0\.1\)/g, replacement: 'var(--blue-info-bg)', desc: 'Blue Info BG' },

  // Transitions
  { pattern: /transition:\s*all\s+0\.2s\s+ease/g, replacement: 'transition: all var(--transition-base)', desc: 'Transition Base' },
  { pattern: /transition:\s*all\s+0\.15s\s+ease/g, replacement: 'transition: all var(--transition-fast)', desc: 'Transition Fast' },
  { pattern: /transition:\s*all\s+0\.3s\s+ease/g, replacement: 'transition: all var(--transition-slow)', desc: 'Transition Slow' },
];

function processDirectory(dir) {
  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = join(dir, file);
    const stat = statSync(fullPath);

    if (stat.isDirectory() && !fullPath.includes('node_modules')) {
      processDirectory(fullPath);
    } else if (file.endsWith('.html')) {
      processFile(fullPath);
    }
  }
}

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const originalContent = content;
  let fileReplacements = 0;

  REPLACEMENTS.forEach(({ pattern, replacement, desc }) => {
    const matches = content.match(pattern);
    if (matches) {
      content = content.replace(pattern, replacement);
      fileReplacements += matches.length;
      replacements += matches.length;
    }
  });

  if (content !== originalContent) {
    writeFileSync(filePath, content, 'utf-8');
    filesUpdated++;
    console.log(`✅ ${filePath.replace(process.cwd(), '')} (${fileReplacements} replacements)`);
  }
}

console.log('🔧 Applying Design Tokens to all components...\n');
processDirectory('./v2/components');
console.log(`\n✅ Updated ${filesUpdated} files with ${replacements} total replacements.`);

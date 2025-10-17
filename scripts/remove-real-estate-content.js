#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapping of real estate terms to neutral alternatives
const REPLACEMENTS = [
  // LYD specific
  { pattern: /LYDDropdown/g, replacement: 'CoreDropdown' },
  { pattern: /LYD Estate/g, replacement: 'Brand Name' },
  { pattern: /LYD/g, replacement: 'CORE' },

  // Property related
  { pattern: /\bproperty listings\b/gi, replacement: 'items' },
  { pattern: /\bproperty listing\b/gi, replacement: 'item' },
  { pattern: /\bproperties\b(?! table| name| value)/gi, replacement: 'items' },
  { pattern: /\bproperty\b(?! name| value| table)/gi, replacement: 'item' },
  { pattern: /\bEdit Property\b/g, replacement: 'Edit Item' },
  { pattern: /\bShare Listing\b/g, replacement: 'Share Item' },
  { pattern: /\bFilter Properties\b/g, replacement: 'Filter Items' },
  { pattern: /\bProperty Type\b/g, replacement: 'Category' },
  { pattern: /\bproperty type\b/g, replacement: 'category' },
  { pattern: /\bproperty viewings\b/gi, replacement: 'appointments' },
  { pattern: /\bproperty viewing\b/gi, replacement: 'appointment' },
  { pattern: /\bProperty Listings\b/g, replacement: 'Item Listings' },
  { pattern: /\bLoad More Properties\b/g, replacement: 'Load More Items' },

  // Real estate specific
  { pattern: /\bFor Sale\b/g, replacement: 'Category A' },
  { pattern: /\bfor sale\b/g, replacement: 'category A' },
  { pattern: /\bFor Rent\b/g, replacement: 'Category B' },
  { pattern: /\bfor rent\b/g, replacement: 'category B' },
  { pattern: /\bNew Projects\b/g, replacement: 'New Items' },
  { pattern: /\bCommercial\b(?! use)/g, replacement: 'Category C' },
  { pattern: /\bSold\b(?! out)/g, replacement: 'Archive' },
  { pattern: /\bsold\b(?! out)/g, replacement: 'archived' },
  { pattern: /\bRecently sold\b/g, replacement: 'Recently archived' },
  { pattern: /\bapartment\b/gi, replacement: 'Option A' },
  { pattern: /\bApartments\b/g, replacement: 'Options A' },
  { pattern: /\bagent\b/gi, replacement: 'team member' },
  { pattern: /\bAgents\b/g, replacement: 'Team' },
  { pattern: /\bagents\b/g, replacement: 'team members' },

  // Bedroom/bathroom specific
  { pattern: /\b(\d+)\s+Bedroom(s?)\b/g, replacement: '$1 Unit$2' },
  { pattern: /\b(\d+)\+?\s+Bedroom(s?)\b/g, replacement: '$1+ Unit$2' },
  { pattern: /\bbedroom\b/gi, replacement: 'unit' },
  { pattern: /\bBedrooms\b/g, replacement: 'Units' },
  { pattern: /\bbedrooms\b/g, replacement: 'units' },

  // Living/housing related
  { pattern: /\bliving space\b/gi, replacement: 'available space' },
  { pattern: /\bLiving Space\b/g, replacement: 'Available Space' },
  { pattern: /\blisting\b/gi, replacement: 'item' },
  { pattern: /\bListings\b/g, replacement: 'Items' },
];

function removeRealEstateContent(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let changeCount = 0;

    REPLACEMENTS.forEach(({ pattern, replacement }) => {
      const matches = updatedContent.match(pattern);
      if (matches) {
        changeCount += matches.length;
        updatedContent = updatedContent.replace(pattern, replacement);
      }
    });

    if (changeCount > 0) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      console.log(`✅ ${path.basename(filePath)}: ${changeCount} replacements`);
      return changeCount;
    }

    return 0;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

function scanDirectory(dir, ext = '.html') {
  let totalChanges = 0;
  let filesChanged = 0;

  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      const { changes, files: count } = scanDirectory(fullPath, ext);
      totalChanges += changes;
      filesChanged += count;
    } else if (file.isFile() && file.name.endsWith(ext)) {
      const changes = removeRealEstateContent(fullPath);
      if (changes > 0) {
        totalChanges += changes;
        filesChanged++;
      }
    }
  }

  return { changes: totalChanges, files: filesChanged };
}

// Main execution
const v2Dir = path.join(__dirname, '..', 'v2');
console.log('🔍 Scanning for real estate content...\n');

const { changes, files } = scanDirectory(v2Dir);

console.log(`\n📊 SUMMARY`);
console.log(`─────────────────────────────────────`);
console.log(`Files changed: ${files}`);
console.log(`Total replacements: ${changes}`);
console.log(`\n✅ Real estate content neutralization complete!`);

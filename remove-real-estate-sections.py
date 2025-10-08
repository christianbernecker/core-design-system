#!/usr/bin/env python3
"""
Removes all 'Real Estate Use Cases' sections from CORE Design System HTML files.
Precisely removes from section comment to closing </section> tag.
"""

import re
import os
from pathlib import Path

def remove_real_estate_section(content):
    """Remove Real Estate Use Cases section from HTML content."""

    # Pattern: Match from <!-- Section X: Real Estate Use Cases --> to </section>
    # Includes any whitespace and the complete section block
    pattern = r'\s*<!-- Section \d+: Real Estate Use Cases -->\s*<section class="section">.*?</section>\s*'

    # Use DOTALL flag to match across newlines
    cleaned = re.sub(pattern, '\n', content, flags=re.DOTALL)

    return cleaned

def process_file(filepath):
    """Process a single HTML file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original_content = f.read()

        # Check if file contains Real Estate section
        if 'Real Estate Use Cases' not in original_content:
            return False

        # Remove the section
        cleaned_content = remove_real_estate_section(original_content)

        # Check if something was actually removed
        if cleaned_content == original_content:
            print(f"⚠️  WARNING: No changes made to {filepath}")
            return False

        # Write cleaned content back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(cleaned_content)

        # Calculate how much was removed
        removed_lines = original_content.count('\n') - cleaned_content.count('\n')
        print(f"✅ {filepath.name:30s} - Removed ~{removed_lines} lines")
        return True

    except Exception as e:
        print(f"❌ ERROR processing {filepath}: {e}")
        return False

def main():
    """Main execution."""
    base_path = Path('/Users/christianbernecker/core-design-system/v2')

    # Find all HTML files (excluding backups)
    html_files = []
    for root, dirs, files in os.walk(base_path):
        # Skip backup directories
        if 'backup' in root.lower():
            continue
        for file in files:
            if file.endswith('.html'):
                filepath = Path(root) / file
                html_files.append(filepath)

    print(f"🔍 Found {len(html_files)} HTML files\n")

    # Process each file
    processed = 0
    for filepath in sorted(html_files):
        if process_file(filepath):
            processed += 1

    print(f"\n✅ Successfully processed {processed} files")
    print(f"📦 Total files scanned: {len(html_files)}")

if __name__ == '__main__':
    main()

#!/bin/bash

# Script to remove all real estate references from CORE Design System
# Replaces with generic, neutral alternatives

echo "🧹 Cleaning up Real Estate references..."

# Define replacement mappings
declare -A replacements=(
    # English terms
    ["real estate"]="business"
    ["Real Estate"]="Business"
    ["REAL ESTATE"]="BUSINESS"
    ["property"]="item"
    ["Property"]="Item"
    ["PROPERTY"]="ITEM"
    ["apartment"]="product"
    ["Apartment"]="Product"
    ["house"]="product"
    ["House"]="Product"
    ["luxury real estate"]="premium business"
    ["Luxury Real Estate"]="Premium Business"

    # German terms
    ["Immobili"]="Geschäft"
    ["immobili"]="geschäft"
    ["Wohnung"]="Produkt"
    ["wohnung"]="produkt"
    ["Haus"]="Produkt"
    ["haus"]="produkt"

    # Specific phrases
    ["property card"]="product card"
    ["Property Card"]="Product Card"
    ["property listing"]="product listing"
    ["Property Listing"]="Product Listing"
    ["property details"]="item details"
    ["Property Details"]="Item Details"
    ["real estate agent"]="business consultant"
    ["Real Estate Agent"]="Business Consultant"
    ["property viewing"]="appointment"
    ["Property Viewing"]="Appointment"
)

# Count files
total_files=$(find /Users/christianbernecker/core-design-system/v2 -name "*.html" -type f | wc -l | tr -d ' ')
current=0

# Process each HTML file
find /Users/christianbernecker/core-design-system/v2 -name "*.html" -type f | while read file; do
    current=$((current + 1))
    echo "[$current/$total_files] Processing: $file"

    # Create backup
    cp "$file" "$file.bak"

    # Apply replacements
    for search in "${!replacements[@]}"; do
        replace="${replacements[$search]}"
        sed -i '' "s/$search/$replace/g" "$file"
    done
done

echo "✅ Cleanup complete!"
echo "📝 Backups created with .bak extension"
echo "🔍 Review changes with: git diff"

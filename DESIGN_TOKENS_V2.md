# Design System v2 - Design Tokens Documentation

## Overview

This document outlines the standardized design tokens for the CORE Design System v2. All components must use these CSS custom properties to ensure visual consistency across the entire system.

## Color Tokens

### Orange Primary Colors

The primary brand color for interactive elements, CTAs, and primary actions.

```css
--orange-primary: #FF5A10       /* Main orange - buttons, links, primary actions */
--orange-light: #FFAD75         /* Light orange - gradients, hover states */
```

### Orange State Backgrounds

Used for hover, active, and focus states of orange elements.

```css
--orange-hover-bg: rgba(255, 90, 16, 0.08)    /* 8% opacity hover background */
--orange-active-bg: rgba(255, 90, 16, 0.1)    /* 10% opacity active/pressed state */
--orange-focus-ring: rgba(255, 90, 16, 0.1)   /* 10% opacity focus ring */
```

### Orange Gradients

Standardized gradients for buttons and interactive elements.

```css
--orange-gradient: linear-gradient(135deg, #FF5A10 0%, #FFAD75 100%)
--orange-gradient-hover: linear-gradient(135deg, #E54F0D 0%, #FF9C66 100%)
```

### Orange Shadows

Consistent shadow depths for orange elements.

```css
--orange-shadow-sm: 0 2px 4px rgba(255, 90, 16, 0.2)      /* Small shadow - subtle elevation */
--orange-shadow-md: 0 2px 8px rgba(255, 90, 16, 0.3)      /* Medium shadow - cards, dropdowns */
--orange-shadow-lg: 0 4px 12px rgba(255, 90, 16, 0.25)    /* Large shadow - modals, important elements */
--orange-shadow-focus: 0 0 0 3px rgba(255, 90, 16, 0.1)   /* Focus shadow - accessibility */
```

### Deep Blue Secondary Colors

The secondary brand color for informational elements and accents.

```css
--blue-deep: #08204A                      /* Deep blue - text, borders, secondary elements */
--blue-info-bg: rgba(8, 32, 74, 0.08)     /* 8% opacity - info backgrounds */
--blue-info-border: rgba(8, 32, 74, 0.2)  /* 20% opacity - subtle borders */
```

## Transition Tokens

Standardized transition durations for consistent animations.

```css
--transition-fast: 0.15s ease     /* Fast - small UI changes, icon rotations */
--transition-base: 0.2s ease      /* Base - most interactions, hover states */
--transition-slow: 0.3s ease      /* Slow - complex animations, modals */
```

## Usage Guidelines

### DO ✅

- **Always use CSS variables** for colors, shadows, and transitions
- **Use semantic naming** - choose the variable that matches the intent (e.g., `--orange-shadow-md` for medium elevation)
- **Test across browsers** - ensure variables work in all supported browsers
- **Document deviations** - if you must deviate, document why in code comments

### DON'T ❌

- **Never hardcode color values** (e.g., `#FF5A10`, `rgba(255, 90, 16, 0.5)`)
- **Don't create new opacity variants** - use existing tokens or propose additions
- **Don't mix transition durations** - stick to the three standardized durations
- **Don't override with !important** - this breaks the token system

## Component Implementation Examples

### Primary Button

```css
.core-button.primary {
    background: var(--orange-gradient);
    box-shadow: var(--orange-shadow-md);
    transition: all var(--transition-base);
}

.core-button.primary:hover {
    background: var(--orange-gradient-hover);
    box-shadow: var(--orange-shadow-lg);
}

.core-button.primary:focus {
    box-shadow: var(--orange-shadow-focus);
}
```

### Input with Orange Accent

```css
.core-input:focus {
    border-color: var(--orange-primary);
    box-shadow: var(--orange-shadow-focus);
    transition: all var(--transition-base);
}
```

### Info Card with Blue Accent

```css
.core-alert.info {
    background: var(--blue-info-bg);
    border: 1px solid var(--blue-info-border);
    color: var(--blue-deep);
}
```

## Verification

Use the automated verification script to check for hardcoded values:

```bash
npm run verify
```

This will scan all component files and report any hardcoded colors that should use design tokens instead.

## Visual Regression Testing

Run Playwright tests to ensure visual consistency:

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Update baseline screenshots (after intentional changes)
npx playwright test --update-snapshots
```

## Migration Checklist

When migrating a component to Design System v2:

- [ ] Replace all `#FF5A10` with `var(--orange-primary)`
- [ ] Replace all `#FFAD75` with `var(--orange-light)`
- [ ] Replace all `#08204A` with `var(--blue-deep)`
- [ ] Replace hardcoded gradients with `var(--orange-gradient)`
- [ ] Replace hardcoded shadows with appropriate shadow tokens
- [ ] Replace transition durations with token equivalents
- [ ] Run verification script: `npm run verify`
- [ ] Test visual appearance in all supported browsers
- [ ] Update Playwright snapshots if needed
- [ ] Document any intentional deviations

## Token Governance

### Adding New Tokens

If you need a token that doesn't exist:

1. **Propose the token** - Open an issue explaining the use case
2. **Get approval** - Ensure it's truly needed and not a one-off case
3. **Add to master.css** - Add the token with clear documentation
4. **Update this guide** - Document the new token and its usage
5. **Update verification script** - Add validation for the new token

### Deprecating Tokens

When removing or changing tokens:

1. **Mark as deprecated** - Add deprecation notice in master.css
2. **Provide migration path** - Document the replacement token
3. **Allow grace period** - Give teams time to migrate (minimum 2 weeks)
4. **Update all components** - Ensure no components use deprecated tokens
5. **Remove from codebase** - Only after all usage is migrated

## Support

For questions or issues with design tokens:

- Check this documentation first
- Run `npm run verify` to identify specific issues
- Review the Playwright test results for visual inconsistencies
- Open an issue on GitHub with specific examples

---

**Last Updated:** October 17, 2025
**Version:** 2.0.0
**Maintained by:** Design System Team

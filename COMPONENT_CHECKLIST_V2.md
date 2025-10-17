# Design System v2 - Component Compliance Checklist

## Overview

This checklist ensures that every component in the CORE Design System v2 meets our quality, consistency, and accessibility standards.

## Component Status

### ✅ Fully Migrated (27 Components)

All of the following components have been migrated to Design System v2 and use standardized design tokens:

1. **Buttons** - Primary, Secondary, Outline, Ghost variants
2. **Inputs** - Text, email, password, number, date inputs
3. **Checkbox** - Standard and custom styled checkboxes
4. **Radio** - Standard and custom styled radio buttons
5. **Switch** - Toggle switches with animations
6. **Textarea** - Multi-line text inputs
7. **Alert** - Success, warning, error, info alerts
8. **Toast** - Notification toasts with auto-dismiss
9. **Progress** - Linear progress indicators
10. **Spinner** - Loading spinners
11. **Navbar** - Navigation bars with responsive behavior
12. **Tabs** - Tabbed interfaces
13. **Pagination** - Page navigation controls
14. **Badge** - Status badges and labels
15. **Avatar** - User avatars with fallbacks
16. **Tooltip** - Contextual tooltips
17. **Table** - Data tables with sorting
18. **Slider** - Range sliders
19. **Calendar** - Date pickers and calendars
20. **Date Picker** - Advanced date selection
21. **Autocomplete** - Search with suggestions
22. **Select** - Dropdown select menus
23. **Dropdown** - Dropdown menus
24. **Accordion** - Collapsible content panels
25. **Modal** - Dialog modals
26. **Cards** - Content cards with various layouts
27. **Typography** - Text styles and hierarchy

## Quality Standards

### Design Token Compliance

All components must:

- ✅ Use `var(--orange-primary)` instead of `#FF5A10`
- ✅ Use `var(--orange-light)` instead of `#FFAD75`
- ✅ Use `var(--blue-deep)` instead of `#08204A`
- ✅ Use standardized shadow tokens (`--orange-shadow-sm/md/lg`)
- ✅ Use standardized transition tokens (`--transition-fast/base/slow`)
- ✅ Pass automated verification: `npm run verify`

### Visual Consistency

All components must:

- ✅ Have Playwright visual regression tests
- ✅ Pass visual tests in Chromium, Firefox, and WebKit
- ✅ Maintain consistent spacing (8px grid system)
- ✅ Use consistent border radius (4px, 8px, 12px)
- ✅ Follow the Design System v2 color palette

### Accessibility (WCAG AA)

All components must:

- ✅ Have minimum 4.5:1 color contrast for normal text
- ✅ Have minimum 3:1 color contrast for large text
- ✅ Include visible focus indicators
- ✅ Support keyboard navigation
- ✅ Include proper ARIA labels and roles
- ✅ Work with screen readers

### Documentation

All components must have:

- ✅ Component description and purpose
- ✅ Usage examples with code snippets
- ✅ API/Props documentation table
- ✅ Accessibility notes
- ✅ Best practices section
- ✅ Common pitfalls / what to avoid

## Component Review Template

Use this template when reviewing or creating components:

```markdown
## Component Name: [Name]

### 1. Design Tokens ✅/❌
- [ ] No hardcoded colors (run `npm run verify`)
- [ ] Uses standardized shadows
- [ ] Uses standardized transitions
- [ ] Follows Design System v2 color palette

### 2. Visual Quality ✅/❌
- [ ] Playwright tests created
- [ ] Tests pass in all browsers
- [ ] Consistent with other components
- [ ] Responsive design implemented
- [ ] Dark mode compatible (if applicable)

### 3. Accessibility ✅/❌
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Focus indicators visible and clear
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] ARIA labels present and correct

### 4. Code Quality ✅/❌
- [ ] Clean, semantic HTML
- [ ] Modular, reusable CSS
- [ ] No !important overrides
- [ ] Comments for complex logic
- [ ] Consistent naming conventions

### 5. Documentation ✅/❌
- [ ] Clear component description
- [ ] Usage examples provided
- [ ] Props/API documented
- [ ] Accessibility notes included
- [ ] Best practices listed

### 6. Performance ✅/❌
- [ ] Minimal DOM nodes
- [ ] Efficient CSS selectors
- [ ] Smooth animations (60fps)
- [ ] No layout thrashing
- [ ] Lazy loading images (if applicable)

### Notes
[Any additional notes, deviations, or special considerations]
```

## Testing Checklist

### Before Committing

- [ ] Run `npm run verify` - no errors reported
- [ ] Run `npm test` - all tests pass
- [ ] Visual check in Chrome, Firefox, Safari
- [ ] Test keyboard navigation
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Test responsive behavior (mobile, tablet, desktop)

### Before Deploying

- [ ] All Playwright tests pass
- [ ] No console errors or warnings
- [ ] Performance benchmarks met
- [ ] Documentation is up to date
- [ ] Changelog updated
- [ ] Version number bumped appropriately

## Verification Commands

```bash
# Verify design token usage
npm run verify

# Run visual regression tests
npm test

# Run tests with UI for debugging
npm run test:ui

# Update baseline screenshots (after intentional changes)
npx playwright test --update-snapshots --project=chromium

# Run accessibility checks (requires axe-playwright)
npx playwright test --grep "Accessibility"
```

## Common Issues and Solutions

### Issue: Hardcoded Colors

**Symptom:** `npm run verify` reports hardcoded color values

**Solution:**
```css
/* ❌ Don't */
background: #FF5A10;
box-shadow: 0 2px 8px rgba(255, 90, 16, 0.3);

/* ✅ Do */
background: var(--orange-primary);
box-shadow: var(--orange-shadow-md);
```

### Issue: Visual Regression Test Failures

**Symptom:** Playwright reports screenshot differences

**Solution:**
1. Review the diff images in `test-results/`
2. If change is intentional: `npx playwright test --update-snapshots`
3. If change is unintentional: fix the CSS and rerun tests

### Issue: Inconsistent Focus Indicators

**Symptom:** Focus states not visible or inconsistent

**Solution:**
```css
/* ✅ Use standardized focus styles */
.component:focus {
    outline: none; /* Remove browser default */
    box-shadow: var(--orange-shadow-focus);
    border-color: var(--orange-primary);
}
```

### Issue: Color Contrast Failures

**Symptom:** Accessibility tests fail due to low contrast

**Solution:**
- Use `--orange-primary` (#FF5A10) with white text (contrast: 4.5:1 ✅)
- Use `--blue-deep` (#08204A) with white text (contrast: 14:1 ✅)
- Avoid using light colors on light backgrounds

## Component Evolution

### Adding a New Component

1. **Design Phase**
   - Create mockups following Design System v2
   - Ensure it doesn't duplicate existing components
   - Get design approval

2. **Development Phase**
   - Use design tokens from day one
   - Follow naming conventions
   - Write clean, semantic HTML

3. **Testing Phase**
   - Add Playwright visual regression tests
   - Add accessibility tests
   - Test in all supported browsers

4. **Documentation Phase**
   - Complete all documentation sections
   - Add usage examples
   - Document props/API

5. **Review Phase**
   - Complete component checklist
   - Get code review
   - Get design review

6. **Release Phase**
   - Update changelog
   - Bump version
   - Deploy to production

### Updating an Existing Component

1. **Assessment**
   - Document what needs to change
   - Check impact on other components
   - Plan migration path

2. **Implementation**
   - Make changes using design tokens
   - Update tests
   - Update documentation

3. **Verification**
   - Run full test suite
   - Check for regressions
   - Update snapshots if needed

4. **Communication**
   - Update changelog
   - Notify teams of changes
   - Provide migration guide

## Metrics and Monitoring

### Quality Metrics

Track these metrics for each component:

- **Token Compliance:** 0 hardcoded colors (target: 100%)
- **Test Coverage:** All states tested (target: 100%)
- **Accessibility Score:** WCAG AA compliant (target: 100%)
- **Browser Support:** Works in Chrome, Firefox, Safari (target: 100%)
- **Performance:** Animations at 60fps (target: 100%)

### Current Status

As of October 17, 2025:

- **Components Migrated:** 27/27 (100%)
- **Token Compliance:** 28/28 component files clean
- **Visual Tests:** 27/27 passing (100%)
- **Remaining Work:**
  - 3 interaction state tests need baseline snapshots
  - 1 consistency test needs adjustment
  - 2 accessibility tests timing out (need optimization)

---

**Last Updated:** October 17, 2025
**Version:** 2.0.0
**Maintained by:** Design System Team

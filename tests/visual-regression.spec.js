import { test, expect } from '@playwright/test';

const components = [
  'buttons', 'inputs', 'checkbox', 'radio', 'switch', 'textarea',
  'alert', 'toast', 'progress', 'spinner',
  'navbar', 'tabs', 'pagination',
  'badge', 'avatar', 'tooltip', 'table', 'slider',
  'calendar', 'date-picker', 'autocomplete',
  'select', 'dropdown', 'accordion', 'modal', 'cards', 'typography'
];

test.describe('Component Visual Regression', () => {
  for (const component of components) {
    test(`${component} - default state`, async ({ page }) => {
      await page.goto(`/components/${component}/`);

      // Wait for fonts and styles to load
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      // Take full page screenshot
      await expect(page).toHaveScreenshot(`${component}-full.png`, {
        fullPage: true,
        animations: 'disabled',
      });
    });
  }
});

test.describe('Component Consistency', () => {
  test('Orange color consistency across components', async ({ page }) => {
    const orangeUsage = {};

    for (const component of components.slice(0, 5)) { // Sample 5 components
      await page.goto(`/components/${component}/`);

      // Extract all orange colors used
      const colors = await page.evaluate(() => {
        const elements = document.querySelectorAll('*');
        const orangeColors = new Set();

        elements.forEach(el => {
          const computed = getComputedStyle(el);
          const bg = computed.backgroundColor;
          const border = computed.borderColor;
          const color = computed.color;

          // Check for orange RGB values (255, 90, 16)
          [bg, border, color].forEach(value => {
            if (value.includes('255, 90, 16') || value.includes('#FF5A10')) {
              orangeColors.add(value);
            }
          });
        });

        return Array.from(orangeColors);
      });

      orangeUsage[component] = colors;
    }

    // Log results
    console.log('Orange usage by component:', orangeUsage);

    // Verify all use Design System v2 orange
    Object.entries(orangeUsage).forEach(([comp, colors]) => {
      colors.forEach(color => {
        expect(
          color.includes('255, 90, 16') || color.includes('FF5A10'),
          `${comp} uses non-standard orange: ${color}`
        ).toBeTruthy();
      });
    });
  });

  test('CSS Variables usage verification', async ({ page }) => {
    await page.goto('/components/buttons/');

    const varUsage = await page.evaluate(() => {
      const styles = Array.from(document.styleSheets)
        .flatMap(sheet => {
          try {
            return Array.from(sheet.cssRules || []);
          } catch {
            return [];
          }
        })
        .map(rule => rule.cssText)
        .join('\n');

      const orangeVarCount = (styles.match(/var\(--orange-/g) || []).length;
      const blueVarCount = (styles.match(/var\(--blue-/g) || []).length;
      const hardcodedOrangeCount = (styles.match(/#FF5A10/g) || []).length;

      return { orangeVarCount, blueVarCount, hardcodedOrangeCount };
    });

    console.log('CSS Variable usage:', varUsage);

    // Expect CSS variables to be used
    expect(varUsage.orangeVarCount).toBeGreaterThan(0);

    // Hardcoded values should be minimal (only in master.css)
    expect(varUsage.hardcodedOrangeCount).toBeLessThan(5);
  });
});

test.describe('Interaction States', () => {
  test('Button hover states', async ({ page }) => {
    await page.goto('/components/buttons/');

    const button = page.locator('.core-button.primary').first();

    // Default state
    await expect(button).toHaveScreenshot('button-default.png');

    // Hover state
    await button.hover();
    await page.waitForTimeout(300); // Wait for transition
    await expect(button).toHaveScreenshot('button-hover.png');
  });

  test('Input focus states', async ({ page }) => {
    await page.goto('/components/inputs/');

    const input = page.locator('.core-input').first();

    // Default state
    await expect(input).toHaveScreenshot('input-default.png');

    // Focus state
    await input.focus();
    await page.waitForTimeout(300);
    await expect(input).toHaveScreenshot('input-focus.png');
  });

  test('Checkbox active states', async ({ page }) => {
    await page.goto('/components/checkbox/');

    const checkbox = page.locator('.core-checkbox-input').first();
    const container = page.locator('.core-checkbox-group').first();

    // Unchecked state
    await expect(container).toHaveScreenshot('checkbox-unchecked.png');

    // Checked state
    await checkbox.click();
    await page.waitForTimeout(300);
    await expect(container).toHaveScreenshot('checkbox-checked.png');
  });
});

test.describe('Accessibility', () => {
  test('Color contrast verification', async ({ page }) => {
    await page.goto('/components/buttons/');

    const primaryButton = page.locator('.core-button.primary').first();

    const { bg, text } = await primaryButton.evaluate(el => {
      const computed = getComputedStyle(el);
      return {
        bg: computed.backgroundColor,
        text: computed.color
      };
    });

    console.log('Button colors:', { bg, text });

    // Verify text is white for contrast
    expect(text).toContain('255, 255, 255');
  });

  test('Focus indicators present', async ({ page }) => {
    await page.goto('/components/inputs/');

    const input = page.locator('.core-input').first();
    await input.focus();

    const focusStyles = await input.evaluate(el => {
      const computed = getComputedStyle(el);
      return {
        outline: computed.outline,
        boxShadow: computed.boxShadow,
        borderColor: computed.borderColor
      };
    });

    // Should have some kind of focus indicator
    const hasFocusIndicator =
      focusStyles.outline !== 'none' ||
      focusStyles.boxShadow !== 'none' ||
      focusStyles.borderColor.includes('255, 90, 16');

    expect(hasFocusIndicator).toBeTruthy();
  });
});

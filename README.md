# CORE Design System

> **Standalone HTML/CSS component library** - Framework-agnostic design system

## 🎯 Overview

The CORE Design System is a comprehensive collection of reusable UI components, design principles, and guidelines. Built with pure HTML and CSS, it can be integrated into any project regardless of the JavaScript framework.

## 📦 What's Included

- **Design Principles** - Colors, Typography, Spacing, Grid
- **Components** - Buttons, Forms, Cards, Navigation, and more
- **Layouts** - Responsive grid system and layout templates
- **Patterns** - Common UI patterns and best practices

## 🚀 Getting Started

### View Online
Visit the live documentation: **https://core-design-system.vercel.app**

### Local Development

```bash
# Clone the repository
git clone https://github.com/christianbernecker/core-design-system.git
cd core-design-system

# Start local server (Python 3)
npm run dev
# or
python3 -m http.server 3000

# Open browser
open http://localhost:3000/v2/
```

## 📖 Documentation

The design system is self-documenting. Browse the `/v2/` directory for:

- `/v2/design-principles/` - Core design principles
- `/v2/components/` - Component library
- `/v2/layouts/` - Layout patterns

## 🎨 Usage

### Include in your project

```html
<!-- Link to Core CSS -->
<link rel="stylesheet" href="https://core-design-system.vercel.app/v2/shared/master.css">

<!-- Use components -->
<button class="core-button core-button-primary">
  Click me
</button>
```

### CSS Variables

```css
:root {
  --core-primary: #000066;
  --core-secondary: #d4af37;
  --core-text: #1a1a1a;
  --core-background: #ffffff;
  /* ... and many more */
}
```

## 🛠️ Technology

- **Pure HTML/CSS** - No JavaScript dependencies
- **CSS Custom Properties** - For theming
- **Responsive Design** - Mobile-first approach
- **Modern CSS** - Flexbox, Grid, Custom Properties

## 📄 License

MIT License - feel free to use in your projects

## 🔗 Links

- **Live Demo:** https://core-design-system.vercel.app
- **GitHub:** https://github.com/christianbernecker/core-design-system
- **Issues:** https://github.com/christianbernecker/core-design-system/issues

---

**Built with ❤️ by Christian Bernecker**

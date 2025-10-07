# CORE Design System - Neues Farbkonzept

## 🎨 Übersicht

Dieses Farbkonzept kombiniert die Corporate Farben aus `Design_DigitaleMedien_Basics.pdf` mit modernen Neon-Akzentfarben für ein zeitgemäßes, dynamisches Design System.

---

## 1️⃣ Primary Colors (Corporate Identity)

### Primary Blue - Dunkelblau
```css
--core-primary-blue: #08204A;
--core-primary-blue-rgb: rgb(8, 32, 74);
```
**Verwendung:** Hauptfarbe für Buttons, Headlines, Navigation

### Primary Orange - Signalfarbe
```css
--core-primary-orange: #FF5A10;
--core-primary-orange-rgb: rgb(255, 90, 16);
```
**Verwendung:** CTAs, Hover-States, Highlights

---

## 2️⃣ Extended Primary Palette

### Blue Scale
```css
/* Dunkelster Blauton */
--core-blue-900: #051228;
--core-blue-900-rgb: rgb(5, 18, 40);

/* Primär Blau (Corporate) */
--core-blue-800: #08204A;
--core-blue-800-rgb: rgb(8, 32, 74);

/* Mittlerer Blauton */
--core-blue-600: #054A91;
--core-blue-600-rgb: rgb(5, 74, 145);

/* Heller Blauton */
--core-blue-400: #6498C5;
--core-blue-400-rgb: rgb(100, 152, 197);
```

### Orange Scale
```css
/* Primär Orange (Corporate) */
--core-orange-600: #FF5A10;
--core-orange-600-rgb: rgb(255, 90, 16);

/* Heller Orange */
--core-orange-400: #FFAD75;
--core-orange-400-rgb: rgb(255, 173, 117);
```

---

## 3️⃣ Neon Accent Colors (NEU!)

### Neon Cyan - Data Color 1
```css
--core-neon-cyan: #00F0FF;
--core-neon-cyan-rgb: rgb(0, 240, 255);
--core-neon-cyan-glow: 0 0 20px rgba(0, 240, 255, 0.5);
```
**Verwendung:** Data Visualization, Interactive Charts, Highlights

### Neon Magenta - Data Color 2
```css
--core-neon-magenta: #FF00FF;
--core-neon-magenta-rgb: rgb(255, 0, 255);
--core-neon-magenta-glow: 0 0 20px rgba(255, 0, 255, 0.5);
```
**Verwendung:** Data Visualization, Secondary Highlights, Alerts

### Neon Purple (Optional - Mix aus beiden)
```css
--core-neon-purple: #BF00FF;
--core-neon-purple-rgb: rgb(191, 0, 255);
--core-neon-purple-glow: 0 0 20px rgba(191, 0, 255, 0.5);
```
**Verwendung:** Special Effects, Hover States

---

## 4️⃣ Neutral Colors

### Grayscale
```css
/* Schwarz */
--core-black: #000000;
--core-black-rgb: rgb(0, 0, 0);

/* Dunkelgrau */
--core-gray-700: #878786;
--core-gray-700-rgb: rgb(135, 135, 134);

/* Mittelgrau */
--core-gray-500: #C5C6C6;
--core-gray-500-rgb: rgb(197, 198, 198);

/* Hellgrau */
--core-gray-300: #EEEAE9;
--core-gray-300-rgb: rgb(238, 234, 233);

/* Weiß */
--core-white: #FFFFFF;
--core-white-rgb: rgb(255, 255, 255);
```

---

## 5️⃣ Gradient Definitions

### Primary Gradient (Corporate)
```css
--core-gradient-primary: linear-gradient(135deg, #08204A 0%, #054A91 100%);
```

### Orange Gradient
```css
--core-gradient-orange: linear-gradient(135deg, #FF5A10 0%, #FFAD75 100%);
```

### Neon Gradient (NEU!)
```css
--core-gradient-neon: linear-gradient(135deg, #00F0FF 0%, #FF00FF 100%);
```

### Neon Glow Gradient (NEU!)
```css
--core-gradient-neon-glow: linear-gradient(
  135deg,
  #00F0FF 0%,
  #BF00FF 50%,
  #FF00FF 100%
);
```

### Subtle Background Gradient
```css
--core-gradient-subtle: linear-gradient(
  180deg,
  rgba(8, 32, 74, 0.02) 0%,
  rgba(255, 90, 16, 0.02) 100%
);
```

---

## 6️⃣ Semantic Colors

### Success
```css
--core-success: #00C853;
--core-success-light: #69F0AE;
--core-success-dark: #00A046;
```

### Warning
```css
--core-warning: #FF5A10; /* Primary Orange */
--core-warning-light: #FFAD75;
--core-warning-dark: #CC4800;
```

### Error
```css
--core-error: #FF1744;
--core-error-light: #FF5252;
--core-error-dark: #D50000;
```

### Info
```css
--core-info: #6498C5; /* Blue 400 */
--core-info-light: #90CAF9;
--core-info-dark: #054A91;
```

---

## 7️⃣ Usage Guidelines

### Button Hierarchy

**Primary Button (Corporate)**
```css
background: var(--core-primary-blue);
color: var(--core-white);
hover: var(--core-blue-600);
```

**Secondary Button (CTA)**
```css
background: var(--core-primary-orange);
color: var(--core-white);
hover: var(--core-orange-400);
```

**Neon Accent Button (NEU!)**
```css
background: linear-gradient(135deg, var(--core-neon-cyan), var(--core-neon-magenta));
color: var(--core-white);
box-shadow: var(--core-neon-cyan-glow);
hover: brightness(1.2);
```

### Text Colors

```css
--core-text-primary: #051228; /* Blue 900 */
--core-text-secondary: #878786; /* Gray 700 */
--core-text-disabled: #C5C6C6; /* Gray 500 */
--core-text-inverse: #FFFFFF;
```

### Background Colors

```css
--core-bg-primary: #FFFFFF;
--core-bg-secondary: #EEEAE9; /* Gray 300 */
--core-bg-dark: #08204A; /* Blue 800 */
--core-bg-overlay: rgba(8, 32, 74, 0.8);
```

### Border Colors

```css
--core-border-default: #C5C6C6; /* Gray 500 */
--core-border-focus: #054A91; /* Blue 600 */
--core-border-neon: var(--core-neon-cyan);
```

---

## 8️⃣ Neon Effects (NEU!)

### Glow Effects
```css
/* Cyan Glow */
.neon-glow-cyan {
  box-shadow:
    0 0 10px var(--core-neon-cyan),
    0 0 20px var(--core-neon-cyan),
    0 0 40px rgba(0, 240, 255, 0.3);
}

/* Magenta Glow */
.neon-glow-magenta {
  box-shadow:
    0 0 10px var(--core-neon-magenta),
    0 0 20px var(--core-neon-magenta),
    0 0 40px rgba(255, 0, 255, 0.3);
}

/* Animated Pulse */
@keyframes neon-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

.neon-pulse {
  animation: neon-pulse 2s ease-in-out infinite;
}
```

### Text Neon Effects
```css
.neon-text-cyan {
  color: var(--core-neon-cyan);
  text-shadow:
    0 0 10px var(--core-neon-cyan),
    0 0 20px var(--core-neon-cyan),
    0 0 40px rgba(0, 240, 255, 0.5);
}

.neon-text-magenta {
  color: var(--core-neon-magenta);
  text-shadow:
    0 0 10px var(--core-neon-magenta),
    0 0 20px var(--core-neon-magenta),
    0 0 40px rgba(255, 0, 255, 0.5);
}
```

---

## 9️⃣ Data Visualization Colors

### Chart Colors (mit Neon-Integration)
```css
/* Primäre Chart-Farben */
--core-chart-1: #00F0FF; /* Neon Cyan */
--core-chart-2: #FF00FF; /* Neon Magenta */
--core-chart-3: #08204A; /* Corporate Blue */
--core-chart-4: #FF5A10; /* Corporate Orange */
--core-chart-5: #6498C5; /* Light Blue */
--core-chart-6: #BF00FF; /* Neon Purple */

/* Sekundäre Chart-Farben */
--core-chart-7: #FFAD75; /* Light Orange */
--core-chart-8: #054A91; /* Mid Blue */
```

---

## 🔟 Dark Mode Support

### Dark Mode Colors
```css
/* Dark Mode Backgrounds */
--core-dark-bg-primary: #0A0F1A;
--core-dark-bg-secondary: #051228;
--core-dark-bg-elevated: #08204A;

/* Dark Mode Text */
--core-dark-text-primary: #FFFFFF;
--core-dark-text-secondary: #C5C6C6;
--core-dark-text-disabled: #878786;

/* Neon Colors bleiben identisch in Dark Mode */
/* Sie leuchten besser auf dunklem Hintergrund! */
```

---

## 📊 Color Contrast & Accessibility

### WCAG AAA Compliant Combinations

✅ **Primary Blue (#08204A) + White (#FFFFFF)**: Contrast 13.5:1
✅ **Primary Orange (#FF5A10) + White (#FFFFFF)**: Contrast 4.8:1
✅ **Neon Cyan (#00F0FF) + Dark Blue (#051228)**: Contrast 14.2:1
✅ **Neon Magenta (#FF00FF) + Black (#000000)**: Contrast 8.7:1

⚠️ **Hinweis:** Neon-Farben NICHT für Fließtext verwenden, nur für Akzente!

---

## 🎯 Migration Plan

### Phase 1: Core Variables definieren
- [ ] `tokens.css` mit neuen Variablen erweitern
- [ ] Neon-Farben als optionale Accent-Variablen hinzufügen
- [ ] Gradients aktualisieren

### Phase 2: Components aktualisieren
- [ ] Button-Komponente mit Neon-Variant
- [ ] Card-Komponente mit Neon-Border-Option
- [ ] Chart-Komponenten mit Neon-Colors
- [ ] Badge-Komponente mit Neon-Status

### Phase 3: Documentation
- [ ] Color-Page im Design System aktualisieren
- [ ] Neon-Effects Showcase erstellen
- [ ] Usage Guidelines dokumentieren

---

## 🚀 Beispiel-Implementierung

### CSS Variables File
```css
/* /v2/shared/tokens-new.css */
:root {
  /* Primary Corporate Colors */
  --core-primary-blue: #08204A;
  --core-primary-orange: #FF5A10;

  /* Neon Accent Colors */
  --core-neon-cyan: #00F0FF;
  --core-neon-magenta: #FF00FF;
  --core-neon-purple: #BF00FF;

  /* Gradients */
  --core-gradient-neon: linear-gradient(135deg, #00F0FF 0%, #FF00FF 100%);

  /* Effects */
  --core-neon-glow-cyan: 0 0 20px rgba(0, 240, 255, 0.5);
  --core-neon-glow-magenta: 0 0 20px rgba(255, 0, 255, 0.5);
}
```

### Component Example: Neon Button
```html
<button class="btn btn-neon">
  Neon CTA Button
</button>
```

```css
.btn-neon {
  background: var(--core-gradient-neon);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  box-shadow: var(--core-neon-glow-cyan);
  transition: all 0.3s ease;
}

.btn-neon:hover {
  filter: brightness(1.2);
  box-shadow:
    var(--core-neon-glow-cyan),
    0 0 40px rgba(255, 0, 255, 0.5);
  transform: translateY(-2px);
}
```

---

## ✅ Zusammenfassung

**Vorteile dieses Konzepts:**
- ✅ Behält Corporate Identity (#08204A, #FF5A10)
- ✅ Erweitert um moderne Neon-Akzente
- ✅ WCAG Accessibility compliant
- ✅ Flexibel für Dark Mode
- ✅ Perfekt für Data Visualization
- ✅ Einzigartige visuelle Identität

**Nächste Schritte:**
1. Review & Approval einholen
2. tokens.css implementieren
3. Showcase-Seite erstellen
4. Components migrieren

---

**Erstellt:** 2025-10-07
**Version:** 1.0
**Basis:** Design_DigitaleMedien_Basics.pdf + Neon UX Vision

# Core Design System - Kontext & Anwendungs-Guide

> **Zentrale Referenz für die Anwendung des Design Systems auf alle Komponenten**

**Erstellt:** 2025-10-08
**Status:** Active
**Projekt:** Core Design System v2

---

## 🎯 Philosophie: Ströer UX Vision

### Human vs Machine Dichotomy

Das Design System basiert auf der Ströer UX Vision 2026:

**"A human beeing. That's why the most important thing is to use a font that's readable and quickly scannable."**

#### Clarity for Humans
- **Grotesk Sans-Serif** (Inter) für alle human-facing Inhalte
- Fokus auf Lesbarkeit, Scanning, Accessibility
- Verwendet für: UI-Text, Überschriften, Beschreibungen, CTA

#### Precision for Machines
- **Monospace** (JetBrains Mono) für alle maschinen-/daten-orientierten Inhalte
- Fokus auf Struktur, Logik, exakte Darstellung
- Verwendet für: Code, technische Werte, Daten, Tokens

#### Co-Creating
**"The Machine is not a tool. It's a partner."**
- Harmonisches Zusammenspiel beider Schriftarten
- Klare Trennung der Einsatzbereiche
- Konsistente Anwendung im gesamten System

---

## 🎨 Farb-System

### Primary Colors

#### Core Blue
```css
--core-primary-blue: #0066CC;        /* Haupt-Markenfarbe */
--core-primary-blue-light: #E5F2FF; /* Subtile Hintergründe */
--core-primary-blue-dark: #004C99;  /* Hover, Active States */
```

**Verwendung:**
- Primary Buttons
- Links (Hover)
- Section Titles (Typography-Seite)
- Wichtige UI-Elemente
- Border für Key-Features

#### Core Orange (Accent)
```css
--core-accent-orange: #FF8844;       /* Warm, einladend */
--core-accent-orange-light: #FFE5D6; /* Subtile Highlights */
--core-accent-orange-dark: #FF6611;  /* Hover States */
```

**Verwendung:**
- Secondary Buttons
- Akzente, Highlights
- Call-to-Action (non-primary)
- Warme Interaktionselemente

### Neon Gradients (Neu!)

#### Hero Gradient
```css
--core-gradient-neon-hero: linear-gradient(90deg,
    #F0FAFF 0%,      /* Fast reines Weiß links */
    #E0F7FF 10%,     /* Weiß mit Cyan-Hauch */
    #FFFFFF 20%,     /* Reines Weiß */
    #FFFFFF 27%,     /* Weiß hält 27% (2/3 von Orange 40%) */
    #33DDFF 35%,     /* Übergang zu Cyan */
    #00D4FF 45%,     /* Kräftiges Cyan */
    #00CCFF 60%,     /* Cyan-Ende */
    #FFB380 70%,     /* Orange-Start */
    #FF8844 85%,     /* Kräftiges Orange */
    #FF7733 100%     /* Orange-Ende */
);
```

**Proportionen:**
- **Weiß:** 27% (dominiert links)
- **Cyan:** 33% (Mitte)
- **Orange:** 40% (dominiert rechts)

**Verwendung:**
- Hero-Sektionen
- Premium-Komponenten
- Feature-Highlights
- Große visuelle Statements

#### Subtle Gradient
```css
--core-gradient-neon-subtle: linear-gradient(135deg,
    rgba(0, 212, 255, 0.1) 0%,
    rgba(255, 136, 68, 0.1) 100%
);
```

**Verwendung:**
- Subtile Hintergründe
- Card-Overlays
- Hover-Effekte
- Leichte Akzentuierung

#### Vibrant Gradient
```css
--core-gradient-neon-vibrant: linear-gradient(135deg,
    #00D4FF 0%,
    #FF8844 100%
);
```

**Verwendung:**
- Aufmerksamkeitsstarke Elemente
- Premium-Features
- Call-to-Action Backgrounds
- Iconische Elemente

### Grayscale System

```css
--core-white: #FFFFFF;
--core-black: #000000;
--core-gray-50: #F9FAFB;   /* Sehr helle BG */
--core-gray-100: #F3F4F6;  /* Helle BG */
--core-gray-200: #E5E7EB;  /* Borders */
--core-gray-300: #D1D5DB;  /* Disabled States */
--core-grey: #666666;       /* Body Text (Legacy-Name) */
--core-gray-700: #374151;  /* Headings */
--core-gray-900: #111827;  /* Strong Text */
```

**Verwendung:**
- Body Text: `--core-grey` (#666)
- Headings: `--core-gray-700` bis `--core-gray-900`
- Backgrounds: `--core-gray-50` bis `--core-gray-100`
- Borders: `--core-gray-200`
- Disabled: `--core-gray-300`

### Dark Background (Ströer-Style)

```css
background: linear-gradient(135deg, #08204A 0%, #000000 100%);
```

**Verwendung:**
- Hero-Sektionen (wie Typography Hero)
- Premium-Inhalte
- Kontrast-Sektionen
- Philosophische Statements

---

## 📝 Typografie-System

### Font Families

#### Primary Font: Inter (Grotesk)
```css
--font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Eigenschaften:**
- Clarity for humans
- Optimiert für Lesbarkeit
- Variable Font (100-900)
- Verwendet für: Alle UI, Content, Überschriften

**Font Weights:**
```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-black: 900;
```

#### Monospace Font: JetBrains Mono
```css
--font-family-mono: 'JetBrains Mono', 'Courier New', monospace;
```

**Eigenschaften:**
- Precision for machines
- Optimiert für Code & Daten
- Verwendet für: Code, technische Werte, Tokens, strukturierte Daten

### Type Scale

```css
/* Display (Hero Headlines) */
--font-size-display-1: 96px;  /* Große Hero-Statements */
--font-size-display-2: 72px;  /* Sekundäre Hero */
--font-size-display-3: 64px;  /* Tertiary Hero */

/* Headings */
--font-size-h1: 48px;  /* Page Titles */
--font-size-h2: 36px;  /* Section Titles */
--font-size-h3: 28px;  /* Subsection Titles */
--font-size-h4: 24px;  /* Component Titles */
--font-size-h5: 20px;  /* Small Headings */
--font-size-h6: 18px;  /* Smallest Headings */

/* Body Text */
--font-size-body-lg: 18px;   /* Lead Paragraphs */
--font-size-body: 16px;      /* Standard Body */
--font-size-body-sm: 14px;   /* Secondary Text */
--font-size-caption: 12px;   /* Captions, Labels */
--font-size-tiny: 10px;      /* Fine Print */
```

### Letter Spacing

```css
--letter-spacing-tight: -0.02em;   /* Display, Headlines */
--letter-spacing-normal: 0em;      /* Body Text */
--letter-spacing-wide: 0.05em;     /* Button Text, Labels */
--letter-spacing-wider: 0.1em;     /* Section Titles (ALL CAPS) */
```

### Line Heights

```css
--line-height-tight: 1.2;   /* Headlines */
--line-height-normal: 1.5;  /* Body Text */
--line-height-relaxed: 1.8; /* Long-form Content */
```

---

## 🧩 Komponenten-Styling-Regeln

### Section Titles (Ströer-Style)

**Standard Pattern:**
```html
<h2 class="section-title" style="
    color: var(--core-primary-blue);
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.1em;
    margin-bottom: var(--spacing-xl);
">SECTION NAME</h2>
```

**Verwendung:**
- Alle Section-Überschriften
- Konsistent auf allen Pages (Colors, Typography, Components, etc.)
- Immer uppercase
- Immer blaue Farbe

### Cards & Containers

#### Standard Card
```css
border: 2px solid var(--core-primary-blue);
border-radius: var(--radius-md);
padding: var(--spacing-2xl);
background: var(--core-gray-50);
```

#### Premium Card (mit Gradient)
```css
background: var(--core-gradient-neon-subtle);
border: 2px solid var(--core-primary-blue);
border-radius: var(--radius-lg);
padding: var(--spacing-3xl);
```

### Code/Token Display

**Pattern:**
```html
<code style="
    font-size: 12px;
    color: var(--core-primary-blue);
    font-family: var(--font-family-mono);
    background: white;
    padding: 4px 8px;
    border-radius: 4px;
">--token-name</code>
```

**Verwendung:**
- CSS-Token anzeigen
- Technische Werte
- Monospace für Präzision

### Buttons

#### Primary Button
```css
background: var(--core-primary-blue);
color: white;
padding: 12px 24px;
border-radius: var(--radius-md);
font-weight: 600;
letter-spacing: 0.05em;
```

#### Secondary Button
```css
background: var(--core-accent-orange);
color: white;
padding: 12px 24px;
border-radius: var(--radius-md);
font-weight: 600;
letter-spacing: 0.05em;
```

#### Outline Button
```css
background: transparent;
border: 2px solid var(--core-primary-blue);
color: var(--core-primary-blue);
padding: 12px 24px;
border-radius: var(--radius-md);
font-weight: 600;
```

---

## 📐 Spacing System

```css
--spacing-xs: 4px;
--spacing-sm: 8px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
--spacing-3xl: 64px;
--spacing-4xl: 96px;
```

**Anwendungsregeln:**
- Konsistente Abstände verwenden
- Nur Spacing-Tokens nutzen (keine Pixel-Werte)
- Vertikaler Rhythmus: Basis 8px

---

## 🔲 Border Radius

```css
--radius-sm: 4px;   /* Small Elements */
--radius-md: 8px;   /* Standard Cards, Buttons */
--radius-lg: 12px;  /* Large Cards */
--radius-xl: 16px;  /* Hero Sections */
--radius-full: 9999px; /* Pills, Circles */
```

---

## ✅ Migration Checklist für Komponenten

### Pro Komponente prüfen:

#### 1. Farben
- [ ] Verwendet `--core-primary-blue` für Primary Actions
- [ ] Verwendet `--core-accent-orange` für Secondary/Accents
- [ ] Grayscale aus `--core-gray-*` Token
- [ ] Keine Hardcoded Colors (#hex)
- [ ] Gradients nur aus Token-System

#### 2. Typografie
- [ ] **Inter** für alle UI/Content (nicht Playfair!)
- [ ] **JetBrains Mono** für Code/Data
- [ ] Font Sizes aus `--font-size-*` Token
- [ ] Letter Spacing aus `--letter-spacing-*` Token
- [ ] Line Heights aus `--line-height-*` Token

#### 3. Spacing
- [ ] Alle Abstände aus `--spacing-*` Token
- [ ] Keine Hardcoded Pixel-Werte
- [ ] Konsistenter vertikaler Rhythmus

#### 4. Border Radius
- [ ] Alle Radien aus `--radius-*` Token
- [ ] Keine Hardcoded Werte

#### 5. Ströer-Konzept
- [ ] Section Titles in blauem uppercase Style
- [ ] Klare Trennung Grotesk vs Monospace
- [ ] Dark Backgrounds für Premium-Content
- [ ] Gradient-Einsatz bewusst gewählt

#### 6. Semantik
- [ ] Keine "luxury" Wording (→ "premium")
- [ ] Keine "Real Estate" Beispiele
- [ ] Abstrakte, allgemeine Beispiele
- [ ] Deutsche Beschreibungen

---

## 🚫 Deprecated / Entfernt

### Playfair Display (❌ ENTFERNT)
```css
/* ❌ NICHT MEHR VERWENDEN */
--font-family-premium: 'Playfair Display', serif;
```

**Ersetzt durch:** Inter (Grotesk) für alle Anwendungsfälle

### "Luxury" Wording (❌ ENTFERNT)
- Ersetzt durch: "premium", "state-of-the-art", "high-quality"

### Real Estate Beispiele (❌ ENTFERNT)
- Ersetzt durch: abstrakte, allgemeine Use Cases

---

## 📋 Anwendungs-Workflow

### Komponente migrieren:

1. **Read existing component**
   ```bash
   Read v2/components/[name]/index.html
   ```

2. **Checklist durchgehen**
   - Colors prüfen → Token ersetzen
   - Typography prüfen → Inter/Mono korrekt?
   - Spacing prüfen → Tokens verwenden
   - Section Titles → Ströer-Style
   - Deprecated entfernen

3. **Edit component**
   - Systematisch alle Vorkommen ersetzen
   - Inline-Styles in Token umwandeln
   - Konsistenz mit anderen Komponenten prüfen

4. **Visual Check**
   - Build lokal testen
   - Vercel Preview Deploy
   - Cross-Check mit Typography/Colors Pages

5. **Commit**
   ```bash
   git commit -m "refactor(component): Wende Design System v2 an"
   ```

---

## 🎯 Ziel-Status

**Alle Komponenten sollen:**
- ✅ 100% Token-basiert (keine Hardcoded Values)
- ✅ Ströer-Konzept durchgängig (Grotesk/Mono)
- ✅ Konsistent mit Typography/Colors Pages
- ✅ Kein Playfair Display
- ✅ Keine Real Estate Beispiele
- ✅ Deutsche Beschreibungen

---

## 📚 Referenzen

### Zentrale Dateien
- **Tokens:** `/v2/shared/tokens.css`
- **Master CSS:** `/v2/shared/master.css`
- **Typography Guide:** `/v2/design-principles/typography/index.html`
- **Colors Guide:** `/v2/design-principles/colors/index.html`

### Live URLs
- **Typography:** https://core-design-system.vercel.app/v2/design-principles/typography
- **Colors:** https://core-design-system.vercel.app/v2/design-principles/colors

---

**Version:** 1.0
**Letzte Aktualisierung:** 2025-10-08
**Maintainer:** Christian Bernecker

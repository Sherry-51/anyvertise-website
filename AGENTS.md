# AGENTS.md - Anyvertise Website

## Project Overview

A vanilla HTML/CSS/JS multi-page website for "Anyvertise" - a premium e-commerce growth agency.

- **HTML5** - Semantic markup with proper structure
- **CSS3** - Custom styles with CSS variables, no framework
- **JavaScript** - Vanilla ES6+ for interactivity
- **No build tools** - Plain static files served directly

## Project Structure

```
/home/hustler/personal/anyvertisetesting/
├── index.html              # Home page
├── css/style.css          # Main stylesheet (~2050 lines)
├── js/main.js             # Main JavaScript (animations, header/footer injection)
├── services/              # Service pages (tiktok, shopify, amazon)
├── pages/                 # Content pages (about, contact, process, etc.)
└── assets/                # Images and logos
```

## Build/Lint/Test Commands

This project has **no build system** configured.

### Running the Project
```bash
# Python 3 (recommended)
python3 -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

### Testing
- No test framework configured - manual browser testing required
- To add tests: use Vitest, Jest, or Playwright
- Run single test: `npm test -- --run`

### Linting
- No linter configured
- HTML: https://validator.w3.org/
- CSS: Add stylelint with standard config
- JS: Add ESLint with airbnb-base config

## Code Style Guidelines

### CSS Variables (Updated)
```css
:root {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --bg-tertiary: #334155;
  --accent-teal: #2dd4bf;
  --accent-teal-light: #5eead4;
  --accent-teal-dark: #14b8a6;
  --text-primary: #ffffff;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --gradient-glow: linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%);
}
```

### HTML5 Guidelines
- Use semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Include `lang="en"` and meta viewport
- Include meta description for SEO

### CSS Guidelines
- Use CSS custom properties in `:root`
- Use meaningful class names: `.service-card`, `.hero-title`
- Keep specificity low - prefer class selectors over IDs
- Mobile-first: use `@media (max-width: 768px)` for breakpoints
- Maintain consistent spacing: 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem

### JavaScript Guidelines
- Use ES6+ features: const/let, arrow functions, template literals, destructuring
- Use meaningful variable/function names (camelCase)
- Keep functions small and focused (single responsibility)
- Handle errors with try/catch for async operations

### Naming Conventions
- **Files**: kebab-case (`main.js`, `contact-form.html`)
- **CSS Classes**: descriptive (`.service-card`, `.hero-title`)
- **JavaScript**: camelCase (`injectHeader`, `setupMobileMenu`)

### Error Handling
- Always check for null/undefined: `if (!element) return;`
- Use optional chaining: `element?.addEventListener()`
- Provide fallback values: `const value = data || defaultValue`

## Animations System

The site includes scroll-triggered animations:

### CSS Classes
```css
.animate-on-scroll        /* Base class - slides up on scroll */
.animate-delay-1         /* 0.1s delay */
.animate-delay-2         /* 0.2s delay */
.animate-delay-3         /* 0.3s delay */
.animate-delay-4         /* 0.4s delay */
```

### Counter Animations
Numbers animate from 0 to target value. Use `data-target` attribute:
```html
<span class="metric-value" data-target="$10M+">0</span>
```

### Adding Animations to Elements
1. Add `animate-on-scroll` class to container
2. Add stagger delays with `animate-delay-1/2/3/4`
3. For numbers: add `data-target="value"` and start with `0`

## Working with Header/Footer

Header and footer are injected via JavaScript in `js/main.js`:
- `injectHeader()` - Renders navigation with path handling
- `injectFooter()` - Renders footer with site links
- Path detection: `basePath = isServicePage ? '../' : ''`

### Adding New Pages
1. Create HTML in appropriate directory
2. Add `<div id="header-placeholder"></div>` at start of `<body>`
3. Add `<div id="footer-placeholder"></div>` before `</body>`
4. Include `<script src="../js/main.js"></script>` before `</body>`
5. Use `../css/style.css` for pages/ and services/ directories

### Path Rules
- Root pages: `css/style.css`, `js/main.js`
- services/ and pages/: `../css/style.css`, `../js/main.js`

## Mobile Drawer Menu
- Trigger: `.mobile-menu-btn` button
- Drawer: `.mobile-nav` (slides from left)
- Overlay: `.mobile-nav-overlay`
- Close: Click overlay, close button, or any nav link
- Styles in `@media (max-width: 768px)` block

## Adding New Service Pages

1. Copy existing service page (e.g., `services/tiktok.html`)
2. Update: title, meta description, hero content
3. Update problem cards (4 pain points)
4. Update roadmap steps (3 strategy steps)
5. Update case study metrics with `data-target` attributes
6. Update contact form service dropdown default

## Best Practices

1. Test responsive behavior - mobile, tablet, desktop
2. Check navigation - all links work correctly
3. Verify path handling - test links from all page locations
4. Check console - no errors in DevTools
5. Test animations scroll into view properly
6. Ensure number counters animate correctly

## Key Files

| File | Purpose |
|------|---------|
| `css/style.css` | All styles with animations and responsive breakpoints |
| `js/main.js` | Header/footer injection, animations, counter effects |
| `index.html` | Home page with hero, services, problems, roadmap, case studies |
| `services/tiktok.html` | Example service page template |

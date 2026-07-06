# Astro + React Portfolio Template

Template de portafolio personal inspirado en una estructura tipo one-page portfolio: hero, proyectos, sobre mí, experiencia, skills, logros y contacto.

## Cómo correrlo

```bash
npm install
npm run dev
```

## Build para producción

```bash
npm run build
npm run preview
```

El output de Astro se genera en `dist/`, ideal para Vercel, Netlify o Cloudflare Pages.

## Personalización rápida

Edita tu información en:

```txt
src/data/portfolio.js
```

Cambia estilos globales en:

```txt
src/styles/global.css
```

## Estructura

```txt
src/
  components/
    Navbar.jsx
    ProjectShowcase.jsx
    SkillMarquee.jsx
    ThemeToggle.jsx
  data/
    portfolio.js
  layouts/
    MainLayout.astro
  pages/
    index.astro
  styles/
    global.css
```

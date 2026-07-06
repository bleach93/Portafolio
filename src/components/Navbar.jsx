import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Logros', href: '#logros' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);

    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span className="brand-mark">ES</span>
        <span>Portfolio</span>
      </a>

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
      </button>

      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}
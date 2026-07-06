import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    const preferred = saved || 'dark';
    setTheme(preferred);
    document.documentElement.dataset.theme = preferred;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('theme', nextTheme);
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Cambiar tema">
      <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
    </button>
  );
}

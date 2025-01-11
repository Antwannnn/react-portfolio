import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = (event: React.MouseEvent) => {
    // Créer l'overlay
    const overlay = document.createElement('div');
    overlay.className = `theme-transition-overlay ${theme === 'light' ? 'to-dark' : 'to-light'}`;
    document.body.appendChild(overlay);

    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    document.documentElement.style.setProperty('--clip-x', `${buttonCenterX}px`);
    document.documentElement.style.setProperty('--clip-y', `${buttonCenterY}px`);

    requestAnimationFrame(() => {
      overlay.classList.add('expanding');
      
      setTimeout(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        
        overlay.classList.remove('expanding');
        
        setTimeout(() => {
          document.body.removeChild(overlay);
        }, 600);
      }, 450);
    });
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-accent-2/20 backdrop-blur-sm z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          {theme === 'light' ? (
            <MoonIcon className="w-6 h-6 text-primary" />
          ) : (
            <SunIcon className="w-6 h-6 text-primary" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeSwitcher; 
import { useState, useEffect } from 'react';

export function useScrollSection() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-theme]');
      const navHeight = 100; // Height of the navbar
      
      let currentTheme = 'dark';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        
        // Check if the section is in the viewport, considering the nav height
        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          currentTheme = section.getAttribute('data-theme') || 'dark';
          break; 
        }
      }
      
      setTheme(currentTheme);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return theme;
}

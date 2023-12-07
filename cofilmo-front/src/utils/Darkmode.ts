import { useState, useEffect } from 'react';

export interface Theme {
  isDark: boolean;
}

const prefersDarkMode = (): boolean => {
  // Check if the system prefers dark mode
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMediaQuery.matches;
};

export const useDarkMode = (): [Theme, () => void] => {
  const [isDark, setIsDark] = useState(prefersDarkMode());

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setIsDark(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  return [{ isDark }, () => setIsDark(!isDark)];
};
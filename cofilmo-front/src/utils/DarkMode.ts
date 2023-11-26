import { ref } from 'vue';

export const darkMode = ref(false);

export const initializeDarkMode = () => {
  // Check local storage for saved dark mode preference
  const savedDarkMode = localStorage.getItem('darkMode');
  
  // Set initial dark mode state based on local storage or system preference
  darkMode.value = savedDarkMode !== null ? JSON.parse(savedDarkMode) : prefersDarkMode();
};

export const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle('dark', darkMode.value);
  
  // Save dark mode preference to local storage
  localStorage.setItem('darkMode', JSON.stringify(darkMode.value));
};

const prefersDarkMode = () => {
  // Check if the system prefers dark mode
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  return darkModeMediaQuery.matches;
};
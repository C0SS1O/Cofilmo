import { ref, onMounted } from 'vue';

export const darkMode = ref(false);

export const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle('dark', darkMode.value);
};

onMounted(() => {
  // Check if the system is in dark mode
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  // Automatically apply dark theme if the system is in dark mode
  if (darkModeMediaQuery.matches) {
    toggleDarkMode();
  }

  // Listen for changes in the operating system or system
  darkModeMediaQuery.addEventListener('change', () => {
    toggleDarkMode();
  });
});
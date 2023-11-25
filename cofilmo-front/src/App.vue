<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import { ref, onMounted } from 'vue';

const darkMode = ref(false);

const toggleDarkMode = () => {
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
</script>

<template>
  <main class="items-center justify-center h-screen flex grid-cols-2 bg-emerald-200 font-dosis dark:bg-emerald-900 transition-colors">
    <SideBar @changeDarkMode="toggleDarkMode"/>
  </main>
</template>

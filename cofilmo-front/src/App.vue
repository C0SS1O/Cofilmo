<template>
  <main class="items-center justify-center h-screen flex grid-cols-2 bg-emerald-200 font-dosis dark:bg-emerald-900 transition-colors">
    <SideBar @changeDarkMode="toggleDarkMode"/>
  </main>
</template>

<script setup lang="ts">
import SideBar from "./components/SideBar.vue";
import { toggleDarkMode } from './utils/DarkMode.ts';
</script>
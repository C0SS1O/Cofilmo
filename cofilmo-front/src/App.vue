<template>
  <main class="items-center justify-center h-screen flex grid-cols-2 bg-emerald-200 font-dosis dark:bg-emerald-900 transition-colors">
    <SideBar />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import SideBar from "./components/SideBar.vue";
import { initializeDarkMode } from './utils/DarkMode.ts';

onBeforeMount(() => {
  initializeDarkMode();
});
</script>
<template>
  <main class="h-screen flex bg-emerald-200 font-dosis dark:bg-emerald-900 transition-colors">
    <SideBar :sidebarClosed="sidebarClosed" />
    <router-view class="main-content" />
  </main>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import SideBar from "./components/SideBar.vue";
import { initializeDarkMode } from './utils/DarkMode.ts';

const sidebarClosed = ref(true);

onBeforeMount(() => {
  initializeDarkMode();
});
</script>
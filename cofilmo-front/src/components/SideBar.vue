<template>
  <nav
    class="sidebar fixed top-0 left-0 h-full bg-emerald-300 px-3 py-4 shadow-lg shadow-stone-800 dark:bg-emerald-950 dark:shadow-stone-500 whitespace-nowrap transition-all duration-[350ms]"
    :class="{ 'w-[6.8rem]': sidebarClosed, 'w-[15rem]': !sidebarClosed }">
    <SidebarHeader :closed="sidebarClosed" @toggleSidebar="toggleSidebar" />
    <SidebarMenu :closed="sidebarClosed" />
    <ToggleSwitch :darkMode="darkMode" @toggleDarkMode="toggleDarkMode" />
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { darkMode, toggleDarkMode } from "../utils/DarkMode.ts";
import SidebarHeader from "./SideBarHeader.vue";
import SidebarMenu from "./SideBarMenu.vue";
import ToggleSwitch from "./ToggleSwitch.vue";

const sidebarClosed = ref(true);
const emit = defineEmits(['update:sidebarWidth']);

watch(sidebarClosed, (newVal) => {
  emit('update:sidebarWidth', newVal ? '6.8rem' : '15rem');
});

const toggleSidebar = () => {
  sidebarClosed.value = !sidebarClosed.value;
};
</script>

<style scoped>
/* On close sidebar */
.sidebar.close {
  width: 6.8rem;
}

.sidebar.close .text {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.sidebar .text {
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}
</style>

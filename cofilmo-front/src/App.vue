<template>
  <SideBar class="flex-shrink-0" />
  <router-view
    class="flex-grow p-4 overflow-auto transition-all duration-500 ease-in-out"
    :style="{ marginLeft: sharedState.sidebarWidth }"
  />
</template>

<script setup lang="ts">
import { sharedState } from './utils/SharedState.ts';
import SideBar from "./components/SideBar.vue";
</script>
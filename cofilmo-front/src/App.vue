<script setup lang="ts">
import Card from "./components/Card.vue";
import { ref } from "vue";

type Option = {
  label: string;
};

const options = ref<Option[]>([
  { label: "Create" },
  { label: "Watch" },
  { label: "Random" },
]);
</script>

<template>
  <main
    class="items-center justify-center h-screen flex grid-cols-2 bg-green-950"
  >
    <Card v-for="option in options" :option="option.label" class="m-8" />
  </main>
</template>

<template>
  <div class="card bg-emerald-100 rounded-full shadow-md flex justify-center items-center">
    <h1 class="text-2xl text-green-800 font-semibold">
      {{ option }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps(["option"])
</script>
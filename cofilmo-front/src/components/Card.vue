<template>
  <figure class="group relative max-h-min w-full cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-zinc-800/30">
    <a>
      <div class="relative">
        <img
          class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          :src="card.imageSrc"
          :alt="card.altText"
        />
        <div
          class="absolute inset-x-0 bottom-0 h-[2rem] bg-black opacity-1"
        ></div>
      </div>
    </a>
    <figcaption
      class="absolute inset-0 flex flex-col items-center px-9 text-center transition-all duration-300 justify-end p-0.5"
    >
      <h1 class="font-dosis text-2xl font-semibold text-emerald-200">
        {{ card.title }}
      </h1>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { card } = defineProps(["card"]);
</script>

<style>
figure {
  width: 100%;
}
</style>

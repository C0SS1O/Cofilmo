<template>
  <section class="flex p-1 h-auto w-full items-center justify-center">
    <article class="img-container space-y-0 h-auto w-[calc(100% - 60px)] md:w-full">
      <Card v-for="card in cards" :key="card.id" :card="card" />
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from '../components/Card.vue';

const cards = ref([
  {
    id: 1,
    link: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1584448141569-69f342da535c?q=80&w=441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Imagen 1",
    title: "Spiderman",
  },
  {
    id: 2,
    link: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1584448141569-69f342da535c?q=80&w=441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Imagen 2",
    title: "Spiderman",
  },
  {
    id: 3,
    link: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1584448141569-69f342da535c?q=80&w=441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    altText: "Imagen 3",
    title: "Spiderman",
  }
]);
</script>

<style>
.img-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

@media (min-width: 768px) {
  .img-container {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
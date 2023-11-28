<template>
  <header class="relative">
    <div class="flex items-center py-2">
      <span class="min-w-[3.75rem] flex items-center">
        <img
          src="LogoCofilmo.png"
          alt="logo"
          class="w-14 h-14 rounded-lg"
          loading="lazy"
        />
      </span>

      <section
        class="text-xl font-medium flex flex-col text-emerald-700 dark:text-emerald-50"
      >
        <span class="text font-semibold" :class="{ hidden: props.closed }">Cofilmo</span>
        <span class="text font-medium" :class="{ hidden: props.closed }">Movie Tracker</span>
      </section>
    </div>
    <i
      class="bx bxs-right-arrow cursor-pointer absolute top-[50%] right-[-1.5rem] h-6 w-6 bg-emerald-700 flex items-center justify-center rounded-md text-lg text-emerald-200 translate-y-[-50%]"
      @click="handleClick"
    ></i>
  </header>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  closed: Boolean
});

const emit = defineEmits(["toggleSidebar"]);

const handleClick = () => {
  emit("toggleSidebar");
};
</script>

<style>
.sidebar.close header .bxs-right-arrow {
  transform: translateY(-50%) rotate(180deg);
}

.sidebar header .bxs-right-arrow {
  transform: translateY(-50%);
}
</style>
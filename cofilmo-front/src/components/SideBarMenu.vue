<template>
  <section class="h-[100%-50px] flex flex-col justify-between whitespace-nowrap py-24">
    <div>
        <ul>
          <li
            class="h-10 m-5 list-none shadow-md shadow-emerald-400 bg-emerald-300 dark:bg-emerald-950 dark:shadow-zinc-900"
          >
            <router-link to="/">
              <div
                class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-300 dark:hover:text-emerald-900 dark:text-emerald-50 transition duration-300 font-medium font-dosis"
              >
                <i
                  class="bx bx-home-alt min-w-[2.2rem] text-3xl transition"
                ></i>
                <span
                  class="text ml-8 text-xl"
                  :class="{ hidden: props.closed }"
                  >Home</span
                >
              </div>
            </router-link>
          </li>
          <li
            class="h-10 m-5 list-none shadow-md shadow-emerald-400 bg-emerald-300 dark:bg-emerald-950 dark:shadow-zinc-900"
          >
            <a
              href="#"
              class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-300 dark:hover:text-emerald-900 dark:text-emerald-50 transition duration-300 font-medium font-dosis"
            >
              <i
                class="bx bx-plus-circle min-w-[2.2rem] text-3xl transition"
              ></i>
              <span class="text ml-8 text-xl" :class="{ hidden: props.closed }"
                >Add</span
              >
            </a>
          </li>

          <li
            class="h-10 m-5 list-none shadow-md shadow-emerald-400 bg-emerald-300 dark:bg-emerald-950 dark:shadow-zinc-900"
          >
            <router-link to="/watch">
              <a
                href="#"
                class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-300 dark:hover:text-emerald-900 dark:text-emerald-50 transition duration-300 font-medium font-dosis"
              >
                <i
                  class="bx bx-movie-play min-w-[2.2rem] text-3xl transition"
                ></i>
                <span
                  class="text ml-8 text-xl"
                  :class="{ hidden: props.closed }"
                  >Watch</span
                >
              </a>
            </router-link>
          </li>

          <li
            class="h-10 m-5 list-none shadow-md shadow-emerald-400 bg-emerald-300 dark:bg-emerald-950 dark:shadow-zinc-900"
          >
            <a
              href="#"
              class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-300 dark:hover:text-emerald-900 dark:text-emerald-50 transition duration-300 font-medium font-dosis"
            >
              <i class="bx bx-dice-3 min-w-[2.2rem] text-3xl transition"></i>
              <span class="text ml-8 text-xl" :class="{ hidden: props.closed }"
                >Random</span
              >
            </a>
          </li>
        </ul>
      </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  closed: Boolean
});
</script>
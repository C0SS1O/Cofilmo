<template>
  <nav
    class="sidebar absolute top-0 left-0 h-[100%] w-60 bg-emerald-300 px-3 py-4 shadow-lg shadow-stone-800 dark:bg-emerald-950 dark:shadow-stone-500 whitespace-nowrap transition-all duration-[350ms]"
    :class="{ close: sidebarClosed }"
  >
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
          <span class="text font-semibold" :class="{ hidden: sidebarClosed }">Cofilmo</span>
          <span class="text font-medium" :class="{ hidden: sidebarClosed }">Movie Tracker</span>
        </section>
      </div>
      <i
        class="bx bxs-right-arrow cursor-pointer absolute top-[50%] right-[-1.5rem] h-6 w-6 bg-emerald-700 flex items-center justify-center rounded-md text-lg text-emerald-200 translate-y-[-50%]"
        @click="toggleSidebar"
      ></i>
    </header>

    <section class="h-[100%-50px] flex flex-col justify-between whitespace-nowrap py-24">
      <div>
        <ul>
          <li
            class="h-10 m-5 list-none shadow-md shadow-emerald-400 bg-emerald-300 dark:bg-emerald-950 dark:shadow-zinc-900"
          >
            <a
              href="#"
              class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-300 dark:hover:text-emerald-900 dark:text-emerald-50 transition duration-300 font-medium font-dosis"
            >
              <i class="bx bx-home-alt min-w-[2.2rem] text-3xl transition"></i>
              <span class="text ml-8 text-xl " :class="{ hidden: sidebarClosed }"
                >Home</span
              >
            </a>
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
              <span class="text ml-8 text-xl " :class="{ hidden: sidebarClosed }"
                >Add</span
              >
            </a>
          </li>

          <li
            class="h-10 m-5 list-none shadow-md shadow-emerald-400 bg-emerald-300 dark:bg-emerald-950 dark:shadow-zinc-900"
          >
            <a
              href="#"
              class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-300 dark:hover:text-emerald-900 dark:text-emerald-50 transition duration-300 font-medium font-dosis"
            >
              <i
                class="bx bx-movie-play min-w-[2.2rem] text-3xl transition"
              ></i>
              <span class="text ml-8 text-xl " :class="{ hidden: sidebarClosed }"
                >Watch</span
              >
            </a>
          </li>

          <li
            class="h-10 m-5 list-none shadow-md shadow-emerald-400 bg-emerald-300 dark:bg-emerald-950 dark:shadow-zinc-900"
          >
            <a
              href="#"
              class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-800 hover:bg-emerald-800 hover:text-white dark:hover:bg-emerald-300 dark:hover:text-emerald-900 dark:text-emerald-50 transition duration-300 font-medium font-dosis"
            >
              <i class="bx bx-dice-3 min-w-[2.2rem] text-3xl transition"></i>
              <span class="text ml-8 text-xl " :class="{ hidden: sidebarClosed }"
                >Random</span
              >
            </a>
          </li>
        </ul>
      </div>

      <div class="relative py-14 toggle">
        <div class="flex justify-center items-center p-4 absolute">
          <label class="switch bg-emerald-300">
            <input type="checkbox" id="darkmode" @change="toggleDarkMode" :checked="darkMode.valueOf" />
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </section>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { darkMode, toggleDarkMode } from '../utils/DarkMode.ts';

const sidebarClosed = ref(true);

const toggleSidebar = () => {
  sidebarClosed.value = !sidebarClosed.value;
};
</script>

<style>
/* The switch - the box around the slider */
.switch {
  font-size: 0.7rem;
  position: relative;
  display: inline-block;
  width: 4em;
  height: 1.2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid #000;
  transition: 0.4s;
  border-radius: 1px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.2em;
  border-radius: 2px;
  left: 0.2em;
  bottom: 0.4em;
  background-color: #fff;
  border: 2px solid #000;
  transition: 0.1s;
}

input:checked + .slider {
  background-color: #01402e;
}

input:focus + .slider {
  box-shadow: 0 0 4px #2196f3;
}

input + .slider:before {
  box-shadow: 0 0 6px #000000;
}

input:checked + .slider:before {
  transform: translateX(2em);
}

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

.sidebar.close header .bxs-right-arrow {
  transform: translateY(-50%) rotate(180deg);
}

.sidebar header .bxs-right-arrow {
  transform: translateY(-50%);
}
</style>

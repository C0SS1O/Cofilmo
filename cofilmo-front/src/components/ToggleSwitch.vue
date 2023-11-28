<template>
  <div class="relative py-8 toggle">
    <div class="flex justify-center items-center p-4 absolute">
      <label class="switch bg-emerald-300">
        <input
          type="checkbox"
          @change="toggleDarkMode"
          :checked="darkMode"
        />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, onMounted } from 'vue';
import { darkMode, toggleDarkMode } from '../utils/DarkMode.ts';

const darkModeCheckbox = ref<HTMLInputElement | null>(null);

onMounted(() => {
  watch(darkMode, (newVal) => {
    if (darkModeCheckbox.value) {
      darkModeCheckbox.value.checked = newVal;
    }
  });
});
</script>

<style scoped>
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

</style>
<template>
  <nav class="absolute top-0 left-0 h-[100%] w-60 bg-emerald-200 px-3 py-4">
    <header class="relative">
      <div class="flex items-center">
        <span class="min-w-[3.75rem] flex items-center">
          <img src="LogoCofilmo.png" alt="logo" class="w-14 rounded-lg" />
        </span>

        <section class="text-lg font-medium flex flex-col text-emerald-700">
          <span class="font-semibold">Cofilmo</span>
          <span class="font-medium my-[0.1rem]">Movie Tracker</span>
        </section>
      </div>

      <i
        class="bx bxs-right-arrow absolute top-[50%] right-[-1.5rem] h-6 w-6 bg-emerald-700 flex items-center justify-center rounded-md text-lg text-emerald-200 translate-y-[-50%]"
      ></i>
    </header>

    <section class="h-[100%-50px] flex flex-col justify-between">
      <div class="py-[50%]">
        <ul class="">
          <li class="h-10 m-5 list-none shadow-md bg-emerald-200">
            <a
              href="#"
              class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-700 hover:bg-emerald-800 hover:text-white transition duration-300 font-medium font-dosis"
            >
              <i class="bx bx-home-alt min-w-[3.75rem] text-3xl"></i>
              <span class="ml-2">Landing</span>
            </a>
          </li>
          <li class="h-10 m-5 list-none shadow-md bg-emerald-200">
            <a
              href="#"
              class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-700 hover:bg-emerald-800 hover:text-white transition duration-300 font-medium font-dosis"
            >
              <i class="bx bx-plus-circle min-w-[3.75rem] text-3xl"></i>
              <span class="ml-2">Add</span>
            </a>
          </li>
          <li class="h-10 m-5 list-none shadow-md bg-emerald-200">
            <a
              href="#"
              class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-700 hover:bg-emerald-800 hover:text-white transition duration-300 font-medium font-dosis"
            >
              <i class="bx bx-movie-play min-w-[3.75rem] text-3xl"></i>
              <span class="ml-2">Watch</span>
            </a>
          </li>
          <li class="h-10 m-5 list-none shadow-md bg-emerald-200">
            <a
              href="#"
              class="flex items-center justify-start h-full p-2 rounded-md text-xl text-emerald-700 hover:bg-emerald-800 hover:text-white transition duration-300 font-medium font-dosis"
            >
              <i class="bx bx-dice-3 min-w-[3.75rem] text-3xl"></i>
              <span class="ml-2">Random</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="tran">
        <div class="flex justify-center items-center p-4 absolute">
          <label class="switch bg-emerald-200">
            <input type="checkbox" class="hidden" />
            <span class="slider bg-emerald-400"></span>
          </label>
        </div>
      </div>
    </section>
  </nav>
</template>

<script setup lang="ts"></script>

<style>
/* The switch - the box around the slider */
.switch {
  font-size: .7rem;
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
  background-color: #03513b;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(2em);
}
</style>

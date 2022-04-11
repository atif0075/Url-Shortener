<script setup>
import { ref } from "@vue/reactivity";

let list = ref([
  {
    id: 1,
    title: "Easy",
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'></path></svg>",
    description: "Shorten your links with just a few clicks.",
  },
  {
    id: 2,
    title: "Fast",
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z'></path></svg>",
    description: "Your links will be shortened in seconds.",
  },
  {
    id: 3,
    title: "Simple",
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'></path></svg>",
    description: "No need to worry about the long URL.",
  },
  {
    id: 4,
    title: "Secure",
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z'></path></svg>",
    description: "Your links are safe and secure. No spam.",
  },
  {
    id: 5,
    title: "Free",
    svg: "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path fill='currentColor' d='M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z'></path></svg>",
    description: "No credit card required. Just Signup if you want.",
  },
  {
    id: 5,
    title: "Open Source",
    svg: '<svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path></svg>',
    description: "The code is open source and available on GitHub.",
  },
]);
</script>
<template>
  <main class="py-3">
    <h1
      class="lg:px-44 text-3xl font-extrabold text-amber-500 sm:text-4xl sm:py-6 px-4 py-2"
    >
      Some key features
    </h1>
    <XyzTransitionGroup
      appear-visible
      xyz="fade duration-5 appear-front-3 small-3 appear-small-0 stagger-2 out-stagger-0"
      class="text-up grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:px-44 px-4"
    >
      <main v-for="items in list" :key="items.id">
        <div
          class="relative block p-8 border border-gray-100 shadow-xl rounded-xl"
        >
          <div class="w-16 text-amber-500" v-html="items.svg"></div>
          <div class="mt-4 sm:pr-8">
            <h5 class="mt-4 text-xl font-bold">
              {{ items.title }}
            </h5>
            <p class="mt-2 text-sm sm:block">
              {{ items.description }}
            </p>
          </div>
        </div>
      </main>
    </XyzTransitionGroup>
  </main>
</template>

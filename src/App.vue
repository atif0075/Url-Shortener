<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
</script>

<template>
  <div class="bg-back min-h-screen">
    <Navbar />
    <router-view />
  </div>
</template>

<style lang="postcss">
*::-webkit-scrollbar {
  width: 4px;
}
*::-webkit-scrollbar-thumb {
  @apply bg-amber-500;
}
*::-webkit-scrollbar-track {
  @apply bg-back;
}
</style>

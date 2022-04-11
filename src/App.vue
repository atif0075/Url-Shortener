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

<style></style>

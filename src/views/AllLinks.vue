<template>
  <Model v-if="store.user == null" />
  <main v-else class="py-4">
    <Grid />
  </main>
</template>

<script setup lang="ts">
import Model from "../components/Model.vue";
import Grid from "../components/Grid.vue";
import { useStore } from "../store/Store";
const store = useStore();
</script>

<style></style>

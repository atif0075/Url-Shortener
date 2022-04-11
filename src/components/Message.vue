<template>
  <div class="bottom-2 sm:right-10 right-2">
    <XyzTransition
      xyz="fade up-100% duration-5"
      key="1"
      class="bg-black relative z-[1] inline-block px-6 py-3 rounded font-semibold mb-2 text-red-400"
    >
      <p v-if="value">{{ text }}</p>
    </XyzTransition>
  </div>
</template>

<script setup>

defineProps({
  value: Boolean,
  text: String,
});
</script>

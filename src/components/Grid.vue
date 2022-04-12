<template>
  <XyzTransitionGroup
    xyz="fade stagger"
    class="flex justify-between text-up items-center px-4 sm:px-9 xl:px-44 py-3"
  >
    <h1
      v-if="store.show"
      xyz="inherit left"
      class="font-extrabold text-up text-2xl"
    >
      All Your Links
    </h1>
    <div
      v-if="store.show"
      xyz="inherit right"
      class="w-28 flex justify-between items-center"
    >
      <p>M Atif</p>
      <div>
        <img class="w-8" src="../assets/user.png" alt="" />
      </div>
    </div>
  </XyzTransitionGroup>
  <XyzTransitionGroup
    appear
    mode="in-out"
    xyz="fade  appear-front small appear-small stagger "
    class="grid grid-cols-1 px-4 lg:grid-cols-3 gap-4 sm:grid-cols-2 sm:px-9 xl:px-44"
  >
    <main
      v-for="(item, index) in store.linkList"
      :key="index"
      xyz="fade small out-slide-down appear-stagger"
      class="border flex justify-between items-center w-full p-4 bg-light-back border-[#ffffff1c] text-up rounded"
    >
      <p xyz="out-flip-down">{{ item }}</p>
      <div class="flex w-14 justify-between">
        <a class="cursor-pointer" target="_blank" :href="item">🔗</a>
        <p class="cursor-pointer" @click="deleteTask(index)">🗑️</p>
      </div>
    </main>
  </XyzTransitionGroup>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useStore } from "../store/Store";
const store = useStore();
const deleteTask = (index) => {
  store.linkList.splice(index, 1);
};
onMounted(() => {
  store.show = true;
});
</script>
<style scoped></style>

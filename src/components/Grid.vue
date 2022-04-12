<template>
  <section v-if="store.isReady">
    <XyzTransitionGroup
      xyz="fade"
      class="flex justify-between relative bg-light-back rounded-lg text-up items-center mx-4 sm:mx-9 xl:mx-44 my-3 px-4 py-3 border border-[#ffffff2c]"
    >
      <h1
        v-if="showLit"
        xyz="inherit left"
        class="font-extrabold text-up text-2xl"
      >
        All Your Links
      </h1>
      <button
        v-if="showLit"
        xyz="inherit right"
        class="flex justify-between items-center"
        @click="showInfoBtn"
      >
        <img class="w-8 rounded-full" :src="store.img" alt="" />
      </button>
      <div
        v-if="showInfo"
        class="absolute w-auto h-auto z-50 right-0 top-16 rounded-md px-1 py-1 bg-light-back flex border border-[#ffffff2c] flex-col items-start"
      >
        <h1 class="bg-back w-full py-2 my-0.5 px-2 rounded">
          {{ store.Name }}
        </h1>
        <h1 class="bg-back w-full py-2 my-0.5 px-2 rounded">
          {{ store.Email }}
        </h1>
        <button
          @click="store.signOut"
          v-on:click="showInfoBtn"
          class="w-full px-4 py-2 my-0.5 text-sm rounded text-back font-bold bg-amber-500 text-left"
        >
          Signout
        </button>
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
          <a class="cursor-pointer" target="_blank" :href="item">
            <img
              class="w-6 h-6 inline-block"
              src="../assets/link.svg"
              alt="Link"
            />
          </a>
          <p class="cursor-pointer" @click="deleteTask(index)">
            <img
              class="w-6 h-6 inline-block"
              src="../assets/bin.svg"
              alt="Delete"
            />
          </p>
        </div>
      </main>
    </XyzTransitionGroup>
  </section>
  <button @click="info">Click me</button>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useStore } from "../store/Store";
const store = useStore();
let showLit = ref(false);
let showInfo = ref(false);
let image = ref();
let name = ref();
let mail = ref();
const showInfoBtn = () => {
  showInfo.value = !showInfo.value;
};
const deleteTask = (index) => {
  store.linkList.splice(index, 1);
};
onMounted(() => {
  console.log("Hello");
  showLit.value = true;
  setTimeout(() => {
    image.value = store.img;
    name.value = store.Name;
    mail.value = store.Email;
  }, 1000);
});

const info = () => {
  console.log(image.value);
  console.log(name.value);
  console.log(mail.value);
};
</script>
<style scoped></style>

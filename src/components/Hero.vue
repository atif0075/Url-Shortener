<script setup>
import { ref } from "vue";
import Cards from "./Cards.vue";
import Message from "./Message.vue";
let loading = ref(false);
let link = ref();
let red = ref(false);
let copyVal = ref(false);
let wrongURL = ref(false);
let URL = ref();
let isUrl = ref(false);
const fetchData = async () => {
  if (link.value != null && link.value.match(/^(http|https):\/\//)) {
    try {
      loading.value = true;
      let res = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link.value}`
      );
      let data = await res.json();
      URL.value = data.result.full_short_link;
      isUrl.value = true;
      loading.value = false;
    } catch (error) {
      loading.value = false;
      wrongURL.value = true;
      setTimeout(() => {
        wrongURL.value = false;
      }, 2000);
    }
  } else {
    red.value = true;
  }
  setTimeout(() => {
    red.value = false;
  }, 2000);
  //   else red the link
};

const copy = () => {
  if (link.value != null) {
    navigator.clipboard.writeText(link.value);
    copyVal.value = true;
    setTimeout(() => {
      copyVal.value = false;
    }, 2000);
  }
};

const hide = () => {
  isUrl.value = !isUrl.value;
  link.value = "";
};
</script>

<template>
  <section class="h-auto pb-44">
    <div class="px-4 mx-auto pt-20 lg:items-center lg:flex">
      <div class="max-w-xl mx-auto text-center">
        <h1 class="text-3xl font-extrabold text-amber-500 sm:text-5xl">
          Simple and Fast URL Shortener
        </h1>

        <p class="mt-4 sm:leading-relaxed text-up">
          When faced with long URLs, research has shown that most internet users
          initially believe the link is spam, so it is easy to see why short
          URLs appeal to those who want to drive traffic to their site.
        </p>

        <div class="flex flex-col text-back items-center py-4">
          <input
            :class="{ 'text-red-400 border-red-400': red }"
            class="p-2 bg-up border-2 relative z-10 outline-none md:w-full w-full rounded"
            type="url"
            v-model="link"
          />
        </div>
        <div v-if="loading" class="flex justify-center">
          <img class="w-10" src="../assets/Infinity.svg" alt="" />
        </div>
        <div class="flex justify-center gap-4 mt-4">
          <button @click="fetchData" class="btn-lg">Get Link</button>
          <button class="btn-out" @click="copy">Copy</button>
        </div>
        <div class="mt-5">
          <XyzTransition
            v-if="isUrl"
            xyz="fade stagger"
            class="bg-black inline-block px-6 py-3 rounded font-semibold mb-2 text-up"
          >
            <a xyz="inherit left" @click="hide" :href="URL" target="_blank"
              >{{ URL }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="ml-1.5 w-4 h-4 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
            </a>
          </XyzTransition>
        </div>
      </div>
    </div>
  </section>
  <Message class="absolute" text="Please Enter a valid URL 😕" :value="red" />
  <Message class="absolute" text="Coppied to Clipboard 😍" :value="copyVal" />
  <Message class="absolute" text="This URL is not Allowed" :value="wrongURL" />
  <section class="min-h-screen h-auto bg-light-back"><Cards /></section>
</template>

<style></style>

<template>
  <XyzTransitionGroup
    appear
    duration="auto"
    xyz="fade flip-down origin-bottom stagger-1 delay-5"
  >
    <button
      class="text-base text-indigo-400 trans font-semibold w-1/5 py-3"
      :class="{ active: tab === activeTab }"
      v-for="tab in tabs"
      @click="activeTab = tab"
      :key="tab"
    >
      {{ tab }}
    </button>
  </XyzTransitionGroup>

  <div
    xyz="fade appear-short-100% origin-top ease-in-out duration-7"
    v-xyz="tabDirectionXyz"
  >
    <XyzTransition appear>
      <div class="bg-light-back p-6" :key="activeTab">
        {{ tabDirectionXyz }}
      </div>
    </XyzTransition>
  </div>
</template>

<script setup >
import { ref } from "@vue/reactivity";

let tabs = ["tab1", "tab2", "tab3"];
let activeTab = ref("tab1");

const tabDirectionXyz = () => {
  if (activeTab.value === "tab1") {
    return "Making an animation is as simple as describing it in words. Combine a fade with a scale and drop it from the top";
  } else if (activeTab.value === "tab2") {
    return " Out-of-the-box utilities not enough? Fine-tune any animation with CSS variables to your heart's content";
  } else if (activeTab.value === "tab3") {
    return "Stagger lists of elements in both forward and reverse order, while animating nested items in sync with their parents.";
  }
};
</script>

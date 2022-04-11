<template>
  <nav class="flex items-center justify-between max-w-3xl p-4 mx-auto text-up">
    <a
      class="inline-flex items-center justify-center w-10 h-10 rounded-lg"
      href="/"
    >
      👋
    </a>

    <ul class="flex items-center space-x-2 text-sm font-medium">
      <li>
        <router-link class="px-3 py-2 rounded-lg" to="/"> Home </router-link>
      </li>

      <li>
        <router-link class="px-3 py-2 rounded-lg" to="/your-links">
          Your Links
        </router-link>
      </li>

      <li>
        <a
          class="inline-flex items-center px-3 py-2 rounded-lg"
          href="https://github.com/atif0075"
          target="_blank"
        >
          Github
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="ml-1.5 w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style></style>

<template>
  <div class="wrapper">
    <TheHeader />
    <h1 class="text-2xl font-bold text-center mb-3">
      Find information about movie
    </h1>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import { useStore } from "./store/store";
const store = useStore();
</script>

<style>
.wrapper {
  @apply px-3 pt-3 bg-blue-300 font-sans;
}
::-webkit-scrollbar {
  display: none;
}
/* ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
} */
</style>

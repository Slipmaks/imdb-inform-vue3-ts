<template>
  <div class="wrapper">
    <TheHeader />
    <h1 class="text-2xl font-bold text-center mb-3">
      Find information about movie
    </h1>
    <TheSearch />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheSearch from "./components/TheSearch.vue";
</script>

<style>
.wrapper {
  @apply px-3 pt-3 bg-blue-300 font-sans min-h-screen;
}
::-webkit-scrollbar {
  display: none;
}
</style>

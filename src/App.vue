<template>
  <div class="wrapper">
    <TheHeader />
    <h1 class="text-4xl font-bold text-center my-5">
      Find information about movie and actors
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

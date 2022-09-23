<template>
  <div class="wrapper">
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
</script>

<style scoped>
.wrapper {
  @apply mx-3 mt-3;
}
</style>

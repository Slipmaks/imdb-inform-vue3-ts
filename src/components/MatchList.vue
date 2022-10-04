<template>
  <ul class="match">
    <li v-for="item in data" :key="item">{{ item }}</li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
const data = ref([1, 2, 3, 4]);
</script>
<style scoped>
.match {
  @apply absolute top-11 bg-white w-60 md:w-96 rounded-lg p-2 z-20 border-blue-600 border opacity-95;
}
.match li {
  @apply flex flex-col border rounded-lg my-1 p-2 text-gray-500;
}
</style>

<template>
  <div class="newsSection">
    <div class="relative max-w-xs flex">
      <img :src="imgUrl" alt="img" />
      <h2
        class="font-bold absolute bottom-0 p-1 text-cyan-50 text-opacity-70 hover:text-opacity-100 bg-slate-300 bg-opacity-40 hover:bg-opacity-50 transition-all cursor-pointer"
      >
        {{ head }}
      </h2>
    </div>
    <p>{{ body }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  imgUrl: String,
  body: String,
  head: String,
});
</script>
<style scoped>
.newsSection {
  @apply relative border-2 border-blue-400 p-2 rounded-lg bg-blue-200 mb-2;
}
.newsSection div img {
  @apply rounded-lg items-center;
}
</style>

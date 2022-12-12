<template>
  <div class="newsSection">
    <div class="flex items-center align-middle justify-center">
      <div class="relative max-w-xs">
        <img
          :src="imgUrl"
          alt="img"
          class="max-h-48 cursor-move"
          draggable="false"
        />
        <a
          :href="link"
          target="_blank"
          class="font-bold absolute bottom-0 p-1 text-cyan-50 text-opacity-70 hover:text-opacity-100 bg-slate-300 bg-opacity-40 hover:bg-opacity-50 transition-all cursor-pointer"
        >
          {{ head }}
        </a>
      </div>
    </div>

    <p class="line-clamp-5 cursor-move select-none">{{ body }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  imgUrl: String,
  body: String,
  head: String,
  link: String,
});
</script>
<style scoped>
.newsSection {
  @apply relative border-2 border-blue-400 p-2 rounded-lg bg-blue-200 mb-2 min-h-full;
}
.newsSection div img {
  @apply rounded-lg items-center;
}
</style>

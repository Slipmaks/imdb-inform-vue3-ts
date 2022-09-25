<template>
  <div class="wrapper">
    <TheHeader />
    <h2 class="font-bold text-5xl text-center underline my-2">Film news</h2>
    <TheNewsList
      v-for="item in store.news.items"
      :key="item"
      :imgUrl="item.image.url"
      :body="item.body"
      :head="item.head"
    />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import TheNewsList from "./components/TheNewsList.vue";
import { useStore } from "./store/store";

const store = useStore();
</script>

<style scoped>
.wrapper {
  @apply px-3 pt-3 bg-blue-300;
}
</style>

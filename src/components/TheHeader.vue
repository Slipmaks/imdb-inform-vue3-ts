<template>
  <div id="nav" class="nav">
    <div class="logo flex items-center gap-3">
      <router-link to="/"
        ><img src="../icons/header-icon.svg" alt="logo"
      /></router-link>

      <span><p>Media info</p></span>
    </div>
    <div class="burger space-y-2" @click="switchMenu">
      <div class="w-8 h-0.5 bg-gray-600"></div>
      <div class="w-8 h-0.5 bg-gray-600"></div>
      <div class="w-8 h-0.5 bg-gray-600"></div>
    </div>
  </div>
  <div v-if="openMenu"><p>sometext</p></div>
  <router-link to="any">any</router-link>
  <!-- <div v-if="openMenu">
<span v-for="link in links" :key="link.id">
  <router-link :to="{ path: link.path }">{{ link.title }}</router-link>
</span>
</div> -->
</template>

<script setup lang="ts">
import { ref } from "vue";
let openMenu = ref(false);

const links = [
  {
    id: Math.random.toString(),
    path: "/",
    title: "Home",
  },
  {
    id: Math.random.toString(),
    path: "/any",
    title: "Any",
  },
];

const switchMenu = () => {
  openMenu.value = !openMenu.value;
};
</script>
<style>
.nav {
  @apply flex justify-between p-2 rounded-lg border-2 border-blue-400 bg-blue-200;
}
.logo img {
  @apply h-8;
}
.burger {
  @apply cursor-pointer bg-blue-100 hover:bg-blue-50 px-1 py-2 rounded-lg transition-all;
}
</style>

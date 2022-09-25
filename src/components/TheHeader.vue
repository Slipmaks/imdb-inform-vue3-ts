<template>
  <div id="nav" class="nav">
    <div class="logo flex items-center gap-3">
      <img src="../icons/header-icon.svg" alt="logo" />
      <span><p>Media info</p></span>
    </div>
    <div class="burger space-y-2">
      <div class="w-8 h-0.5 bg-gray-600"></div>
      <div class="w-8 h-0.5 bg-gray-600"></div>
      <div class="w-8 h-0.5 bg-gray-600"></div>
    </div>
  </div>
  <router-link to="/">Home</router-link>
</template>

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

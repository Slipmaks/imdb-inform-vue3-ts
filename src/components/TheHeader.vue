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
  @apply flex justify-between p-2 rounded-md border-2 border-slate-100;
}
.logo img {
  @apply h-8;
}
.burger {
  @apply cursor-pointer bg-slate-50 hover:bg-slate-100 px-1 py-2 rounded-md transition-all;
}
</style>

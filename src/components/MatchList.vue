<template>
  <ul
    class="match"
    v-if="store.openSearchRes"
    id="search-results"
    tabindex="1"
    v-focus
    @blur="onblurSearch"
  >
    <div>
      <p>Actors</p>
      <li
        v-for="item in store.searchRes[1]"
        :key="item"
        @click="store.findActor(item.id)"
      >
        {{ item.head }}
      </li>
    </div>
    <div>
      <p>Titles</p>
      <li
        v-for="item in store.searchRes[0]"
        :key="item"
        @click="store.findFilm(item.id)"
      >
        {{ item.head }}
      </li>
    </div>
  </ul>
</template>

<script setup lang="ts">
import { useStore } from "../store/store";
const store = useStore();

const onblurSearch = () => {
  (store.openSearchRes = false), (store.searchRes = []);
};
</script>
<style scoped>
.match {
  @apply max-h-80 overflow-scroll absolute top-11 bg-slate-100 w-60 md:w-96 rounded-lg p-2 z-20 border-blue-600 border opacity-95 focus:bg-slate-50 focus:outline-none focus:border-slate-400;
}
.match li {
  @apply flex flex-col border rounded-lg my-1 p-2 text-gray-500 cursor-pointer hover:text-gray-600 hover:bg-slate-200;
}
.match ::-webkit-scrollbar {
  width: 10px;
}

.match ::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.match ::-webkit-scrollbar-thumb {
  background: #888;
}

.match ::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>

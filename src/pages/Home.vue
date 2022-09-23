<template>
  <div>
    <h1 class="text-2xl font-bold text-center mb-3">
      Find information about movie
    </h1>
  </div>
  <TheSearch />
</template>

<script setup lang="ts">
import { useStore } from "../store/store";
import { onMounted } from "vue";
import TheSearch from "../components/TheSearch.vue";

const store = useStore();

onMounted((): void => {
  if (localStorage.length) {
    store.setNews(localStorage.getItem("news") as any);
    return;
  }
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "74908b3243msh2d06d3bf0c24ebep108da1jsn4c0212c9701d",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  fetch(
    "https://imdb8.p.rapidapi.com/title/get-news?tconst=tt0944947&limit=5",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const news = JSON.stringify(response);
      localStorage.setItem("news", news);
      store.setNews(news);
    })
    .catch((err) => console.error(err));
});
</script>

<style scoped></style>

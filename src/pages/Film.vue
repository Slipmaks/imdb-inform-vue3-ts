<template>
  <div v-if="!film.title" class="text-center">loading...</div>
  <div v-if="film" class="flex">
    <div v-if="film.title">
      <div class="max-w-xs m-2">
        <h1 class="font-black text-center">{{ film.title.title }}</h1>
        <img :src="film.title.image.url" alt="title" class="rounded-md" />
      </div>
    </div>
    <div>
      <div class="flex items-center">
        <h2>Genres:</h2>
        <p
          v-for="genre in film.genres"
          :key="genre"
          class="bg-cyan-600 px-2 m-2 rounded-md"
        >
          {{ genre }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { options } from "../store/options";
import { useRoute } from "vue-router";
import { Film } from "../interfaces/Film/Film";

const route = useRoute();
const film: Film = reactive({}) as any;
const id = route.params.afterFilm as string;

onMounted(() => {
  fetch(
    `https://imdb8.p.rapidapi.com/title/get-meta-data?ids=${id}&region=US`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      Object.assign(film, response[id]);
      console.log(film);
    })
    .catch((err) => console.error(err));
});
</script>

<template>
  <div v-if="!film.title" class="text-center">loading...</div>
  <div v-if="film.title">
    <h2 class="text-center text-3xl">{{ film.title.title }}</h2>

    <div class="flex">
      <div class="max-w-xs mr-4">
        <img :src="film.title.image.url" alt="title" class="rounded-md" />
      </div>

      <div>
        <h1 class="text-2xl">Information</h1>
        <div class="information">
          <h2>Genres:</h2>
          <p
            v-for="genre in film.genres"
            :key="genre"
            class="bg-blue-200 px-2 mx-1 rounded-md"
          >
            {{ genre }}
          </p>
        </div>
        <div class="information">
          <h2>Metascore:</h2>
          <p :class="colorMetacriticScore">
            {{ film.metacritic?.metaScore }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, computed } from "vue";
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

const colorMetacriticScore = computed(() => {
  return (film.metacritic?.metaScore as number) >= 80
    ? "metactitic-green"
    : "metacritic-red";
});
</script>
<style scoped>
.information {
  @apply flex items-center;
}
.information > h2 {
  @apply mr-2 text-xl;
}
.metactitic-red {
  color: rgb(255, 0, 0);
  text-shadow: 0 0 0.5em rgb(255, 0, 0);
}
.metactitic-green {
  color: rgb(0, 255, 149);
  text-shadow: 0 0 1em rgb(0, 255, 179);
}
</style>

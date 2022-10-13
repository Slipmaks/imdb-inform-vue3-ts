<template>
  <div v-if="film">
    <div v-if="film.title">
      <img :src="film.title.image.url" alt="" />
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
      debugger;
    })
    .catch((err) => console.error(err));
});
</script>

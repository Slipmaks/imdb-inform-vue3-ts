<template>
  <div v-if="actor">
    <img v-if="actor.image" :src="actor.image.url" :alt="actor.name" />
    <h1>Full name: {{ actor.realName }}</h1>
    <p>Name: {{ actor.name }}</p>
    <p>Birth: {{ actor.birthDate }}</p>
    <div v-if="actor.miniBios">
      <h2>Bio</h2>
      <p>{{ actor.miniBios[0].text }}</p>
      <p>Author: {{ actor.miniBios[0].author }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { options } from "../store/options";
import { useRoute } from "vue-router";
import { Actor } from "../interfaces/Actor/Actor";

const route = useRoute();
const actor: Actor = reactive({}) as any;

onMounted(() => {
  const id = route.params.afterActor as string;

  fetch(`https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${id}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Object.assign(actor, response);
    })
    .catch((err) => console.error(err));
});
</script>

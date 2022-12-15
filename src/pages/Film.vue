<template>
  <div v-if="!filmMeta.title" class="text-center">loading...</div>
  <div v-if="filmMeta.title">
    <h2 class="text-center text-3xl">{{ filmMeta.title.title }}</h2>

    <div class="flex">
      <div class="mr-4 max-w-xs">
        <img :src="filmMeta.title.image.url" alt="title" class="rounded-md" />
      </div>

      <div>
        <h1 class="text-2xl">Information</h1>
        <div class="information">
          <h2>Genres:</h2>
          <p
            v-for="genre in filmMeta.genres"
            :key="genre"
            class="bg-blue-200 px-2 mx-1 rounded-md"
          >
            {{ genre }}
          </p>
        </div>
        <div class="information">
          <h2>Metascore:</h2>
          <p :class="colorMetacriticScore">
            {{ filmMeta.metacritic?.metaScore }}
          </p>
        </div>
        <div class="max-w-3xl">
          <h2 class="text-xl">Summary:</h2>
          <p>{{ overviewDetailsData.plotSummary?.text }}</p>

          <p class="italic my-2">
            {{ overviewDetailsData.plotSummary?.author }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, computed, ref, watch } from "vue";
import { options } from "../store/options";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { FilmMeta, OverviewDetails } from "../interfaces/Film/Film";

const route = useRoute();
const filmMeta: FilmMeta = reactive({}) as any;
const overviewDetailsData: OverviewDetails = reactive({}) as any;
const id = ref("");
id.value = route.params.afterFilm as string;
const currentRoute = ref("");
currentRoute.value = useRouter().currentRoute.value.fullPath;

const fetchData = (id: string) => {
  Promise.all([
    fetch(
      `https://imdb8.p.rapidapi.com/title/get-meta-data?ids=${id}&region=US`,
      options
    ),
    fetch(
      `https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${id}&currentCountry=US`,
      options
    ),
  ])
    .then(async ([meta, overview]) => {
      const metaData = await meta.json();
      const overviewDetails = await overview.json();
      return [metaData, overviewDetails];
    })
    .then((response) => {
      const [metaData, overviewDetails] = response;

      Object.assign(filmMeta, metaData[id]);
      Object.assign(overviewDetailsData, overviewDetails);

      console.log(metaData[id], overviewDetailsData);
    })
    .catch((err) => console.error(err));
};

onMounted(() => {
  fetchData(id.value);
});

watch(route, (newPath: any) => {
  filmMeta.title = null;
  fetchData(newPath.params.afterFilm);
});

const colorMetacriticScore = computed(() => {
  return (filmMeta.metacritic?.metaScore as number) >= 80
    ? "metacritic-green"
    : (filmMeta.metacritic?.metaScore as number) >= 40
    ? "metacritic-yellow"
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
.metacritic-red {
  color: rgb(255, 0, 0);
  text-shadow: 0 0 0.5em rgb(255, 0, 0);
}
.metacritic-green {
  color: rgb(0, 255, 149);
  text-shadow: 0 0 1em rgb(0, 255, 179);
}
.metacritic-yellow {
  color: rgb(212, 255, 0);
  text-shadow: 0 0 1em rgb(212, 255, 0);
}
</style>

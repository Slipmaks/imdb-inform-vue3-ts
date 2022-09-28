<template>
  <div></div>
  <h2 class="font-bold text-5xl text-center my-2">Films news</h2>
  <Carousel :settings="settings">
    <Slide class="card__wrapper" v-for="item in store.news.items" :key="item">
      <TheNewsList
        :imgUrl="item.image.url"
        :body="item.body"
        :head="item.head"
        :link="item.link"
      />
    </Slide>
  </Carousel>

  <TheSearch />
</template>

<script setup lang="ts">
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { useStore } from "../store/store";
import { onMounted } from "vue";
import TheSearch from "../components/TheSearch.vue";
import TheNewsList from "../components/TheNewsList.vue";

const store = useStore();

const settings = {
  itemsToShow: 2,
  wrapAround: true,
};

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

<style>
.carousel__viewport {
  z-index: 10;
  overflow: hidden;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: white;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel__track {
  display: flex;
  margin: 0;
  padding: 0;
  position: relative;
}
.carousel__slide {
  scroll-snap-stop: auto;
  flex-shrink: 0;
  margin: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

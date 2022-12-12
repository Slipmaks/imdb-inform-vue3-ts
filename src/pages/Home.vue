<template>
  <div></div>
  <h2 class="font-bold text-5xl text-center my-2">Films news</h2>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide
      class="card__wrapper"
      v-for="item in store.news.items"
      :key="item.id"
    >
      <TheNewsList
        :imgUrl="item.image.url"
        :body="item.body"
        :head="item.head"
        :link="item.link"
      />
    </Slide>
  </Carousel>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import { useStore } from "../store/store";
import { onMounted } from "vue";
import TheNewsList from "../components/TheNewsList.vue";

const store = useStore();

const settings = {
  itemsToShow: 2,
  wrapAround: true,
  autoplay: 5000,
  transition: 600,
};

const breakpoints = {
  300: {
    itemsToShow: 1,
  },
  700: {
    itemsToShow: 2,
  },
  1000: {
    itemsToShow: 4,
  },
};
onMounted(() => store.fetchNews());
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

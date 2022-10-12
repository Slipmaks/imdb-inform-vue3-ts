<template>
  <div>
    <div class="flex justify-center">
      <div class="mb-3 w-60 md:w-80">
        <div
          class="input-group relative flex items-stretch w-full mb-4 rounded justify-center"
        >
          <input
            type="search"
            class="w-40 focus:w-full form-control relative min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition-all ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            v-model="userInput"
            @keyup.enter="searchReq"
          />
          <span
            class="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded"
            id="basic-addon2"
            @click="searchReq"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </span>
          <MatchList />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import MatchList from "./MatchList.vue";
import { ref } from "vue";
import { useStore } from "../store/store";

const userInput = ref("");
const store = useStore();

const searchReq = () => {
  store.fetchSearch(userInput.value);
  userInput.value = "";
};
</script>

import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    count: 0,
    news: {},
  }),
  getters: {
    getCount(): number {
      return this.count;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    setNews(res: string) {
      const obj = JSON.parse(res);
      this.news = Object.assign({}, obj);
      console.log(this.news);
    },
  },
});

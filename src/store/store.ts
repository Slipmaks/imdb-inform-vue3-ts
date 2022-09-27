import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    openMenu: true,
    count: 0,
    news: {
      items: [
        {
          body: "",
          head: "",
          image: {
            url: "",
          },
          link: "",
        },
      ],
    },
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
      const obj: { items: {}[] } = JSON.parse(res);
      this.news = Object.assign({}, obj) as any;
      console.log(this.news);
    },
  },
});

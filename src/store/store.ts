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
    fetchNews() {
      if (localStorage.getItem("news")) {
        this.setNews(localStorage.getItem("news") as any);
        return;
      }
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "74908b3243msh2d06d3bf0c24ebep108da1jsn4c0212c9701d",
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
          this.setNews(news);
        })
        .catch((err) => console.error(err));
    },
  },
});

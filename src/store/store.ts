import { defineStore } from "pinia";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "74908b3243msh2d06d3bf0c24ebep108da1jsn4c0212c9701d",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

export const useStore = defineStore("main", {
  state: () => ({
    searchRes: [],
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
    findInform(req: string) {
      if (req === "name") {
        console.log(req);
      } else if (req === "title") {
        console.log(req);
      } else {
        console.log(req);
      }
    },
    fetchSearch(req: string) {
      fetch(`https://imdb8.p.rapidapi.com/title/find?q=${req}`, options)
        .then((response) => response.json())
        .then((response) => {
          let titles: {}[] = [];
          let names: {}[] = [];
          let results: { id: string }[] = [];

          console.log(response);

          if (response.results) {
            results = response.results;
            results.forEach(
              (e: { id: string; title?: string; name?: string }, _1) => {
                if (e.hasOwnProperty("title")) {
                  // const itemToPush = {
                  //   id: e.id,
                  //   head: e.title,
                  //   type: "title",
                  // };
                  let itemToPush = { id: "test" };
                  titles = [...titles, itemToPush];
                } else if (e.hasOwnProperty("name")) {
                  const itemToPush = {
                    id: e.id,
                    head: e.name,
                    type: "name",
                  };
                  names = [...names, itemToPush];
                } else {
                  console.log(e.id);
                }
              }
            );
          }
          // this.searchRes = parsedData;
          // console.log(this.searchRes);
          console.log("Titles: " + titles + "Names: " + names);
        })
        .catch((err) => console.error(err));
    },
  },
});

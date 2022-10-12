import { defineStore } from "pinia";
import router from "../router";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "74908b3243msh2d06d3bf0c24ebep108da1jsn4c0212c9701d",
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};
interface searchResInterface {
  [idx: number]: { id: string; head: string; type: string };
}
export const useStore = defineStore("main", {
  state: () => ({
    searchRes: <searchResInterface>[],
    openSearchRes: false,
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
    },
    fetchNews() {
      if (localStorage.getItem("news")) {
        this.setNews(localStorage.getItem("news") as any);
        return;
      }

      fetch(
        "https://imdb8.p.rapidapi.com/title/get-news?tconst=tt0944947&limit=10",
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
      if (req.trim() == "") {
        return;
      }
      fetch(`https://imdb8.p.rapidapi.com/title/find?q=${req}`, options)
        .then((response) => response.json())
        .then((response) => {
          let titles: {}[] = [];
          let names: {}[] = [];
          let results: { id: string }[] = [];

          if (response.results) {
            results = response.results;
            results.forEach(
              (e: { id: string; title?: string; name?: string }, _1) => {
                if (e.hasOwnProperty("title")) {
                  let type = e.id?.split("/")[1];
                  let id = e.id?.split("/")[2];
                  const itemToPush = {
                    id: id,
                    head: e.title,
                    type: type,
                  };
                  titles = [...titles, itemToPush];
                } else if (e.hasOwnProperty("name")) {
                  let type = e.id?.split("/")[1];
                  let id = e.id?.split("/")[2];
                  const itemToPush = {
                    id: id,
                    head: e.name,
                    type: type,
                  };
                  names = [...names, itemToPush];
                } else {
                  console.log(e.id);
                }
              }
            );
          }
          this.searchRes.push(titles);
          this.searchRes.push(names);

          this.openSearchRes = true;
        })
        .catch((err) => console.error(err));
    },
    findActor(id: string) {
      fetch(`https://imdb8.p.rapidapi.com/actors/get-bio?nconst=${id}`, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
        })
        .catch((err) => console.error(err));
    },
    findFilm(id: string) {
      console.log("Film info", id);
      router.push(`/film/${id}`);
    },
  },
});

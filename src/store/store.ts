import { defineStore } from "pinia";
import router from "../router";
import { options } from "./options";
import { SearchResults } from "../interfaces/SearchResults";

interface News {
  items: NewsItems[];
}
interface NewsItems {
  body: string;
  head: string;
  image: { url: string };
  link: string;
}
interface Store {
  searchRes: SearchResults[];
  openSearchRes: boolean;
  openMenu: boolean;
  news: News;
}

export const useStore = defineStore("main", {
  state: (): Store => ({
    searchRes: [],
    openSearchRes: false,
    openMenu: true,
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
  actions: {
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
      router.push({ path: `/actor/${id}` });
    },
    findFilm(id: string) {
      console.log("Film info", id);
      router.push({ path: `/film/${id}` });
    },
  },
});

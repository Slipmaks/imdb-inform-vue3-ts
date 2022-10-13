import { createRouter, createWebHistory } from "vue-router";
import { useStore } from "./store/store";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import Actor from "./pages/Actor.vue";
import Film from "./pages/Film.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/actor/:afterActor(.*)", component: Actor },
  { path: "/film/:afterFilm(.*)", component: Film },

  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(() => {
  const store = useStore();
  store.openMenu = false;
});
export default router;

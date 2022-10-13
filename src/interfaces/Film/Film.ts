import { Title } from "./Title";

import { Genres } from "./Genres";
import { Metacritic } from "./Metacritic";

export interface Film {
  title: Title;
  genres: Genres;
  metacritic?: Metacritic;
}

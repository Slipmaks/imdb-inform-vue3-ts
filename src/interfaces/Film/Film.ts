import { Title } from "./Title";

import { Genres } from "./Genres";
import { Metacritic } from "./Metacritic";

import { PlotSummary } from "./PlotSummary";

export interface FilmMeta {
  title: Title;
  genres: Genres;
  metacritic?: Metacritic;
}
export interface OverviewDetails {
  plotSummary: PlotSummary;
}

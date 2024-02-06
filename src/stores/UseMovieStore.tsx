import { create } from "zustand";
import { MovieDetail, TVSeriesDetail } from "../components/MoviesDisplay/type";

type useMovieStoreType = {
  trendMovie: MovieDetail[];
  popularMovie: MovieDetail[];

  trendTVSeries: TVSeriesDetail[];
  popularTVSeries: TVSeriesDetail[];

  currentMedia: MovieDetail[] | TVSeriesDetail[];
  setCurrentMedia: (newCurrentMedia: MovieDetail[] | TVSeriesDetail[]) => void;
  filterMedia: (MovieDetail | TVSeriesDetail)[];
  setFilterMedia: (newFilterMedia: MovieDetail[] | TVSeriesDetail[]) => void;

  setTrendMovie: (newTrendMovie: MovieDetail[]) => void;
  addTrendMovie: (newTrendMovie: MovieDetail) => void;

  setPopularMovie: (newTrendMovie: MovieDetail[]) => void;
  addPopularMovie: (newTrendMovie: MovieDetail) => void;

  setTrendTVSeries: (newTrendTVSeries: TVSeriesDetail[]) => void;
  addTrendTVSeries: (newTrendTVSeries: TVSeriesDetail) => void;

  setPopularTVSeries: (newPopularTVSeries: TVSeriesDetail[]) => void;
  addPopularTVSeries: (newPopularTVSeries: TVSeriesDetail) => void;
};

export const UseMovieStore = create<useMovieStoreType>((set) => ({
  trendMovie: [],
  popularMovie: [],

  trendTVSeries: [],
  popularTVSeries: [],

  currentMedia: [],
  filterMedia: [],

  setFilterMedia: (newFilterMedia: (MovieDetail | TVSeriesDetail)[]) => {
    set({ filterMedia: newFilterMedia });
  },

  setCurrentMedia: (newCurrentMedia: MovieDetail[] | TVSeriesDetail[]) => {
    set({ currentMedia: newCurrentMedia });
  },

  setTrendMovie: (newTrendMovie: MovieDetail[]) => {
    set({ trendMovie: newTrendMovie });
  },

  addTrendMovie: (newTrendMovie: MovieDetail) => {
    set((state) => ({
      trendMovie: [...state.trendMovie, newTrendMovie],
    }));
  },

  setPopularMovie: (newPopularMovie: MovieDetail[]) => {
    set({ trendMovie: newPopularMovie });
  },

  addPopularMovie: (newPopularMovie: MovieDetail) => {
    set((state) => ({
      trendMovie: [...state.trendMovie, newPopularMovie],
    }));
  },

  setTrendTVSeries: (newTrendTVSeries: TVSeriesDetail[]) => {
    set({ trendTVSeries: newTrendTVSeries });
  },

  addTrendTVSeries: (newTrendTVSeries: TVSeriesDetail) => {
    set((state) => ({
      trendTVSeries: [...state.trendTVSeries, newTrendTVSeries],
    }));
  },

  setPopularTVSeries: (newPopularTVSeries: TVSeriesDetail[]) => {
    set({ popularTVSeries: newPopularTVSeries });
  },

  addPopularTVSeries: (newPopularTVSeries: TVSeriesDetail) => {
    set((state) => ({
      popularTVSeries: [...state.popularTVSeries, newPopularTVSeries],
    }));
  },
}));

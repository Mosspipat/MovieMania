import { create } from "zustand";
import { MovieDetail, TVSeriesDetail } from "../components/MoviesDisplay/type";

type useMovieStoreType = {
  trendMovie: MovieDetail[];
  popularMovie: MovieDetail[];

  trendTVSeries: TVSeriesDetail[];
  popularTVSeries: TVSeriesDetail[];
};

export const useMovieStore = create<useMovieStoreType>((set) => ({
  trendMovie: [],
  popularMovie: [],

  trendTVSeries: [],
  popularTVSeries: [],

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

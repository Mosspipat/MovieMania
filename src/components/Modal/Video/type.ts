/* eslint-disable @typescript-eslint/no-explicit-any */
export interface VideoMovie {
  id: number;
  results: ResultVideoMovie[];
}

export interface ResultVideoMovie {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface VideoTVSeries {
  id: number;
  results: any[];
}

import { Flex } from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { getPopularMovieList } from "../../services";
import { PATH_ORIGIN_IMAGE_WIDTH_500 } from "../../constants";
import { Card } from "..";
import { MovieList } from "./type";

export const MoviesDisplay = () => {
  const [movieList, setMovieList] = useState<MovieList[]>([]);

  const getMovieList = async () => {
    const data = await getPopularMovieList({ page: 1, language: "en-US" });
    const allMovieList = data.results;
    setMovieList(allMovieList);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  useEffect(() => {
    console.log(movieList);
  }, [movieList]);

  return (
    <Flex
      gap={16}
      flexWrap={"wrap"}
      justifyContent="center"
      padding="120px 64px"
    >
      {movieList &&
        movieList.map((movie) => (
          <Card
            title={movie.original_title}
            overview={movie.overview}
            imagePath={`${PATH_ORIGIN_IMAGE_WIDTH_500}/${movie.poster_path}`}
            genreIDS={movie.genre_ids}
            voteAverage={movie.vote_average}
          />
        ))}
    </Flex>
  );
};

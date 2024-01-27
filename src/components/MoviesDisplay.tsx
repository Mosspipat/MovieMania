import { Box, Flex, Image, VStack } from "@chakra-ui/react";
import { Tag } from ".";
import { useEffect, useState } from "react";
import { getPopularMovieList } from "../services";
import { PATH_ORIGIN_IMAGE } from "../constants";
import Card from "./Card/Card";

export const MoviesDisplay = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovieList = async () => {
    const data = await getPopularMovieList({ page: 1, language: "en-US" });
    console.log("🚀: ~ data:", data);
    const allMovieList = data.results;
    setMovieList(allMovieList);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <Flex gap={2} flexWrap={"wrap"} justifyContent="center" padding={6}>
      {movieList &&
        movieList.map((movie) => (
          <Card
            title={movie.original_title}
            overview={movie.overview}
            imagePath={`${PATH_ORIGIN_IMAGE}/${movie.backdrop_path}`}
            genreIDS={movie.genre_ids}
            voteAverage={movie.vote_average}
          />
        ))}
    </Flex>
  );
};

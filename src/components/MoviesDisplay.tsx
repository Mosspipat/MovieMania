import { Box } from "@chakra-ui/react";
import { Tag } from ".";
import { useEffect, useState } from "react";
import { getAllMovieList } from "../services";

export const MoviesDisplay = () => {
  const [movieList, setMovieList] = useState();

  const getMovieList = async () => {
    const data = await getAllMovieList();
    setMovieList(data);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  useEffect(() => {
    console.log(movieList);
  }, movieList);

  return (
    <Box>
      <Tag label="test" />
    </Box>
  );
};

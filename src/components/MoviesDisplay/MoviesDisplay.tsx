import { useEffect, useState } from "react";
import { GetTrendingMovie, GetTrendingTVList } from "../../services";
import { PATH_ORIGIN_IMAGE_WIDTH_500 } from "../../constants";
import { Card, Modal } from "..";
import { MovieDetail, TVSeriesDetail } from "./type";
import { UseMovieStore } from "../../stores/UseMovieStore";
import { Flex } from "@chakra-ui/react";

export const MoviesDisplay = () => {
  const [tempMovieDetail, setTempMovieDetail] = useState<
    MovieDetail | TVSeriesDetail
  >({} as MovieDetail | TVSeriesDetail);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const {
    setTrendMovie,
    trendMovie,
    setTrendTVSeries,
    filterMedia,
    setFilterMedia,
    setCurrentMedia,
  } = UseMovieStore();

  const getMovieList = async () => {
    const data = await GetTrendingMovie();
    const allMovieList = data.results;
    setTrendMovie(allMovieList);
  };

  const getTVSeriesList = async () => {
    const data = await GetTrendingTVList();
    const allTVSeriesList = data.results;
    setTrendTVSeries(allTVSeriesList);
  };

  useEffect(() => {
    getMovieList();
    getTVSeriesList();
  }, []);

  useEffect(() => {
    setCurrentMedia(trendMovie);
    setFilterMedia(trendMovie);
  }, [trendMovie]);

  const handleTempMovieDetail = (movieID: number) => {
    setIsOpenModal(true);
    setTempMovieDetail(filterMedia[movieID]);
  };

  const mediaName = (movie: MovieDetail | TVSeriesDetail) => {
    if ("original_title" in movie) {
      return movie.title;
    } else if ("original_name" in movie) {
      return movie.original_name;
    }
  };

  return (
    <Flex
      minW="100vw"
      minH="100vh"
      gap={16}
      flexWrap={"wrap"}
      justifyContent="center"
      padding="120px 64px"
    >
      {filterMedia &&
        filterMedia.map((movie, movieID) => (
          <Card
            key={movieID}
            title={mediaName(movie)}
            overview={movie.overview}
            imagePath={`${PATH_ORIGIN_IMAGE_WIDTH_500}/${movie.poster_path}`}
            genreIDS={movie.genre_ids}
            voteAverage={movie.vote_average}
            id={movieID}
            onClick={handleTempMovieDetail}
          />
        ))}
      <Modal
        visible={isOpenModal}
        detail={tempMovieDetail}
        onClose={() => setIsOpenModal(false)}
      />
    </Flex>
  );
};

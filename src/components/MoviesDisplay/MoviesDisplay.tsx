import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GetTrendingMovie, GetTrendingTVList } from "../../services";
import { PATH_ORIGIN_IMAGE_WIDTH_500 } from "../../constants";
import { Card, Modal } from "..";
import { MovieDetail, TVSeriesDetail } from "./type";
import { UseMovieStore } from "../../stores/UseMovieStore";

export const MoviesDisplay = () => {
  const [tempMovieDetail, setTempMovieDetail] = useState<
    MovieDetail | TVSeriesDetail
  >({} as MovieDetail | TVSeriesDetail);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const {
    setTrendMovie,
    trendMovie,
    setTrendTVSeries,
    currentMedia,
    setCurrentMedia,
  } = UseMovieStore();

  const getMovieList = async () => {
    const data = await GetTrendingMovie();
    const allMovieList = data.results;
    console.log("🚀: ~ allMovieList:", allMovieList);
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
    console.log(trendMovie);
    setCurrentMedia(trendMovie);
    // console.log(currentMedia);
  }, [trendMovie]);

  const handleTempMovieDetail = (movieID: number) => {
    setIsOpenModal(true);
    setTempMovieDetail(currentMedia[movieID]);
  };

  const mediaName = (movie: MovieDetail | TVSeriesDetail) => {
    if ("original_title" in movie) {
      return movie.original_title;
    } else if ("original_name" in movie) {
      return movie.original_name;
    }
  };

  return (
    <Flex
      gap={16}
      flexWrap={"wrap"}
      justifyContent="center"
      padding="120px 64px"
    >
      {currentMedia &&
        currentMedia.map((movie, movieID) => (
          <Card
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

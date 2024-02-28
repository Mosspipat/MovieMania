import { useEffect, useState } from "react";
import {
  GetSearchMovieDetailInformation,
  GetSearchTVSeriesDetailInformation,
  GetVideoMovie,
  GetVideoTVSeries,
} from "../../../services";
import { AspectRatio, Flex, Spinner } from "@chakra-ui/react";
import { MovieDetail, TVSeriesDetail } from "../../MoviesDisplay/type";
import { isEmpty } from "lodash";
import { VideoMovie, VideoTVSeries } from "./type";

type VideoProps = {
  detail?: MovieDetail | TVSeriesDetail | undefined;
};

export const Video = (props: VideoProps) => {
  const { detail } = props;

  const [allKeyVideo, setAllKeyVideo] = useState([]);

  const mediaSearchInformationByName = async (
    movie?: MovieDetail | TVSeriesDetail,
  ): Promise<MovieDetail | TVSeriesDetail> => {
    if (!isEmpty(movie)) {
      if ("original_title" in movie) {
        return await GetSearchMovieDetailInformation(
          movie.original_title,
          movie.release_date,
        );
      } else if ("original_name" in movie) {
        return await GetSearchTVSeriesDetailInformation(
          movie.original_name,
          movie.release_date,
        );
      }
    }
    // You might want to handle the case when the movie is empty or the conditions are not met.
    throw new Error("Invalid movie detail provided.");
  };

  const mediaGetVideo = async (idMedia: number) => {
    if ("original_title" in detail) {
      return await GetVideoMovie(idMedia);
    } else if ("original_name" in detail) {
      return await GetVideoTVSeries(idMedia);
    }
    return null;
  };

  const setKeyMedia = (allVideoInfo: VideoMovie | VideoTVSeries) => {
    allVideoInfo.results.map((teaserType) => {
      setAllKeyVideo((allKeyVideo) => [...allKeyVideo, teaserType.key]);
    });
  };

  const linkYoutube = () => {
    if ("original_title" in detail) {
      return `https://www.youtube.com/embed/${allKeyVideo[0]}`;
    } else if ("original_name" in detail) {
      return `https://www.youtube.com/embed/${allKeyVideo[0]}`;
    }
  };

  useEffect(() => {
    (async () => {
      const data = await mediaSearchInformationByName(detail);
      const idMedia = data.results[0].id;

      const videosInfo = await mediaGetVideo(idMedia);
      setKeyMedia(videosInfo);
    })();
  }, []);

  return (
    <>
      {allKeyVideo && allKeyVideo.length > 0 ? (
        <AspectRatio width="full">
          <iframe title="movie" src={linkYoutube()} allowFullScreen />
        </AspectRatio>
      ) : (
        <Flex justifyContent="center" alignItems="center">
          <Spinner></Spinner>
        </Flex>
      )}
    </>
  );
};

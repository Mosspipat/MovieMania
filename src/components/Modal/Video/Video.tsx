import { useEffect, useState } from "react";
import {
  GetSearchMovieDetailInformation,
  GetVideoMovie,
} from "../../../services";
import { AspectRatio, Flex, Spinner } from "@chakra-ui/react";
import { MovieDetail, TVSeriesDetail } from "../../MoviesDisplay/type";

type VideoProps = {
  detail: MovieDetail | TVSeriesDetail | undefined;
};

export const Video = (props: VideoProps) => {
  const { detail } = props;
  console.log("🚀: ~ detail:", detail);

  const [allKeyVideo, setAllKeyVideo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await GetSearchMovieDetailInformation(
        detail?.title,
        detail?.release_date,
      );
      const idMedia = data.results[0].id;
      const newData = await GetVideoMovie(idMedia);
      // console.log("🚀: ~ newData:", newData.results);

      newData.results.map((teaserType) => {
        setAllKeyVideo((allKeyVideo) => [...allKeyVideo, teaserType.key]);
      });
    })();
  }, []);

  return (
    <>
      {allKeyVideo && allKeyVideo.length > 0 ? (
        <AspectRatio width="full" ratio={1}>
          <iframe
            title="naruto"
            src={`https://www.youtube.com/embed/${allKeyVideo[0]}`}
            allowFullScreen
          />
        </AspectRatio>
      ) : (
        <Flex justifyContent="center" alignItems="center">
          <Spinner></Spinner>
        </Flex>
      )}
    </>
  );
};

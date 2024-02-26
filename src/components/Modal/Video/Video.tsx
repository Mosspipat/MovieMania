import { useEffect, useState } from "react";
import {
  GetSearchMovieDetailInformation,
  GetVideoMovie,
} from "../../../services";
import { AspectRatio, Flex, Spinner } from "@chakra-ui/react";

type VideoProps = { name: string };

export const Video = (props: VideoProps) => {
  const { name } = props;

  const [allKeyVideo, setAllKeyVideo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await GetSearchMovieDetailInformation(name);
      const idMedia = data.results[0].id;
      const newData = await GetVideoMovie(idMedia);
      // console.log("🚀: ~ newData:", newData.results);

      newData.results.map((teaserType) => {
        console.log("🚀: ~ teaserType:", teaserType.key);
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

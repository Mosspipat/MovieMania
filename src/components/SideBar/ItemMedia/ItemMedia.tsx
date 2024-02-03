import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { COLORS, PATH_ORIGIN_IMAGE_WIDTH_500 } from "../../../constants";
import { MovieList, TVList } from "../../MoviesDisplay/type";
import { useEffect, useState } from "react";

type ItemMediaProps = {
  label: string;
  MediaList: MovieList[] | TVList[];
};

export function ItemMedia(props: ItemMediaProps) {
  const { label, MediaList } = props;
  const [posters, setPoster] = useState<string[]>([]);

  const mediaPoster = (MediaList: MovieList[] | TVList[]) => {
    if (posters.length <= 0) {
      if ("original_title" in MediaList[0]) {
        for (let i = 0; i < 3; i++) {
          setPoster((prevPosters) => [
            ...prevPosters,
            MediaList[i].poster_path,
          ]);
        }
      } else if ("original_name" in MediaList[0]) {
        for (let i = 0; i < 3; i++) {
          setPoster((prevPosters) => [
            ...prevPosters,
            MediaList[i].poster_path,
          ]);
        }
      }
    }
    return posters;
  };

  useEffect(() => {
    mediaPoster(MediaList);
  }, []);

  return (
    <VStack position="relative" width="full" maxH="120px">
      <Text
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="2px"
        backgroundColor={`${COLORS.Primary_Navy_Blue}`}
        borderRadius="64px"
        color="white"
        padding="4px 8px"
        border={`6px solid black`}
        zIndex={4}
        textShadow="0 0 5px rgba(0, 0, 0, 0.5)"
      >
        {label}
      </Text>

      <Box
        position="relative"
        backgroundColor="red"
        width="120px"
        height="200px"
      >
        {posters &&
          posters.map((poster, index) => {
            return (
              <Image
                src={`${PATH_ORIGIN_IMAGE_WIDTH_500}/${poster}`}
                borderRadius="4px"
                border={`2px solid ${COLORS.Primary_Navy_Blue}`}
                boxShadow={`6px 4px 2px rgba(0,0,0,0.2)`}
                position="absolute"
                top={0}
                left={4 * index}
                zIndex={-1 * index}
                transform={`rotate(${8 * (index + 1)}deg) `}
              />
            );
          })}
      </Box>
    </VStack>
  );
}

import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { COLORS, PATH_ORIGIN_IMAGE_WIDTH_500 } from "../../../constants";
import { MovieDetail, TVSeriesDetail } from "../../MoviesDisplay/type";
import { useEffect, useState } from "react";

type ItemMediaProps = {
  label: string;
  MediaList: MovieDetail[] | TVSeriesDetail[];
  onClick?: (typeMedia: MovieDetail[] | TVSeriesDetail[]) => void;
};

export function ItemMedia(props: ItemMediaProps) {
  const { label, MediaList, onClick } = props;
  const [posters, setPoster] = useState<string[]>([]);

  useEffect(() => {
    mediaPoster(MediaList);
  }, []);

  const mediaPoster = (MediaList: MovieDetail[] | TVSeriesDetail[]) => {
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

  return (
    <VStack
      position="relative"
      onClick={() => (onClick ? onClick(MediaList) : () => {})}
      cursor="pointer"
      transition={`0.3s ease-out`}
      _hover={{ transform: "scale(1.1)" }}
    >
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
      <Box position="relative" width="full" height="260px">
        {posters &&
          posters.map((poster, index) => {
            return (
              <Image
                key={index}
                src={`${PATH_ORIGIN_IMAGE_WIDTH_500}/${poster}`}
                position="absolute"
                top="32px"
                left={4 * index}
                border={`2px solid ${COLORS.Primary_Navy_Blue}`}
                borderRadius="4px"
                boxShadow={`6px 4px 2px rgba(0,0,0,0.2)`}
                transform={`rotate(${8 * (index + 1)}deg) `}
                zIndex={-1 * index}
              />
            );
          })}
      </Box>
    </VStack>
  );
}

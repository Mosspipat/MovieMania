import { Flex, HStack, Image, Text, VStack, keyframes } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Tag } from "..";
import { GetGenreIDS } from "../../services";
import { COLORS } from "../../constants";
import { StyledCard } from "./style";
import { StarIcon } from "@chakra-ui/icons";

export type CardProps = {
  title?: string;
  overview?: string;
  imagePath?: string;
  genreIDS?: number[];
  voteAverage?: number;
  id: number;
  onClick: (id: number) => void;
};

export const Card = (props: CardProps) => {
  const { title, overview, imagePath, genreIDS, voteAverage, id, onClick } =
    props;

  const [allGenreList, setAllGenreList] = useState([]);

  const defaultScale = 1;

  const covertGenreIDToGenre = (genre_ids: number) => {
    const GenreObj = allGenreList?.genres?.find(
      (genre) => genre.id === genre_ids,
    );

    const labelGenre = GenreObj?.name;

    return labelGenre;
  };

  const renderTag = (genre_ids?: number[]) => {
    return (
      genre_ids && (
        <Flex justifyContent="start" gap={2} flexWrap="wrap" width="100%">
          {genre_ids.map((genreID, index) => (
            <Tag key={index} label={covertGenreIDToGenre(genreID)} />
          ))}
        </Flex>
      )
    );
  };

  useEffect(() => {
    (async () => {
      const ALLGetGenre = await GetGenreIDS();
      setAllGenreList(ALLGetGenre);
    })();
  }, []);

  const scaleAnimation = keyframes`
  0%{
    transform: scale(0.6);
    opacity: 0;
  }
  50%{
    transform: scale(1.1);
    opacity: 0.5;
  }
  100%{
    transform: scale(${defaultScale}); 
    opacity: 1;
  }
`;

  return (
    <StyledCard>
      <VStack
        className="container"
        backgroundColor={COLORS.Primary_Navy_Blue}
        borderRadius="0px 0px 24px 24px"
        maxW="360px"
        padding="0em 0em 1em"
        boxShadow="dark-lg"
        transform={`scale(${defaultScale})`}
        transition={"all 0.6s ease"}
        animation={`${scaleAnimation} 0.6s ease-out`}
        _hover={{
          transform: "scale(1.1)",
          backgroundColor: "red",
        }}
        onClick={() => {
          onClick(id);
        }}
      >
        <Image src={imagePath} />
        <VStack alignItems="center" width="full" padding="1em 1em">
          <HStack width="full" justifyContent="space-between">
            <Text color="white" fontWeight="bold">
              {title}
            </Text>
            <HStack alignItems="center" justifyContent="center" gap="4px">
              <Text
                color="gold"
                backgroundColor={COLORS.Secondary_Indigo}
                padding="0em 0.4em"
                borderRadius={6}
              >
                ({voteAverage})
              </Text>
              <StarIcon boxSize="14px" color="yellow" />
            </HStack>
          </HStack>
          {renderTag(genreIDS)}
          <Text className="overview">{overview}</Text>
        </VStack>
      </VStack>
    </StyledCard>
  );
};

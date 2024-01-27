/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React, { CSSProperties, useEffect, useState } from "react";
import { Tag } from "..";
import { GetGenreIDS } from "../../services";
import { COLORS } from "../../constants";
import { StyledCard } from "./style";
import { StarIcon } from "@chakra-ui/icons";

type CardProps = {
  title?: string;
  overview?: string;
  imagePath?: string;
  genreIDS?: number[];
  voteAverage?: number;
};

const Card = (props: CardProps) => {
  const { title, overview, imagePath, genreIDS, voteAverage } = props;

  const [allGenreList, setAllGenreList] = useState([]);

  const covertGenreIDToGenre = (genre_ids: number) => {
    const GenreObj = allGenreList?.genres?.find(
      (genre) => genre.id === genre_ids
    );

    const labelGenre = GenreObj?.name;

    return labelGenre;
  };

  const renderTag = (genre_ids?: number[]) => {
    return (
      genre_ids && (
        <Flex justifyContent="start" gap={2} flexWrap="wrap" width="100%">
          {genre_ids.map((genreID) => (
            <Tag label={covertGenreIDToGenre(genreID)} />
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

  return (
    <StyledCard>
      <VStack
        className="container"
        backgroundColor={COLORS.Primary_Navy_Blue}
        borderRadius="0px 0px 24px 24px"
        maxW="360px"
        padding="0em 0em 1em"
      >
        <Image src={imagePath} />
        <VStack alignItems="center" width="full" padding="0em 1em">
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

export default Card;

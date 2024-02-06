import {
  Button,
  HStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { COLORS } from "../../constants";
import { ItemMedia } from "./ItemMedia";
import { GetTrendingMovie, GetTrendingTVList } from "../../services";
import { MovieDetail, TVSeriesDetail } from "../MoviesDisplay/type";
import { UseMovieStore } from "../../stores/UseMovieStore";

export function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRoute = useRef<HTMLButtonElement>(null);

  const [movieList, setMovieList] = useState<MovieDetail[]>([]);
  const [TVSeriesList, setTVSeriesList] = useState<TVSeriesDetail[]>([]);

  const { setCurrentMedia, setFilterMedia } = UseMovieStore();

  useEffect(() => {
    (async () => {
      const data = await GetTrendingMovie();
      const allMovie = data.results;
      setMovieList(allMovie);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await GetTrendingTVList();
      const allTVSeries = data.results;
      setTVSeriesList(allTVSeries);
    })();
  }, []);

  const handleSelectMedia = (typeMedia: MovieDetail[] | TVSeriesDetail[]) => {
    setCurrentMedia(typeMedia);
    setFilterMedia(typeMedia);
  };

  return (
    <Box position="absolute" left={2} top={0} transform={`translate(0%,25%)`}>
      <Button
        ref={buttonRoute}
        colorScheme=""
        onClick={onOpen}
        gap={2}
        alignItems="center"
        borderRadius="20px 20px 20px 20px"
        transition={`0.3s ease-out`}
        borderColor="transparent"
        _hover={{ transform: `scale(1.2)`, borderColor: "transparent" }}
      >
        <HStack>
          <MdLocalMovies size={24} />
          <Box>|</Box>
          <PiTelevisionSimpleFill size={24} />
        </HStack>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={buttonRoute}
      >
        <DrawerOverlay />
        <DrawerContent
          backgroundColor={`rgba(255, 255, 255, 1)`}
          borderRadius="0px 0px 200px 0px"
          boxShadow="2xl"
        >
          <DrawerCloseButton color="white" />
          <DrawerHeader
            color="white"
            textAlign="center"
            fontWeight="bold"
            letterSpacing="2px"
            backgroundColor={COLORS.Primary_Navy_Blue}
          >
            TV or Movie
          </DrawerHeader>

          <DrawerBody
            display="flex"
            flexDir="column"
            alignItems="center"
            padding="4rem 0rem"
          >
            <ItemMedia
              label="Movies"
              MediaList={movieList}
              onClick={handleSelectMedia}
            />
            <ItemMedia
              label="TV/Series"
              MediaList={TVSeriesList}
              onClick={handleSelectMedia}
            />
            {/* <ItemMedia label="Favorite" />  */}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

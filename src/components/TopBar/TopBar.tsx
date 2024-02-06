import { HStack, Text } from "@chakra-ui/react";
import { COLORS } from "../../constants";
import { RiMovie2Fill } from "react-icons/ri";
import { InputSearch } from "./InputSearch";
import { SideBar } from "../SideBar";
import { UseMovieStore } from "../../stores/UseMovieStore";
import { MovieDetail, TVSeriesDetail } from "../MoviesDisplay/type";

export const TopBar = () => {
  const borderWidth: string = "4px";

  const { currentMedia, setFilterMedia } = UseMovieStore();

  const filterMediaName = (name: string) => {
    const allFilterName = currentMedia.filter((media) => {
      if ("original_title" in media) {
        return media.original_title.includes(name);
      } else if ("original_name" in media) {
        return media.original_name.includes(name);
      }
    });
    console.log("🚀: ~ allFilterName:", allFilterName);

    setFilterMedia(allFilterName as MovieDetail[] | TVSeriesDetail[]);
  };

  return (
    <HStack
      backgroundColor={COLORS.Primary_Navy_Blue}
      position="sticky"
      top={0}
      height={16}
      justifyContent="center"
      borderBottom={`${borderWidth} solid white`}
      boxShadow="dark-lg"
      zIndex={5}
    >
      <SideBar />
      <HStack>
        <Text
          color="white"
          fontSize="2.6rem"
          textTransform="uppercase"
          letterSpacing="2px"
          fontWeight="bold"
        >
          Movie Mania
        </Text>
        <RiMovie2Fill size={40} color="white" />
      </HStack>
      <InputSearch
        placeholder="Search Movie..."
        onChange={(e) => {
          // console.log(e.target.value);
          filterMediaName(e.target.value);
        }}
        borderWidth={borderWidth}
      />
    </HStack>
  );
};

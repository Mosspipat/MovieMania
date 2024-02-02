import { HStack, Text, VStack } from "@chakra-ui/react";
import { COLORS } from "../../constants";
import { RiMovie2Fill } from "react-icons/ri";
import { InputSearch } from "./InputSearch";
import { NavigationLink } from "./NavigationLink";

export const TopBar = () => {
  const borderWidth: string = "4px";

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
      <NavigationLink />
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
        onChange={() => {}}
        borderWidth={borderWidth}
      />
    </HStack>
  );
};

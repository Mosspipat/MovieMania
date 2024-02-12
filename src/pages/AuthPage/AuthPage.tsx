import { ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { COLORS } from "../../constants";
import { MdLocalMovies } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function AuthPage() {
  const navigate = useNavigate();

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      backgroundColor="white"
    >
      <VStack
        alignItems="start"
        border="2px solid white"
        padding={8}
        borderRadius={32}
        boxShadow="2xl"
      >
        <VStack alignItems="center" width="100%">
          <MdLocalMovies size={48} color={COLORS.Secondary_Indigo} />
          <Text
            color={COLORS.Secondary_Indigo}
            fontSize="2.6rem"
            textTransform="uppercase"
            letterSpacing="2px"
            fontWeight="bold"
            textShadow="10px 10px 5px rgba(225,225,225,0.8)"
          >
            Movie Mania
          </Text>
          <Heading as="h1" color="black" textAlign="center" width="100%">
            Log in
          </Heading>
        </VStack>

        <InputGroup>
          {/* <InputLeftElement pointerEvents="none">
            <PhoneIcon color="gray.300" />
          </InputLeftElement> */}
          <Input type="tel" placeholder="Username" />
        </InputGroup>
        <InputGroup>
          <Input type="tel" placeholder="Password" />
          <InputRightElement
            // pointerEvents="none"
            onClick={() => {
              console.log("hide/show");
            }}
          >
            {/* <PhoneIcon color="gray.300" /> */}
            <ViewIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>
        <Button
          width="100%"
          backgroundColor={COLORS.Accent_Purple}
          color="white"
          _hover={{ color: "white" }}
          onClick={() => {
            console.log("login");
            navigate("/explore");
          }}
        >
          Log in
        </Button>
      </VStack>
    </Flex>
  );
}

import {
  Button,
  ButtonGroup,
  HStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Input,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdLocalMovies } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { COLORS } from "../../../constants";

export function NavigationLink() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRoute = useRef<HTMLButtonElement>(null);

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
          //   backgroundColor={COLORS.Primary_Navy_Blue}
          backgroundColor={`rgba(255, 255, 255, 0.2)`}
          borderRadius="0px 0px 200px 0px"
          borderStyle="dashed"
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

          <DrawerBody>{/* <Input placeholder="Type here..." /> */}</DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose} color="white">
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

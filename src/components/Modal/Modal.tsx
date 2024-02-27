import {
  ModalOverlay,
  Modal as ModalChakra,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useDisclosure,
  VStack,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Lorem } from "../../utils";
import { useEffect, useRef } from "react";
import { COLORS } from "../../constants";
import { MovieDetail, TVSeriesDetail } from "../MoviesDisplay/type";
import { Video } from "./Video";
import { UseScoreVisuals } from "../../hook";

type ModalProps = {
  detail?: MovieDetail | TVSeriesDetail;
  visible: boolean;
  onClose: () => void;
};

export function Modal(props: ModalProps) {
  const { detail, visible, onClose: onCloseModal } = props;

  const { colorScore, emojiScore } = UseScoreVisuals();

  console.log("🚀: ~ detail:", detail);

  const finalRef = useRef(null);
  const { sampleSentences } = Lorem;

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (visible) {
      onOpen();
    } else {
      onClose();
    }
  }, [visible, onOpen]);

  const handleCloseModal = () => {
    onCloseModal();
    onClose();
  };

  return (
    <ModalChakra
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={handleCloseModal}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor={COLORS.Primary_Navy_Blue}
        color="white"
        borderRadius={16}
        p={1}
      >
        <ModalHeader
          textAlign="center"
          textShadow="4px 4px 4px rgba(225,225,225,0.3)"
        >
          {detail?.title}
        </ModalHeader>
        <ModalCloseButton onClick={handleCloseModal} />
        <ModalBody>
          <Video detail={detail} />
          <VStack alignItems="start" p="16px 0px">
            <Text
              pt={4}
              textShadow="4px 4px 4px rgba(225,225,225,0.3)"
              fontWeight="bold"
            >
              Description :
            </Text>
            <Text pt={2}> {detail?.overview || sampleSentences(2)}</Text>
            <HStack>
              <Text
                textShadow="4px 4px 4px rgba(225,225,225,0.3)"
                fontWeight="bold"
              >
                Release Date :
              </Text>
              <Text> {detail?.release_date || sampleSentences(2)}</Text>
            </HStack>
            <HStack>
              <Text
                textShadow="4px 4px 4px rgba(225,225,225,0.3)"
                fontWeight="bold"
              >
                Vote Average :
              </Text>
              <HStack
                color={colorScore(detail?.vote_average)}
                backgroundColor="black"
                p="4px 10px"
                border={`2px solid ${colorScore(detail?.vote_average)}`}
                borderRadius={24}
                boxShadow={`3px 2px ${colorScore(detail?.vote_average)};`}
              >
                <Box>{detail?.vote_average}</Box>
                <Box>{emojiScore(detail?.vote_average)}</Box>
              </HStack>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </ModalChakra>
  );
}

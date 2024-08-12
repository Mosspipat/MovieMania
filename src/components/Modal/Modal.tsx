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
import { MovieDetail, TVSeriesDetail } from "../MoviesDisplay/type";
import { Video } from "./Video";
import { UseScoreVisuals } from "../../hook";

type ModalProps = {
  detail?: MovieDetail | TVSeriesDetail;
  visible: boolean;
  onClose: () => void;
  title?: string;
};

export function Modal(props: ModalProps) {
  const { detail, visible, onClose: onCloseModal } = props;

  const { colorScore, emojiScore } = UseScoreVisuals();

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
      size="xl"
    >
      <ModalOverlay />
      <ModalContent
        color="white"
        borderRadius={16}
        p={1}
        border="2px solid white"
        backgroundColor="rgba(255, 255, 255, 0.7)" /* Adjust the last value for opacity */
        backgroundSize="cover"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1 )), url('https://image.tmdb.org/t/p/original/${detail?.backdrop_path}')`,
        }}
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

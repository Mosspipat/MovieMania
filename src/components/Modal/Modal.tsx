import {
  ModalOverlay,
  Modal as ModalChakra,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useDisclosure,
  AspectRatio,
} from "@chakra-ui/react";
import { Lorem } from "../../utils";
import { useEffect, useRef } from "react";
import { COLORS } from "../../constants";
import { MovieList } from "../MoviesDisplay/type";

type ModalProps = {
  detail?: MovieList;
  visible: boolean;
  onClose: () => void;
};

export function Modal(props: ModalProps) {
  const { detail, visible, onClose: onCloseModal } = props;
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
      <ModalContent backgroundColor={COLORS.Primary_Navy_Blue} color="white">
        <ModalHeader>{detail?.title}</ModalHeader>
        <ModalCloseButton onClick={handleCloseModal} />
        <ModalBody>
          {/* <AspectRatio maxW="560px" ratio={1}>
            <iframe title="naruto" src={detail?.urlVideo} allowFullScreen />
          </AspectRatio> */}
          <Text> {detail?.overview || sampleSentences(2)}</Text>
        </ModalBody>
      </ModalContent>
    </ModalChakra>
  );
}

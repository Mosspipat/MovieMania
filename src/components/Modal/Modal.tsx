import {
  ModalOverlay,
  Modal as ModalChakra,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Lorem } from "../../utils";
import { useEffect, useRef } from "react";
import { COLORS } from "../../constants";
import { MovieDetail, TVSeriesDetail } from "../MoviesDisplay/type";
import { Video } from "./Video";

type ModalProps = {
  detail?: MovieDetail | TVSeriesDetail;
  visible: boolean;
  onClose: () => void;
};

export function Modal(props: ModalProps) {
  const { detail, visible, onClose: onCloseModal } = props;
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
      <ModalContent backgroundColor={COLORS.Primary_Navy_Blue} color="white">
        <ModalHeader>{detail?.title}</ModalHeader>
        <ModalCloseButton onClick={handleCloseModal} />
        <ModalBody>
          <Video detail={detail} />
          <Text> {detail?.overview || sampleSentences(2)}</Text>
        </ModalBody>
      </ModalContent>
    </ModalChakra>
  );
}

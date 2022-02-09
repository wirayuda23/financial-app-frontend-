import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import FormEdit from "./FormEdit";

export default function EditKeuangan({ data }: { data: number }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button mr={3} colorScheme="green" onClick={onOpen}>
        Edit
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent p={5}>
          <ModalHeader>Catat keuangan baru</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormEdit id={data} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

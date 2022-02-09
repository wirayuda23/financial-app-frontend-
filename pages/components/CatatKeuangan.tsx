import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import FormCatat from "./FormCatat";

export default function CatatKeuangan() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");

  return (
    <>
      <Button colorScheme="gray" mr={3} onClick={onOpen}>
        Catat
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent p={5}>
          <ModalHeader>Catat keuangan baru</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormCatat />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

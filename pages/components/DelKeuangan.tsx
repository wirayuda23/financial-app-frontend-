import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

export default function DelKeuangan({ id }: { id: number }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Delete = async () => {
    await axios
      .delete("http://127.0.0.1:8000/api/transaction/" + id)
      .then(() => window.location.reload());
  };
  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Hapus
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent p={5}>
          <ModalHeader textAlign="center">Yakin ingin hapus?</ModalHeader>
          <ModalBody>
            <Flex justifyContent="center">
              <Button onClick={Delete} colorScheme="gray" mr={3}>
                Hapus
              </Button>
              <Button colorScheme="green" onClick={onClose}>
                Batal
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

import {
  Badge,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Container,
  DarkMode,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import CatatKeuangan from "./components/CatatKeuangan";
import DelKeuangan from "./components/DelKeuangan";
import EditKeuangan from "./components/EditKeuangan";
import TabelKeuangan from "./components/TabelKeuangan";

const Home: NextPage = () => {
  return (
    <Container maxW="container.sm" p={12}>
      <TabelKeuangan />
    </Container>
  );
};

export default Home;

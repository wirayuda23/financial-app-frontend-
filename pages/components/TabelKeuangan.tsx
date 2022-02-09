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
  useDisclosure,
} from "@chakra-ui/react";
import CatatKeuangan from "./CatatKeuangan";
import DelKeuangan from "./DelKeuangan";
import EditKeuangan from "./EditKeuangan";
import { useState, useEffect } from "react";
import axios from "axios";

export default function TabelKeuangan() {
  const [dataKeuangan, setKeuangan] = useState<any[]>([]);
  useEffect(() => {
    fetchKeuangan();
  }, []);
  const fetchKeuangan = async () => {
    const keuangan = await axios.get("http://127.0.0.1:8000/api/transaction");
    setKeuangan(keuangan.data.data);
    console.log(dataKeuangan);
  };
  return (
    <>
      <Flex mt={10} justifyContent="center">
        <Flex rounded={6} p={12} mt={10} mb={10} direction="column">
          <Flex direction="row">
            <CatatKeuangan />
            <Heading mb={3}>Keuangan Bagas</Heading>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th>Jenis keuangan</Th>
                <Th>Jumlah</Th>
                <Th>Keterangan</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {dataKeuangan.map((akun, index) => (
                <Tr key={index}>
                  {akun.type === "revenue" && (
                    <Td>
                      <Badge colorScheme="green" p={2} rounded={6}>
                        Pemasukkan
                      </Badge>
                    </Td>
                  )}
                  {akun.type === "expense" && (
                    <Td>
                      <Badge colorScheme="red" p={2} rounded={6}>
                        Pengeluaran
                      </Badge>
                    </Td>
                  )}
                  <Td>Rp{akun.amount}</Td>
                  <Td>{akun.title}</Td>
                  <Td>
                    <EditKeuangan data={akun.id} />
                    <DelKeuangan id={akun.id} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Flex>
      </Flex>
    </>
  );
}

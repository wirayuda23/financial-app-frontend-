import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  FormHelperText,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FormEdit({ id }: { id: number }) {
  const [keterangan, setKeterangan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [jenis, setJenis] = useState("");

  const handleKeteranganChange = (e: any) => setKeterangan(e.target.value);
  const handleJumlahChange = (e: any) => setJumlah(e.target.value);
  const handleJenisChange = (e: any) => setJenis(e.target.value);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(
      "https://akunapi.herokuapp.com/api/transaction/" + id
    );
    const akun = await res.data;
    setKeterangan(akun.data.title);
    setJumlah(akun.data.amount);
    setJenis(akun.data.type);
  };

  const editKeuangan = async () => {
    let body = {
      id: id,
      title: keterangan,
      amount: jumlah,
      type: jenis,
    };
    await axios
      .put("https://akunapi.herokuapp.com/api/transaction/" + id, body)
      .then(() => window.location.reload());
  };

  return (
    <>
      <FormLabel>Keterangan :</FormLabel>
      <Input
        id="keterangan"
        type="text"
        value={keterangan}
        onChange={handleKeteranganChange}
        variant="filled"
      />

      <FormLabel mt={3}>Jumlah :</FormLabel>
      <Input
        id="jumlah"
        type="number"
        value={jumlah}
        onChange={handleJumlahChange}
        variant="filled"
      />

      <FormLabel mt={3}>Jenis Keuangan :</FormLabel>
      <RadioGroup value={jenis}>
        <HStack spacing="24px">
          <Radio value="expense" onChange={handleJenisChange} colorScheme="red">
            Pengeluaran
          </Radio>
          <Radio
            value="revenue"
            onChange={handleJenisChange}
            colorScheme="green"
          >
            Pemasukkan
          </Radio>
        </HStack>
      </RadioGroup>

      <Button onClick={editKeuangan} mt={4} colorScheme="green">
        Edit
      </Button>
    </>
  );
}

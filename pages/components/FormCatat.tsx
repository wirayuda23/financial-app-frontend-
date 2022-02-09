import { Formik, Form, Field } from "formik";
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
import { useState, useReducer } from "react";
import axios from "axios";

export default function FormCatat() {
  const [keterangan, setKeterangan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [jenis, setJenis] = useState("");

  const handleKeteranganChange = (e: any) => setKeterangan(e.target.value);
  const handleJumlahChange = (e: any) => setJumlah(e.target.value);
  const handleJenisChange = (e: any) => setJenis(e.target.value);

  const isKetError = keterangan === "";
  const isJumError = jumlah === "";
  const isJenisError = jenis === "";

  const addKeuangan = async () => {
    let body = {
      title: keterangan,
      amount: jumlah,
      type: jenis,
    };
    await axios
      .post("https://akunapi.herokuapp.com/api/transaction", body)
      .then(() => window.location.reload());
  };

  return (
    <>
      <FormControl isInvalid={isKetError}>
        <FormLabel>Keterangan :</FormLabel>
        <Input
          id="keterangan"
          type="text"
          value={keterangan}
          onChange={handleKeteranganChange}
          variant="filled"
        />
        {isKetError && (
          <FormErrorMessage>Keterangan harus diisi</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isJumError}>
        <FormLabel mt={3}>Jumlah :</FormLabel>
        <Input
          id="jumlah"
          type="number"
          value={jumlah}
          onChange={handleJumlahChange}
          variant="filled"
        />
        {isJumError && <FormErrorMessage>Jumlah harus diisi</FormErrorMessage>}
      </FormControl>
      <FormControl isInvalid={isJenisError}>
        <FormLabel mt={3}>Jenis Keuangan :</FormLabel>
        <RadioGroup value={jenis}>
          <HStack spacing="24px">
            <Radio
              value="expense"
              onChange={handleJenisChange}
              colorScheme="red"
            >
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
        {isJenisError && (
          <FormErrorMessage>Jenis harus dipilih</FormErrorMessage>
        )}
      </FormControl>
      <Button onClick={addKeuangan} mt={4} colorScheme="green">
        Catat
      </Button>
    </>
  );
}

import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBarNew() {
  const listCustomer = useSelector((redux) => redux.customer.listCustomer);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  function handlerChangeText(value) {
    setSearchText(value);
  }
  return (
    <Stack spacing={2} sx={{ mx: 1 }}>
      <Autocomplete
        freeSolo
        selectOnFocus
        sx={{ width: 170 }}
        options={listCustomer.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tìm Khách Hàng"
            value={searchText}
            onChange={(e) => {
              console.log(e.target.value);
              handlerChangeText(e);
            }}
          />
        )}
        onChange={(e, value) => {
          console.log(value);
          handlerChangeText(value);
        }}
      />
    </Stack>
  );
}

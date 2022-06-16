import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customerAction } from "../../store/CustomerSlice";
import customerAPI from "../HTTP_Request/CustomerAPI";

export default function SearchBarNew() {
  const listCustomerRedux = useSelector((redux) => redux.customer.listCustomer);
  // const [listCustomer, setListCustomer] = useState([]);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  function handlerChangeText(value) {
    setSearchText(value);
  }
  useEffect(() => {
    async function getCustomer() {
      const response = await customerAPI.getCustomer();
      if (response)
        // setListCustomer(response);
        dispatch(customerAction.setListCustomer({ listCustomer: response }));
    }
    getCustomer();
  }, []);
  return (
    <Stack spacing={2} sx={{ mx: 1 }}>
      <Autocomplete
        selectOnFocus
        sx={{ width: 220 }}
        options={listCustomerRedux.map((option) => option)}
        getOptionLabel={(option) => option.customerName}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tìm Khách Hàng"
            value={searchText}
            onChange={(e) => {
              handlerChangeText(e);
            }}
          />
        )}
        onChange={(e, value) => {
          console.log(value);
          handlerChangeText(value);
          navigate(`/customer/${value.customerId}`);
        }}
      />
    </Stack>
  );
}

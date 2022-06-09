import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import customerAPI from "../../HTTP_Request/CustomerAPI";
import { customerAction } from "../../../store/CustomerSlice";
import { useParams } from "react-router-dom";

export default function Profile({ customer, setCustomer }) {
  const dispatch = useDispatch();
  // const [customer, setCustomer] = useState(props.customer);

  function handleChangeCustomer(field, value) {
    setCustomer({ ...customer, [field]: value });
  }
  async function handleUpdateCustomer() {
    let data = {
      //   customerId: customer.customerId,
      // customerId: customer.customerId,
      // customerName: customer.customerName,
      // phone: customer.phone,
      // address: customer.address,
      ...customer,
    };
    let response = await customerAPI.updateCustomer(data);
    if (response)
      // dispatch(customerAction.updateCustomer({ customer: response }));
      setCustomer(response);
  }
  async function handleDeleteCustomer() {
    let data = {
      customerId: customer.customerId,
    };
    let response = await customerAPI.deleteCustomer(data);
    if (response) {
      dispatch(customerAction.deleteCustomer({ customer: response }));
    }
    console.log(response);
  }
  return (
    <Stack px={3} spacing={1.5} sx={{ overflow: "inherit" }}>
      <Typography variant="h3" color="secondary" textAlign="center" my={3}>
        Thông Tin
      </Typography>
      <TextField
        label="Tên Khách"
        // value={customerName}
        InputLabelProps={{ shrink: true }}
        value={customer.customerName}
        onChange={(e) => handleChangeCustomer("customerName", e.target.value)}
      />
      <TextField
        label="Số Điện Thoại"
        InputLabelProps={{ shrink: true }}
        value={customer.phone}
        onChange={(e) => handleChangeCustomer("phone", e.target.value)}
      />
      <TextField
        label="Địa Chỉ"
        InputLabelProps={{ shrink: true }}
        value={customer.address}
        onChange={(e) => handleChangeCustomer("address", e.target.value)}
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Số Tiền Đang Nợ"
        value={customer.totalMoney}
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Thanh Toán Gần Đây"
        value={customer.lastPayDate}
      />
      {/* <Stack flexDirection={"row"}> */}
      <Button
        variant="outlined"
        size="large"
        color="success"
        onClick={handleUpdateCustomer}
      >
        Lưu Thay Đổi
      </Button>
      {/* <Button
        variant="outlined"
        size="large"
        color="error"
        onClick={handleDeleteCustomer}
      >
        Xóa Khách Hàng
      </Button> */}
    </Stack>
  );
}

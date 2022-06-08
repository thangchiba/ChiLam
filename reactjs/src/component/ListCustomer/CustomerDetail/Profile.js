import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import customerAPI from "../../HTTP_Request/CustomerAPI";
import { customerAction } from "../../../store/CustomerSlice";
import { useParams } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const { customerId } = useParams();
  const [customer, setCustomer] = useState({
    customerId: "",
    customerName: "",
    phone: "",
    address: "",
    totalMoney: "",
    lastPayDate: "",
  });
  useEffect(() => {
    async function getCustomer() {
      const response = await customerAPI.getCustomer({
        customerId: customerId,
      });
      if (response) setCustomer(response[0]);
      return response[0];
    }
    getCustomer();
  }, []);
  function handleChangeCustomer(field, value) {
    setCustomer({ ...customer, [field]: value });
  }

  async function handleUpdateCustomer() {
    let data = {
      //   customerId: customer.customerId,
      customerId: customerId,
      customerName: customer.customerName,
      phone: customer.phone,
      address: customer.address,
    };
    let response = await customerAPI.updateCustomer(data);
    if (response)
      dispatch(customerAction.updateCustomer({ customer: response }));
    console.log(response);
  }
  async function handleDeleteCustomer() {
    let data = {
      customerId: customerId,
    };
    let response = await customerAPI.deleteCustomer(data);
    if (response)
      dispatch(customerAction.deleteCustomer({ customer: response }));
    console.log(response);
  }
  return (
    <Stack px={3} spacing={1.5}>
      <Typography variant="h3" color="secondary" textAlign="center" my={3}>
        Thông Tin Khách Hàng
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
      <Button
        variant="outlined"
        size="large"
        color="error"
        onClick={handleDeleteCustomer}
      >
        Xóa Khách Hàng
      </Button>
    </Stack>
  );
}

import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CommonModal from "../UIComponent/CommonModal";
function CustomerDetail({ open, setOpen, onClose, customer }) {
  const [customerName, setCustomerName] = useState(customer.customerName);
  const [phone, setPhone] = useState(customer.phone);
  const [address, setAddress] = useState(customer.address);
  const [lastPayDate, setLastPayDate] = useState(customer.lastPayDate);
  useEffect(() => {}, [customer]);
  return (
    <CommonModal open={open} setOpen={setOpen} onClose={onClose}>
      <Stack px={3} spacing={2}>
        <Typography variant="h3" color="secondary" textAlign="center">
          {customer.customerName}
        </Typography>
        <TextField
          label="Tên Khách"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <TextField
          label="Số Điện Thoại"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Địa Chỉ"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField label="Thanh Toán Gần Đây" value={lastPayDate} />
        {/* <Stack flexDirection={"row"}> */}
        <Button variant="outlined" size="large" color="success">
          Lưu Thay Đổi
        </Button>
        <Button variant="outlined" size="large" color="error">
          Xóa Khách Hàng
        </Button>
      </Stack>
    </CommonModal>
  );
}
export default CustomerDetail;

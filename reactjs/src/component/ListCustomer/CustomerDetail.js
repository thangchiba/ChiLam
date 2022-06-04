import { Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { customerAction } from "../../store/CustomerSlice";
import customerAPI from "../HTTP_Request/CustomerAPI";
import CommonModal from "../UIComponent/CommonModal";
function CustomerDetail({ open, setOpen, onClose, customer }) {
  const dispatch = useDispatch();
  const [customerName, setCustomerName] = useState(customer.customerName);
  const [phone, setPhone] = useState(customer.phone);
  const [address, setAddress] = useState(customer.address);
  const [totalMoney, setTotalMoney] = useState(customer.totalMoney);
  const [lastPayDate, setLastPayDate] = useState(customer.lastPayDate);
  async function handleUpdateCustomer() {
    let data = {
      customerId: customer.customerId,
      customerName,
      phone,
      address,
    };
    let response = await customerAPI.updateCustomer(data);
    if (response)
      dispatch(customerAction.updateCustomer({ customer: response }));
    console.log(response);
    setOpen(false);
  }
  useEffect(() => {}, [customer]);
  return (
    <CommonModal open={open} setOpen={setOpen} onClose={onClose}>
      <Stack px={3} spacing={1.5}>
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
        <TextField label="Số Tiền Đang Nợ" value={totalMoney} />
        <TextField label="Thanh Toán Gần Đây" value={lastPayDate} />
        {/* <Stack flexDirection={"row"}> */}
        <Button
          variant="outlined"
          size="large"
          color="success"
          onClick={handleUpdateCustomer}
        >
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

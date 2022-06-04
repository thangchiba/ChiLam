import { AddCircleOutlined } from "@mui/icons-material";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { customerAction } from "../../store/CustomerSlice";
import axiosClient from "../HTTP_Request/axiosClient";
import customerAPI from "../HTTP_Request/CustomerAPI";
import CommonModal from "../UIComponent/CommonModal";
function AddCustomer() {
  const dispatch = useDispatch();
  const [openAddCustomer, setOpenAddCustomer] = useState();
  const customerName = useRef();
  const phone = useRef();
  const address = useRef();
  async function handleAddCustomer() {
    let data = {
      customerName: customerName.current.value,
      phone: phone.current.value,
      address: address.current.value,
    };
    let response = await customerAPI.addCustomer(data);
    if (response) dispatch(customerAction.addCustomer({ customer: response }));
    console.log(response);
    setOpenAddCustomer(false);
  }
  return (
    <Fragment>
      <Button
        variant="outlined"
        color="success"
        size="large"
        endIcon={<AddCircleOutlined />}
        onClick={() => setOpenAddCustomer(true)}
      >
        Thêm Khách
      </Button>
      <CommonModal open={openAddCustomer} setOpen={setOpenAddCustomer}>
        <Stack m={3} spacing={2}>
          <Typography
            variant="h4"
            color="secondary"
            textAlign={"center"}
            mb={2}
          >
            Thêm Khách Hàng
          </Typography>
          <TextField
            label="Tên"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25 } }}
            inputRef={customerName}
            fullWidth
          />
          <TextField
            label="Số Điện Thoại"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25 } }}
            inputRef={phone}
            fullWidth
          />
          <TextField
            label="Địa Chỉ"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25, marginBottom: 20 } }}
            inputRef={address}
            fullWidth
          />
          <Button
            variant="outlined"
            color="success"
            size="large"
            sx={{ height: 70 }}
            onClick={handleAddCustomer}
          >
            Xác Nhận
          </Button>
        </Stack>
      </CommonModal>
    </Fragment>
  );
}
export default AddCustomer;

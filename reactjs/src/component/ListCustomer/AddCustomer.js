import { AddCircleOutlined } from "@mui/icons-material";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import CommonModal from "../UIComponent/CommonModal";
function AddCustomer() {
  const [openAddCustomer, setOpenAddCustomer] = useState();
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
            fullWidth
          />
          <TextField
            label="Số Điện Thoại"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25 } }}
            fullWidth
          />
          <TextField
            label="Địa Chỉ"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25, marginBottom: 20 } }}
            fullWidth
          />
          <Button
            variant="outlined"
            color="success"
            size="large"
            sx={{ height: 70 }}
          >
            Xác Nhận
          </Button>
        </Stack>
      </CommonModal>
    </Fragment>
  );
}
export default AddCustomer;

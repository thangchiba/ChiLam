import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Fab, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import CommonModal from "../UIComponent/CommonModal";

function AddDueButton() {
  const [openAddDue, setOpenAddDue] = useState(false);
  return (
    <Fragment>
      <Fab
        size="large"
        color="secondary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 15, right: 10 }}
        onClick={() => setOpenAddDue(true)}
      >
        <AddCircleIcon sx={{ fontSize: 50 }} />
      </Fab>

      <CommonModal
        open={openAddDue}
        setOpen={setOpenAddDue}
        // key={"addduemodal"}
      >
        <Stack m={3} spacing={2}>
          <Typography
            variant="h4"
            color="secondary"
            textAlign={"center"}
            mb={2}
          >
            Thêm Phiếu Nợ
          </Typography>
          <TextField
            label="Tên"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25 } }}
            fullWidth
          />
          <TextField
            label="Số Nợ"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25 } }}
            fullWidth
          />
          <TextField
            label="Ngày"
            type="datetime-local"
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
export default AddDueButton;

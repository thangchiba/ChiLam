import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Fab, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { dueAction } from "../../store/DueSlice";
import CommonModal from "../UIComponent/CommonModal";
import dueAPI from "../HTTP_Request/DueAPI";

function AddDueButton() {
  const dispatch = useDispatch();
  const [openAddDue, setOpenAddDue] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [money, setMoney] = useState("");
  const [createDate, setCreateDate] = useState("");
  async function handleAddDue() {
    const data = {
      customerId: customerId,
      money: money,
      createDate: createDate,
    };
    const response = await dueAPI.addDue(data);
    if (response) dispatch(dueAction.addDue({ due: response }));
    setOpenAddDue(false);
  }
  useEffect(() => {}, [openAddDue]);
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
            value={customerId}
            onChange={(e) => {
              setCustomerId(e.target.value);
            }}
            required
          />
          <TextField
            label="Số Nợ"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25 } }}
            fullWidth
            value={money}
            onChange={(e) => {
              setMoney(e.target.value);
            }}
            required
          />
          <TextField
            label="Ngày"
            type="datetime-local"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25, marginBottom: 20 } }}
            fullWidth
            value={createDate}
            onChange={(e) => {
              setCreateDate(e.target.value);
            }}
            required
          />
          <Button
            variant="outlined"
            color="success"
            size="large"
            sx={{ height: 70 }}
            onClick={handleAddDue}
          >
            Xác Nhận
          </Button>
        </Stack>
      </CommonModal>
    </Fragment>
  );
}
export default AddDueButton;

import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Button,
  Fab,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import TradeAPI from "../../../HTTP_Request/TradeAPI";
import CommonModal from "../../../UIComponent/CommonModal";

function AddTrade({ customer, setCustomer, addTrade }) {
  const dispatch = useDispatch();
  const [mode, setMode] = useState("due");
  const [openAddTrade, setOpenAddTrade] = useState(false);
  const [money, setMoney] = useState("");
  const [createDate, setCreateDate] = useState();
  // new Date().toISOString().substring(0, 16)
  async function handleAddTrade() {
    const data = {
      customerId: customer.customerId,
      isDue: mode == "due",
      money: money,
      createDate: createDate || new Date(),
    };
    const response = await TradeAPI.addTrade(data);
    if (response) {
      addTrade(response);
    }
    setOpenAddTrade(false);
  }
  return (
    <Fragment>
      <Fab
        size="large"
        color="secondary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 15, right: 10 }}
        onClick={() => setOpenAddTrade(true)}
      >
        <AddCircleIcon sx={{ fontSize: 50 }} />
      </Fab>

      <CommonModal open={openAddTrade} setOpen={setOpenAddTrade}>
        <Stack m={3} spacing={2}>
          {/* <Typography
            variant="h4"
            color="secondary"
            textAlign={"center"}
            mb={2}
          >
            Thêm Phiếu Nợ
          </Typography> */}
          <ToggleButtonGroup
            color="error"
            value={mode}
            exclusive
            onChange={(e) => setMode(e.target.value)}
          >
            <ToggleButton value="due" sx={{ fontSize: 25 }}>
              Ghi Nợ
            </ToggleButton>
            <ToggleButton value="pay" sx={{ fontSize: 25 }}>
              Thanh Toán
            </ToggleButton>
          </ToggleButtonGroup>
          <TextField
            label="Tên"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25 } }}
            fullWidth
            value={customer.customerName}
            // onChange={(e) => {
            //   setCustomerId(e.target.value);
            // }}
            required
          />
          <TextField
            label="Số Tiền"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25 } }}
            fullWidth
            value={money}
            onChange={(e) => {
              setMoney(e.target.value);
            }}
            required
            autoFocus={true}
          />
          <TextField
            label="Ngày"
            type="datetime-local"
            InputLabelProps={{ shrink: true, style: { fontSize: 25 } }}
            InputProps={{ style: { fontSize: 25, marginBottom: 20 } }}
            fullWidth
            value={createDate}
            defaultValue={new Date().nowDateTime()}
            onChange={(e) => {
              console.log(createDate);
              setCreateDate(e.target.value);
            }}
            required
          />
          <Button
            variant="outlined"
            color="success"
            size="large"
            sx={{ height: 70 }}
            onClick={handleAddTrade}
          >
            Xác Nhận
          </Button>
        </Stack>
      </CommonModal>
    </Fragment>
  );
}
export default AddTrade;

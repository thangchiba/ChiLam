import {
  Avatar,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDateVietnamese } from "../../CommonMethod/DateTimeCalc";
import { dueAction } from "../../store/DueSlice";
import CommonModal from "../UIComponent/Common/CommonModal";

function DueDetail() {
  const dispatch = useDispatch();
  const dueDetail = useSelector((redux) => redux.due.dueDetail);
  function closeDueDetail() {
    dispatch(dueAction.closeDueDetail());
  }
  return (
    // const linkImage = );
    <CommonModal open={dueDetail.open} close={closeDueDetail}>
      {dueDetail.due && (
        <Fragment>
          {/* <Typography variant="h3" color="red" textAlign="center">
            Hóa Đơn
          </Typography>
          <Divider /> */}
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            mt={3}
          >
            <Avatar
              src={require("../../static/image/icon/".concat(
                dueDetail.due.customerImage
              ))}
              sx={{ width: 100, height: 100 }}
            />
            <Typography variant="h4" color="secondary">
              {dueDetail.due.customerName}
            </Typography>
          </Box>
          <Box>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h5" color="green">
                Tổng Tiền :{" "}
              </Typography>
              <Typography variant="h5" color="green">
                {dueDetail.due.total}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h5" color="green">
                Thanh Toán :{" "}
              </Typography>
              <Typography variant="h5" color="green">
                {dueDetail.due.paid}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h5" color="red">
                Còn Thiếu :{" "}
              </Typography>
              <Typography variant="h5" color="red">
                {dueDetail.due.total - dueDetail.due.paid}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1}>
              <Typography variant="h5" color="primary">
                {GetDateVietnamese(dueDetail.due.date)}
              </Typography>
            </Stack>
          </Box>
        </Fragment>
      )}
    </CommonModal>
  );
}

export default DueDetail;

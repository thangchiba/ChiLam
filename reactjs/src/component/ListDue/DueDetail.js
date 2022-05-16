import { Avatar, Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { GetDateVietnamese } from "../../CommonMethod/DateTimeCalc";
import { dueAction } from "../../store/DueSlice";
import CircularStatic from "../UIComponent/Common/CircularStatic";
import CommonModal from "../UIComponent/Common/CommonModal";

function DueDetail() {
  const dispatch = useDispatch();
  const dueDetail = useSelector((redux) => redux.due.dueDetail);
  function closeDueDetail() {
    dispatch(dueAction.closeDueDetail());
  }
  return (
    // const linkImage = );
    <CommonModal open={dueDetail.open} onClose={closeDueDetail}>
      {dueDetail.due && (
        <Box mt={2}>
          <Typography variant="h4" color="primary" textAlign="center">
            {GetDateVietnamese(dueDetail.due.date)}
          </Typography>
          {/* <Typography variant="h3" color="red" textAlign="center">
            Hóa Đơn
          </Typography> */}

          <Divider />
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
              sx={{ width: 120, height: 120 }}
            />
            <Typography variant="h4" color="secondary">
              {dueDetail.due.customerName}
            </Typography>
          </Box>

          <Box mt={3} display="flex" justifyContent="space-between">
            <Stack direction={"column"} spacing={1}>
              <Typography variant="h5" color="green">
                Tổng Tiền : {dueDetail.due.total}
              </Typography>
              <Typography variant="h5" color="green">
                Thanh Toán : {dueDetail.due.paid}
              </Typography>
              <Typography variant="h5" color="red">
                Còn Thiếu : {dueDetail.due.total - dueDetail.due.paid}
              </Typography>
              <Typography variant="h5" color="red"></Typography>
            </Stack>
            <CircularStatic
              progress={(dueDetail.due.paid / dueDetail.due.total) * 100}
              // progress={100}
            />
          </Box>
        </Box>
      )}
    </CommonModal>
  );
}

export default DueDetail;

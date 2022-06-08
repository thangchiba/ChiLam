import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import CountDays from "../../CommonMethod/DateTimeCalc";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import dueAPI from "../HTTP_Request/DueAPI";
import { dueAction } from "../../store/DueSlice";
import { useDispatch } from "react-redux";
import { GetDateVietnamese } from "../../CommonMethod/DateTimeCalc";
import { customerAction } from "../../store/CustomerSlice";
const StyledContainer = styled(Grid)({
  marginBlock: 5,
  // backgroundColor:orange[300],
  height: 45,
  borderRadius: 5,
  borderWidth: 1,
});

const StyledGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  paddingInline: 3,
  fontSize: 20,
  fontWeight: 700,
  borderRight: "0.1px solid gray",
});

function DueItem({ due }) {
  const dispatch = useDispatch();
  let countDays = CountDays(due.createDate);
  async function handleDeleteDue() {
    const data = {
      dueId: due.dueId,
    };
    const response = await dueAPI.deleteDue(data);
    console.log(response);
    if (response) {
      dispatch(dueAction.deleteDue({ due: response }));
      dispatch(
        customerAction.updateCustomer({ customer: response.updatedCustomer })
      );
    }
  }
  return (
    <StyledContainer
      container
      // backgroundColor={
      //   countDays >= 14 ? pink[200] : countDays >= 7 ? pink[100] : "white"
      // }
      key={due.dueId}
      // onClick={() => handleClickDueContent(due)}
    >
      <StyledGrid item xs={5} sm={4}>
        {/* <Avatar src={linkImage} /> */}
        <Typography noWrap variant="h5">
          {due.customerName}
        </Typography>
      </StyledGrid>
      <StyledGrid item xs={3} sm={2}>
        <Typography variant="h5">{due.money}</Typography>
      </StyledGrid>
      <StyledGrid item sx={{ display: { xs: "none", sm: "flex" } }} sm={3}>
        <Typography variant="h5">
          {GetDateVietnamese(due.createDate)}
        </Typography>
      </StyledGrid>
      <StyledGrid item xs={4} sm={2}>
        <Typography variant="h5">{countDays + " Ngày"}</Typography>
      </StyledGrid>
      <StyledGrid item sx={{ display: { xs: "none", sm: "flex" } }} sm={1}>
        <RemoveCircleOutlineIcon
          sx={{ fontSize: 35, color: "red", marginLeft: 1, cursor: "pointer" }}
          onClick={handleDeleteDue}
        />
      </StyledGrid>
    </StyledContainer>
  );
}

export default DueItem;

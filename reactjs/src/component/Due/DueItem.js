import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import CountDays from "../../CommonMethod/DateTimeCalc";

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
  let countDays = CountDays(due.createDate);
  return (
    <StyledContainer
      container
      // backgroundColor={
      //   countDays >= 14 ? pink[200] : countDays >= 7 ? pink[100] : "white"
      // }
      key={due.dueId}
      // onClick={() => handleClickDueContent(due)}
    >
      <StyledGrid item xs={5}>
        {/* <Avatar src={linkImage} /> */}
        <Typography noWrap variant="h5">
          {due.customerName}
        </Typography>
      </StyledGrid>
      <StyledGrid item xs={3}>
        <Typography variant="h5">{due.money}</Typography>
      </StyledGrid>
      <StyledGrid item xs={4}>
        <Typography variant="h5">{countDays + " Ngày"}</Typography>
      </StyledGrid>
    </StyledContainer>
  );
}

export default DueItem;

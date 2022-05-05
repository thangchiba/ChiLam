import styled from "@emotion/styled";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountDays from "../../CommonMethod/DateTimeCalc";
import { dueAction } from "../../store/DueSlice";

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

function Content() {
  const dispatch = useDispatch();
  const listDueFiltered = useSelector((redux) => redux.due.listDueFiltered);
  function handleClickDueContent(due) {
    dispatch(dueAction.openDueDetail(due));
  }
  return listDueFiltered.map((due) => {
    const linkImage = require("../../static/image/icon/".concat(
      due.customerImage
    ));
    let countDays = CountDays(due.date);
    return (
      <StyledContainer
        container
        backgroundColor={
          countDays >= 14
            ? pink[200]
            : countDays >= 7
            ? pink[100]
            : "white"
        }
        key={due.id}
        onClick={() => handleClickDueContent(due)}
      >
        <StyledGrid item xs={5}>
          <Avatar src={linkImage} />
          <Typography noWrap variant="h5">
            {due.customerName}
          </Typography>
        </StyledGrid>
        <StyledGrid item xs={3}>
          <Typography variant="h5">{due.total - due.paid}</Typography>
        </StyledGrid>
        <StyledGrid item xs={4}>
          <Typography variant="h5">
            {countDays + " Ngày"}
          </Typography>
        </StyledGrid>
      </StyledContainer>
    );
  });
}

export default Content;

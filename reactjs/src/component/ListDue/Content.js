import styled from "@emotion/styled";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { Fragment } from "react";

const StyledContainer = styled(Grid)({
  marginBlock: 3,
  // backgroundColor:orange[300],
  height: 45,
  borderRadius: 5,
  borderWidth: 1,
});

const StyledGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  fontSize: 20,
  fontWeight: 700,
});

function Content(props) {
  const { due } = props;
  const linkImage = require("../../static/image/icon/".concat(
    due.customerImage
  ));

  return (
    <Fragment>
      <StyledContainer
        container
        backgroundColor={
          due.countDate >= 14
            ? pink[200]
            : due.countDate >= 7
            ? pink[100]
            : "white"
        }
      >
        <StyledGrid item xs={5}>
          <Avatar src={linkImage} />
          <Typography variant="h5">{due.customerName}</Typography>
        </StyledGrid>
        <StyledGrid item xs={3}>
          <Typography variant="h5">{due.money}</Typography>
        </StyledGrid>
        <StyledGrid item xs={4}>
          <Typography variant="h5">{due.countDate + " Ngày"}</Typography>
        </StyledGrid>
      </StyledContainer>
      <Divider />
    </Fragment>
  );
}

export default Content;

import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Fragment } from "react";

const StyledContainer = styled(Grid)({
  marginBlock: 10,
  backgroundColor: blue[300],
  height: 45,
  borderRadius: 5,
});

const StyledGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 20,
  fontWeight: 700,
  borderRight: "1px solid gray",
});

function Header() {
  return (
    <Fragment>
      <StyledContainer container>
        <StyledGrid item xs={5}>
          Khách Hàng
        </StyledGrid>
        <StyledGrid item xs={3}>
          Thiếu
        </StyledGrid>
        <StyledGrid item xs={4}>
          Thời Gian
        </StyledGrid>
      </StyledContainer>
    </Fragment>
  );
}

export default Header;

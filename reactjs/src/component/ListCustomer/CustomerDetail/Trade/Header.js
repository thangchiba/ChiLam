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
          Ngày
        </StyledGrid>
        <StyledGrid item xs={2}>
          Nợ
        </StyledGrid>
        <StyledGrid item xs={2}>
          Trả
        </StyledGrid>
        <StyledGrid item xs={2}>
          Tổng
        </StyledGrid>
        {/* <StyledGrid
          item
          xs={0}
          sm={4}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          Trả
        </StyledGrid> */}
        <StyledGrid item xs={1}>
          Xóa
        </StyledGrid>
      </StyledContainer>
    </Fragment>
  );
}

export default Header;

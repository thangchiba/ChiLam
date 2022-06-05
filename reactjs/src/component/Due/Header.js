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
        <StyledGrid item xs={5} sm={4}>
          Khách Hàng
        </StyledGrid>

        <StyledGrid item xs={3} sm={2}>
          Số Tiền
        </StyledGrid>
        <StyledGrid item sx={{ display: { xs: "none", sm: "flex" } }} sm={3}>
          Từ Ngày
        </StyledGrid>
        <StyledGrid item xs={4} sm={2}>
          Thời Gian
        </StyledGrid>
        <StyledGrid item sx={{ display: { xs: "none", sm: "flex" } }} sm={1}>
          Xóa
        </StyledGrid>
      </StyledContainer>
    </Fragment>
  );
}

export default Header;

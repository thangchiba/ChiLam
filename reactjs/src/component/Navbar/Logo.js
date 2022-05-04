import { Box, styled, Typography } from "@mui/material";
import { Fragment } from "react";
import meat from "../../static/image/icon/meat.png";
const StyledTypography = styled(Typography)({
  color: "linear-gradient(to right bottom, #36EAEF, #6B0AC9)",
  marginLeft: 10,
});

function Logo() {
  return (
    <Fragment>
      <Box sx={{ display: { md: "none", xs: "block" }, padding: 0 }}>
        <img height={50} width={50} src={meat}></img>
      </Box>
      <StyledTypography
        variant="h3"
        sx={{ display: { md: "block", xs: "none" } }}
      >
        Hoàng Lâm
      </StyledTypography>
    </Fragment>
  );
}

export default Logo;

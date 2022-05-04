import styled from "@emotion/styled";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";
const StyledSelect = styled(Select)({
  maxHeight: 45,
  borderRadius:10,
  marginLeft:15,
});

const StyledItem = styled(MenuItem)({});

function Category() {
  const [category, setCategory] = useState("home");
  function handlerChange(event) {
    setCategory(event.target.value);
  }
  return (
    <StyledSelect
      value={category}
      inputProps={{ "aria-label": "Without label" }}
      onChange={handlerChange}
      sx={{display:{xs:"none",sm:"flex"}}}
    >
      <StyledItem value={"home"}>
        {/* <Link
          to="/products/?category=green"
          style={{ textDecoration: "none", color: "black" }}
        >  */}
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <HomeIcon sx={{ fontSize: 30 }} color="primary" />
          <Typography variant="h6" textAlign={"center"}>
            Trang Chủ
          </Typography>
        </Stack>
        {/* </Link> */}
      </StyledItem>
      <StyledItem value={"customer"}>
        {/* <Link
          to="/products/?category=cloth"
          style={{ textDecoration: "none", color: "black" }}
        > */}
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <AccountCircleRoundedIcon sx={{ fontSize: 30 }} color="secondary" />
          <Typography variant="h6" textAlign={"center"}>
            Khách Hàng
          </Typography>
        </Stack>
        {/* </Link> */}
      </StyledItem>
      <StyledItem value={"pay"}>
        {/* <Link
          to="/products/?category=dehydrated"
          style={{ textDecoration: "none", color: "black" }}
        > */}
        <Stack direction="row" alignItems={"center"} spacing={1}>
          <PaidIcon sx={{ fontSize: 30 }} color="error" />
          <Typography variant="h6" textAlign={"center"}>
            Thanh Toán
          </Typography>
        </Stack>
        {/* </Link> */}
      </StyledItem>
    </StyledSelect>
  );
}
export default Category;

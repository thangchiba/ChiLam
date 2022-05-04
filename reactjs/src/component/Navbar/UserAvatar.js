import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import meat from "../../static/image/icon/meat.png";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HomeIcon from "@mui/icons-material/Home";
import PaidIcon from "@mui/icons-material/Paid";

function UserAvatar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <Fragment>
      <Avatar alt="Hoang Thang" src={meat} onClick={handleClick} sx={{width:50,height:50}} />
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <HomeIcon sx={{ fontSize: 30 }} color="primary" />
            <Typography variant="h6" textAlign={"center"}>
              Trang Chủ
            </Typography>
          </Stack>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <AccountCircleRoundedIcon sx={{ fontSize: 30 }} color="secondary" />
            <Typography variant="h6" textAlign={"center"}>
              Khách Hàng
            </Typography>
          </Stack>
        </MenuItem>
        <Divider/>
        <MenuItem onClick={props.LogOut}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <PaidIcon sx={{ fontSize: 30 }} color="error" />
            <Typography variant="h6" textAlign={"center"}>
              Thanh Toán
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
export default UserAvatar;
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useState } from "react";

function Notification() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <Stack>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={3} color="error">
          <NotificationsActiveIcon sx={{ fontSize: 40 }} color="primary" />
        </Badge>
      </IconButton>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem></MenuItem>
        <Divider />
        <MenuItem></MenuItem>
        <Divider />
        <MenuItem></MenuItem>
      </Menu>
    </Stack>
  );
}

export default Notification;

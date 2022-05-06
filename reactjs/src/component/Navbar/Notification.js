import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  Avatar,
  Badge,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import CountDays from "../../CommonMethod/DateTimeCalc";

function Notification() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  const listDue = useSelector((redux) => redux.due.listDue);
  const listDueWarning = listDue.filter((due) => {
    let countDays = CountDays(due.date);
    return countDays >= 7;
  });
  return (
    <Stack>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={listDueWarning.length} color="error">
          <NotificationsActiveIcon sx={{ fontSize: 40 }} color="primary" />
        </Badge>
      </IconButton>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {listDueWarning.map((due) => {
          return (
            <MenuItem key={due.id}>
              <Avatar
                src={require("../../static/image/icon/".concat(
                  due.customerImage
                ))}
              />
              <Typography variant="h5">
                {due.customerName +
                  " - " +
                  (due.total - due.paid) +
                  " - " +
                  CountDays(due.date) +
                  " Ngày"}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Stack>
  );
}

export default Notification;

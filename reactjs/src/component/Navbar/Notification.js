import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import {
  Badge,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

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
  const listDueWarning = listDue.filter((due) => due.countDate > 7);
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
            <Fragment>
              <MenuItem>
                {due.customerName +
                  " No " +
                  due.money +
                  " " +
                  due.countDate +
                  " Ngay"}
              </MenuItem>
            </Fragment>
          );
        })}
      </Menu>
    </Stack>
  );
}

export default Notification;

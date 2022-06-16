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
  const listCustomerRedux = useSelector((redux) => redux.customer.listCustomer);
  const listWarning = listCustomerRedux.filter((customer) => {
    let countDays = CountDays(customer.lastPayDate);
    return countDays >= 1;
  });
  return (
    <Stack>
      <IconButton onClick={handleClick}>
        <Badge badgeContent={listWarning.length} color="error">
          <NotificationsActiveIcon sx={{ fontSize: 40 }} color="primary" />
        </Badge>
      </IconButton>
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        {listWarning.map((customer) => {
          return (
            <MenuItem key={customer.customerId}>
              {/* <Avatar
                src={require("../../static/image/icon/".concat(
                  due.customerImage
                ))}
              /> */}
              <Typography variant="h5">
                {customer.customerName +
                  " - " +
                  customer.totalMoney +
                  " - " +
                  CountDays(customer.lastPayDate) +
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

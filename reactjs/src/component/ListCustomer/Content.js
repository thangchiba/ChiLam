import styled from "@emotion/styled";
import { Avatar, Grid, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountDays from "../../CommonMethod/DateTimeCalc";
import { customerAction } from "../../store/CustomerSlice";
import { dueAction } from "../../store/DueSlice";
import customerAPI from "../HTTP_Request/CustomerAPI";

const StyledContainer = styled(Grid)({
  marginBlock: 5,
  height: 45,
  borderRadius: 5,
  borderWidth: 1,
});

const StyledGrid = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  paddingInline: 3,
  fontSize: 20,
  fontWeight: 700,
  borderRight: "0.1px solid gray",
});

function Content() {
  const dispatch = useDispatch();
  const listCustomer = useSelector((redux) => redux.customer.listCustomer);
  useEffect(() => {
    const getCustomer = async () => {
      const response = await customerAPI.getCustomer();
      dispatch(customerAction.setListCustomer({ listCustomer: response }));
    };
    getCustomer();
  }, []);
  return listCustomer.map((customer) => {
    // const linkImage = require("../../static/image/icon/".concat(
    //   customer.image
    // ));
    return (
      <StyledContainer
        container
        // backgroundColor={
        //   countDays >= 14 ? pink[200] : countDays >= 7 ? pink[100] : "white"
        // }
        key={customer.customerId}
        // onClick={() => handleClickDueContent(due)}
      >
        <StyledGrid item xs={6}>
          {/* <Avatar src={linkImage} /> */}
          <Typography noWrap variant="h5">
            {customer.customerName}
          </Typography>
        </StyledGrid>
        <StyledGrid item xs={3}>
          <Typography variant="h5">{customer.totalMoney}</Typography>
        </StyledGrid>
        <StyledGrid item xs={3}>
          <Typography variant="h5">
            {CountDays(customer.lastPayDate)}
          </Typography>
        </StyledGrid>
      </StyledContainer>
    );
  });
}

export default Content;

import styled from "@emotion/styled";
import { AddCircleOutlined } from "@mui/icons-material";
import { Button, CircularProgress, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import CountDays from "../../CommonMethod/DateTimeCalc";
import { customerAction } from "../../store/CustomerSlice";
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
    async function getCustomer() {
      const response = await customerAPI.getCustomer({
        orderBy: "customer_id",
      });
      dispatch(customerAction.setListCustomer({ listCustomer: response }));
    }
    getCustomer();
  }, []);

  return (
    <Fragment>
      <StyledContainer
        container
        sx={{ position: "sticky", backgroundColor: blue[200] }}
      >
        <StyledGrid item xs={6}>
          Tên Khách Hàng
        </StyledGrid>
        <StyledGrid item xs={3}>
          Thiếu
        </StyledGrid>
        <StyledGrid item xs={3}>
          Thời Gian
        </StyledGrid>
      </StyledContainer>
      <StyledContainer>
        {listCustomer.map((customer) => {
          // const linkImage = require("../../static/image/icon/".concat(
          //   customer.image
          // ));
          return (
            <StyledContainer
              container
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
        })}
      </StyledContainer>
    </Fragment>
  );
}

export default Content;

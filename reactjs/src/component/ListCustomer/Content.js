import styled from "@emotion/styled";
import { Grid, Modal, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountDays from "../../CommonMethod/DateTimeCalc";
import { customerAction } from "../../store/CustomerSlice";
import customerAPI from "../HTTP_Request/CustomerAPI";
import CustomerDetail from "./CustomerDetail";

const StyledContainer = styled(Grid)({
  marginBlock: 5,
  height: 45,
  borderRadius: 5,
  borderWidth: 1,
  cursor: "pointer",
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
        orderBy: "customer_id desc",
      });
      dispatch(customerAction.setListCustomer({ listCustomer: response }));
    }
    getCustomer();
  }, []);

  //Customer Detail Modal
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedCustomer, selectCustomer] = useState({});
  function handleSelectCustomer(customer) {
    setOpenDetail(true);
    selectCustomer(customer);
  }
  function handleCloseModal() {
    selectCustomer(null);
  }
  return (
    <Fragment>
      {selectedCustomer && (
        <CustomerDetail
          open={openDetail}
          setOpen={setOpenDetail}
          customer={selectedCustomer}
          onClose={handleCloseModal}
        />
      )}
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
              onClick={() => handleSelectCustomer(customer)}
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

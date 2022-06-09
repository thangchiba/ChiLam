import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import CountDays from "../../../../CommonMethod/DateTimeCalc";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import tradeAPI from "../../../HTTP_Request/TradeAPI";
import { tradeAction } from "../../../../store/TradeSlice";
import { useDispatch } from "react-redux";
import { GetDateVietnamese } from "../../../../CommonMethod/DateTimeCalc";
import { customerAction } from "../../../../store/CustomerSlice";
import { green, pink } from "@mui/material/colors";
const StyledContainer = styled(Grid)({
  marginBlock: 5,
  // backgroundColor:orange[300],
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

function TradeItem({ trade, customer, setCustomer }) {
  const dispatch = useDispatch();
  let countDays = CountDays(trade.createDate);
  async function handleDeleteTrade() {
    const data = {
      tradeId: trade.tradeId,
    };
    const response = await tradeAPI.deleteTrade(data);
    console.log(response);
    if (response) {
      dispatch(tradeAction.deleteTrade({ trade: response }));
      // dispatch(
      //   customerAction.updateCustomer({ customer: response.updatedCustomer })
      // );
      setCustomer(response.updatedCustomer);
    }
  }
  return (
    <StyledContainer
      container
      backgroundColor={trade.isDue ? pink[50] : green[50]}
      key={trade.tradeId}
      // onClick={() => handleClickTradeContent(trade)}
    >
      <StyledGrid item xs={4} sm={3}>
        <Typography variant="h5">{trade.money}</Typography>
      </StyledGrid>
      <StyledGrid item xs={6} sm={4}>
        <Typography variant="h5">
          {GetDateVietnamese(trade.createDate)}
        </Typography>
      </StyledGrid>
      <StyledGrid
        item
        xs={0}
        sm={4}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Typography variant="h5">{countDays + " Ngày"}</Typography>
      </StyledGrid>
      <StyledGrid item xs={2} sm={1}>
        <RemoveCircleOutlineIcon
          sx={{ fontSize: 35, color: "red", marginLeft: 1, cursor: "pointer" }}
          onClick={handleDeleteTrade}
        />
      </StyledGrid>
    </StyledContainer>
  );
}

export default TradeItem;

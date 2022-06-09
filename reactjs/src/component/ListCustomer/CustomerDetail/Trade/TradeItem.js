import styled from "@emotion/styled";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Grid, Typography } from "@mui/material";
import { green, pink } from "@mui/material/colors";
import CountDays, {
  GetDateVietnamese,
} from "../../../../CommonMethod/DateTimeCalc";
import tradeAPI from "../../../HTTP_Request/TradeAPI";
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

function TradeItem({ trade, removeTrade }) {
  let countDays = CountDays(trade.createDate);
  async function handleDeleteTrade() {
    const data = {
      tradeId: trade.tradeId,
    };
    const response = await tradeAPI.deleteTrade(data);
    if (response) {
      removeTrade(response);
    }
  }
  return (
    <StyledContainer
      container
      backgroundColor={trade.isDue ? pink[50] : green[50]}
      key={trade.tradeId}
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

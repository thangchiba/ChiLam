import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  //List Global Trade Add from every where
  listTrade: [],
  customerAfterAddTrade: {},
};

const TradeSlice = createSlice({
  name: "trade",
  initialState: InitialState,
  reducers: {
    addListTrade(state, action) {
      const { listTrade } = action.payload;
      state.listTrade = state.listTrade.concat(listTrade);
    },
    addTrade(state, action) {
      const { trade, customer } = action.payload;
      state.listTrade.unshift(trade);
      state.customerAfterAddTrade = customer;
    },
    deleteTrade(state, action) {
      const { trade } = action.payload;
      state.listTrade = state.listTrade.filter(
        (item) => item.tradeId !== trade.tradeId
      );
    },
    openTradeDetail(state, action) {
      state.tradeDetail.open = true;
      state.tradeDetail.trade = action.payload;
    },
    closeTradeDetail(state) {
      state.tradeDetail.open = false;
      state.tradeDetail.trade = null;
    },
  },
});

export const tradeAction = TradeSlice.actions;
export default TradeSlice;

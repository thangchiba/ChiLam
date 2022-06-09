import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./CustomerSlice";
import DueSlice from "./DueSlice";
import SearchSlice from "./SearchSlice";
import TradeSlice from "./TradeSlice";

const store = configureStore({
  reducer: {
    due: DueSlice.reducer,
    customer: CustomerSlice.reducer,
    search: SearchSlice.reducer,
    trade: TradeSlice.reducer,
  },
});

export default store;

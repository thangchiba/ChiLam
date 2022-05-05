import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./CustomerSlice";
import DueSlice from "./DueSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    due: DueSlice.reducer,
    customer: CustomerSlice.reducer,
    search: SearchSlice.reducer,
  },
});

export default store;

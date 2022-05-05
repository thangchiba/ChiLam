import { configureStore } from "@reduxjs/toolkit";
import CustomerSlice from "./CustomerSlice";
import DueSlice from "./DueSlice";

const store = configureStore({
  reducer: { due: DueSlice.reducer, customer: CustomerSlice.reducer },
});

export default store;

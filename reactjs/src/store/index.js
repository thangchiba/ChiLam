import { configureStore } from "@reduxjs/toolkit";
import DueSlice from "./DueSlice";


const store = configureStore({
  reducer: { due : DueSlice.reducer },
});

export default store;
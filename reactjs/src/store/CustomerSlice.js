import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  listCustomer: [],
};
const CustomerSlice = createSlice({
  name: "customer",
  initialState: InitialState,
  reducers: {
    setListCustomer(state, action) {
      const { listCustomer } = action.payload;
      state.listCustomer = listCustomer;
    },
    addCustomer(state, action) {
      const { customer } = action.payload;
      state.listCustomer.push(customer);
    },
  },
});

export const customerAction = CustomerSlice.actions;
export default CustomerSlice;

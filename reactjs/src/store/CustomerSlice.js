import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  listCustomer: [
    {
      id: "c1",
      name: "Tự Long",
      image: "tulong.jpeg",
    },
    {
      id: "c2",
      name: "Xuân Bắc",
      image: "xuanbac.jpeg",
    },
    {
      id: "c3",
      name: "Xuân Hinh",
      image: "xuanhinh.jpeg",
    },
    {
      id: "c4",
      name: "Thắng",
      image: "chienthang.webp",
    },
  ],
};
const CustomerSlice = createSlice({
  name: "customer",
  initialState: InitialState,
  reducers: {
    // changeLoginState(state){
    //     state.isLoggedIn = !state.isLoggedIn;
    // }
  },
});

export const customerAction = CustomerSlice.actions;
export default CustomerSlice;

import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  listDue: [
    {
      customerName: "Tự Long",
      customerImage: "tulong.jpeg",
      money: 1650,
      countDate: 8,
    },
    {
      customerName: "Xuân Bắc",
      customerImage: "xuanbac.jpeg",
      money: 850,
      countDate: 3,
    },
    {
      customerName: "Xuân Hinh",
      customerImage: "xuanhinh.jpeg",
      money: 2840,
      countDate: 19,
    },
    {
      customerName: "Thắng",
      customerImage: "chienthang.webp",
      money: 250,
      countDate: 1,
    },
  ],
};

const DueSlice = createSlice({
  name: "due",
  initialState: InitialState,
  reducers: {
    // changeLoginState(state) {
    //   state.isLoggedIn = !state.isLoggedIn;
    // },
  },
});

export const dueAction = DueSlice.actions;
export default DueSlice;

import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  listDue: [
    {
      customerName: "Tự Long",
      customerImage: "tulong.jpeg",
      total: 1650,
      paid: 250,
      countDate: 8,
    },
    {
      customerName: "Xuân Bắc",
      customerImage: "xuanbac.jpeg",
      total: 850,
      paid: 0,
      countDate: 3,
    },
    {
      customerName: "Xuân Hinh",
      customerImage: "xuanhinh.jpeg",
      total: 2840,
      paid: 250,
      countDate: 19,
    },
    {
      customerName: "Thắng",
      customerImage: "chienthang.webp",
      total: 250,
      paid: 0,
      countDate: 1,
    },
    {
      customerName: "Thắng",
      customerImage: "chienthang.webp",
      total: 250,
      paid: 0,
      countDate: 1,
    },
    {
      customerName: "Thắng",
      customerImage: "chienthang.webp",
      total: 250,
      paid: 0,
      countDate: 1,
    },
    {
      customerName: "Xuân Bắc",
      customerImage: "xuanbac.jpeg",
      total: 200,
      paid: 0,
      countDate: 21,
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

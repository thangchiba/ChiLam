import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  listDue: [
    {
      id: 1,
      customerName: "Tự Long",
      customerImage: "tulong.jpeg",
      total: 1650,
      paid: 250,
      countDate: 8,
      date:new Date("04/28/2022"),
    },
    {
      id: 2,
      customerName: "Xuân Bắc",
      customerImage: "xuanbac.jpeg",
      total: 850,
      paid: 0,
      countDate: 3,
      date:new Date("05/1/2022"),
    },
    {
      id: 3,
      customerName: "Xuân Hinh",
      customerImage: "xuanhinh.jpeg",
      total: 2840,
      paid: 250,
      countDate: 19,
      date:new Date("03/20/2022"),
    },
    {
      id: 4,
      customerName: "Chiến Thắng",
      customerImage: "chienthang.webp",
      total: 250,
      paid: 0,
      countDate: 1,
      date:new Date("05/3/2022"),
    },
    {
      id: 5,
      customerName: "Chiến Thắng",
      customerImage: "chienthang.webp",
      total: 250,
      paid: 0,
      countDate: 1,
      date:new Date("04/29/2022"),
    },
    {
      id: 6,
      customerName: "Chiến Thắng",
      customerImage: "chienthang.webp",
      total: 250,
      paid: 0,
      countDate: 1,
      date:new Date("04/30/2022"),
    },
    {
      id: 7,
      customerName: "Xuân Bắc",
      customerImage: "xuanbac.jpeg",
      total: 200,
      paid: 0,
      countDate: 21,
      date:new Date("04/20/2022"),
    },
  ],
  listDueFiltered: [],
  dueDetail: {
    open: false,
    due: null,
  },
};

const DueSlice = createSlice({
  name: "due",
  initialState: InitialState,
  reducers: {
    filterByCustomerName(state, action) {
      state.listDueFiltered = state.listDue.filter((due) =>
        due.customerName.includes(action.payload)
      );
    },
    openDueDetail(state, action) {
      state.dueDetail.open = true;
      state.dueDetail.due = action.payload;
    },
    closeDueDetail(state) {
      state.dueDetail.open = false;
      state.dueDetail.due = null;
    },
  },
});

export const dueAction = DueSlice.actions;
export default DueSlice;

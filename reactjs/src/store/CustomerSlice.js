import { createSlice } from '@reduxjs/toolkit'

const InitialState = {
    listCustomer: [
      {
        name: "Tự Long",
        image: "tulong.jpeg",
      },
      {
        name: "Xuân Bắc",
        image: "xuanbac.jpeg",
      },
      {
        name: "Xuân Hinh",
        image: "xuanhinh.jpeg",
      },
      {
        name: "Thắng",
        image: "chienthang.webp",
      },
    ],
  };
const CustomerSlice = createSlice({
    name : 'customer',
    initialState : InitialState,
    reducers:{
        // changeLoginState(state){
        //     state.isLoggedIn = !state.isLoggedIn;
        // }
    }
});

export const customerAction = CustomerSlice.actions;
export default CustomerSlice;
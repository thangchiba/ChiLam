import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  //List Global Due Add from every where
  listDue: [],
};

const DueSlice = createSlice({
  name: "due",
  initialState: InitialState,
  reducers: {
    addDue(state, action) {
      const { due } = action.payload;
      state.listDue.unshift(due);
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

import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  searchContent: "",
};
const SearchSlice = createSlice({
  name: "search",
  initialState: InitialState,
  reducers: {
    // changeLoginState(state){
    //     state.isLoggedIn = !state.isLoggedIn;
    // }
  },
});

export const searchAction = SearchSlice.actions;
export default SearchSlice;

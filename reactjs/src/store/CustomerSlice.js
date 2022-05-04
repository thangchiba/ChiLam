import { createSlice } from '@reduxjs/toolkit'

const InitialState = { isLoggedIn : false };

const CustomerSlice = createSlice({
    name : 'login',
    initialState : InitialState,
    reducers:{
        changeLoginState(state){
            state.isLoggedIn = !state.isLoggedIn;
        }
    }
});

export const customerAction = CustomerSlice.actions;
export default CustomerSlice;
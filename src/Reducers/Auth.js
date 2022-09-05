import { createSlice } from "@reduxjs/toolkit";

const Auth = createSlice({
    name: "AuthSlice",
    initialState: { cart: false },
    reducers: {
        login: (state) => {
            state.cart = true;
        },
        logout: (state) => {
            state.cart = false;
        }
    }
})

export const { login, logout } = Auth.actions;
export default Auth.reducer;
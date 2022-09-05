import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name: "Cart",
    initialState: { auth: 1 },
    reducers: {
        add: (state) => {
            state.auth = state.auth+1;
        },
        minus: (state) => {
            state.auth = state.auth-1;
        }
    }
})

export const { add, minus } = Cart.actions;
export default Cart.reducer;
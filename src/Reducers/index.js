import { configureStore } from "@reduxjs/toolkit";
import Auth from "./Auth";
import Cart from "./Cart";

export default configureStore({
   reducer:{
    auth:Auth,
    cart: Cart
   }
})

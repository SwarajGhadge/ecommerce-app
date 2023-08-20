import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,       //he cart name imp ahe , he name navbar mdhe use hoil use selector la
  },
});


//cartSlice and cart chya jagi kahihi lihu shkto
export default store;

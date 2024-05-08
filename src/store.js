import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./slices/OptionCategorySlice";
import cartItemsReducer from "./slices/CartItemsSlice";

export const store = configureStore({
    reducer: {
        options: optionReducer,
        cartItems: cartItemsReducer
    }
})
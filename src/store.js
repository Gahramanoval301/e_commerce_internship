import { configureStore } from "@reduxjs/toolkit";
import optionReducer from "./slices/OptionCategorySlice";

export const store = configureStore({
    reducer: {
        options: optionReducer,
    }
})
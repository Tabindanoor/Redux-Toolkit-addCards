import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slice.jsx";
export const store = configureStore({
    reducer: {
        product: productSlice
    }
})
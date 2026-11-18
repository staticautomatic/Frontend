import { configureStore } from "@reduxjs/toolkit";
import filesReducer from "./fileSlices";

export const store = configureStore({
    reducer: {
        files: filesReducer,
    }
})

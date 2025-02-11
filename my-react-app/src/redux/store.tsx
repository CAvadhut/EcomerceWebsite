import { configureStore } from "@reduxjs/toolkit";
import ecartDataReducer from "./slices/counter/ecartDataReducer";
import ecartWishlistReducer from "./slices/counter/ecartWishlist";

export const store = configureStore({
    reducer: {
        ecartData: ecartDataReducer,
        ecartWishlist: ecartWishlistReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

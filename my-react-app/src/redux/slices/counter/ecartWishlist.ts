import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];  // ✅ Set initial state as an array

export const ecartWishlistSlice = createSlice({
    name: "ecartWishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload); 
        },
        removeToWishlist: (state, action) => {
            state.pop(action.payload);  
        }
    }
});

export const { addToWishlist, removeToWishlist } = ecartWishlistSlice.actions;
export default ecartWishlistSlice.reducer;

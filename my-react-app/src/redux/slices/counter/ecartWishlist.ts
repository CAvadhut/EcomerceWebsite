import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];  // ✅ Set initial state as an array

export const ecartWishlistSlice = createSlice({
    name: "ecartWishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.push(action.payload); 
        },
        // removeToWishlist: (state, action) => {
        //     state.pop(action.payload);  
        // }
        // removeToWishlist: (state, action: PayloadAction<number>) => {
        //     return state
        //       .map((item) =>
        //         item.id === action.payload
        //           ? { ...item, quantity: item.quantity }
        //           : item
        //       )
        //       .filter((item) => item.quantity - 0); // Removes item if quantity is 0
        //   },
        removeToWishlist: (state, action) => {
            const index = state.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        }
        
    }
});

export const { addToWishlist, removeToWishlist } = ecartWishlistSlice.actions;
export default ecartWishlistSlice.reducer;

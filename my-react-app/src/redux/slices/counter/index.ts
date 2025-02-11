import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: [],
    reducers: {
        ecartData: (state, action) => {
            state.push(action.payload);
        },
        ecartWishlist:(state,action)=>{
            state.push(action.payload);
        }
    }
});

export const { ecartData,ecartWishlist } = counterSlice.actions;
export default counterSlice.reducer;

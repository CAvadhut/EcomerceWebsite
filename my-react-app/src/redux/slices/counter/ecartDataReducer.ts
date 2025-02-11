import { createSlice } from "@reduxjs/toolkit";

export const ecartDataSlice = createSlice({
    name: "ecartData",
    initialState: [],
    reducers: {
        addToEcartData: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
          },
        
    }
});

export const { addToEcartData } = ecartDataSlice.actions;
export default ecartDataSlice.reducer;


// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../store";

// // Define Cart Item Type
// interface CartItem {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   images: string[];
//   availabilityStatus: string;
//   brand: string;
//   quantity: number; // Quantity of the same product
// }

// // Define Initial State
// interface CartState {
//   items: CartItem[];
// }

// const initialState: CartState = {
//   items: [],
// };

// Create Cart Slice
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
//       const existingItem = state.items.find((item) => item.id === action.payload.id);
      
//       if (existingItem) {
//         existingItem.quantity += 1; // If product exists, increase quantity
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 }); // Add new product with quantity 1
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<number>) => {
//       state.items = state.items.filter((item) => item.id !== action.payload);
//     },
//     decreaseCartItem: (state, action: PayloadAction<number>) => {
//       const item = state.items.find((item) => item.id === action.payload);
//       if (item) {
//         if (item.quantity > 1) {
//           item.quantity -= 1;
//         } else {
//           state.items = state.items.filter((item) => item.id !== action.payload);
//         }
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// // Export Actions
// export const { addToCart, removeFromCart, decreaseCartItem, clearCart } = cartSlice.actions;

// // Selector
// export const selectCart = (state: RootState) => state.cart.items;

// // Export Reducer
// export default cartSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string[];
  quantity: number;
}

export const ecartDataSlice = createSlice({
    name: "ecartData",
    initialState: [] as CartItem[],
    reducers: {
        addToEcartData : (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
            const existingItem = state.find((item) => item.id === action.payload.id);
            
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
          },
    //      removeFromCart: (state, action: PayloadAction<number>) => {
    //   state = state.filter((item) => item.id !== action.payload);
    // },

    removeFromCart: (state, action) => {
            // state.pop(action.payload);  
            console.log(action);
            const existingItem = state.find((item) => item.id === action.payload.id);
            console.log(existingItem?.quantity,'existingItem');
            
            if (existingItem && existingItem.quantity > 1)  {
              existingItem.quantity -= 1;
            } else {
              return state
          .map((item) =>
            
            item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
          )
          .filter((item) => item.quantity > 1); 
        }
      }
    
    // removeFromCart: (state, action: PayloadAction<number>) => {
    //   return state
    //     .map((item) =>
    //       item.id === action.payload
    //         ? { ...item, quantity: item.quantity - 1 }
    //         : item
    //     )
    //     .filter((item) => item.quantity > 1); // Removes item if quantity is 0
    // },
    }
});

export const { addToEcartData,removeFromCart } = ecartDataSlice.actions;
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


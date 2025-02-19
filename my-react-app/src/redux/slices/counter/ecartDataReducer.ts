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
            console.log(existingItem,'existingItem');
            
            
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.push({ ...action.payload, quantity: 1 });
            }
          },
    removeFromCart: (state, action) => { 
            console.log(action);
            const existingItem = state.find((item) => item.id === action.payload.id);
            console.log(existingItem?.quantity,'existingItem');
            
            if (existingItem && existingItem.quantity >= 1)  {
              existingItem.quantity -= 1;
            } else {
              return state
          .map((item) =>
            
            item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
          )
          .filter((item) => item.quantity > 0); 
        }
      }
    }
});

export const { addToEcartData,removeFromCart } = ecartDataSlice.actions;
export default ecartDataSlice.reducer;

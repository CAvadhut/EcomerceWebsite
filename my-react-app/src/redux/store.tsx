import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ecartDataReducer from "./slices/counter/ecartDataReducer";
import ecartWishlistReducer from "./slices/counter/ecartWishlist";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
    key: 'root',
    storage,
  }
  const rootReducer = combineReducers({
    ecartData: ecartDataReducer,
    ecartWishlist: ecartWishlistReducer
  })
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
   
export const store = configureStore({
    reducer:persistedReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)

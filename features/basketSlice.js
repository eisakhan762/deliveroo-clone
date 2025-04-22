import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.payload.id}) as it's not in the basket!`);
      }
      state.items = newBasket;
      // state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  }  
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

// ✅ Memoized selector with parameter
export const selectBasketItemsWithId = createSelector(
  [
    (state) => state.basket.items,
    (_, id) => id
  ],
  (items, id) => items.filter((item) => item.id === id)
);
export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;

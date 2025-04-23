import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  restaurant: {
    id: null,
    imgUrl: null,
    title: null,
    short_description: null,
    rating: null,
    genre: null,
    address: null,
    dishes: null,
  }
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  }  
});

export const { setRestaurant } = restaurantSlice.actions;

export const selectRestaurant = (state) => state.restaurant.restaurant;
export default restaurantSlice.reducer;

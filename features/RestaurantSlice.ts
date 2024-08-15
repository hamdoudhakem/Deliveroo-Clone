import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DishRowProps } from "../components/DishRow";

export interface RestaurantState {
  restaurant: {
    id: string;
    title: string;
    imgUrl: string;
    rating: string;
    genre: string;
    address: string;
    shortDescription: string;
    long: string;
    lat: string;
  };
}

const initialState: RestaurantState = {
  restaurant: {
    id: "",
    title: "",
    imgUrl: "",
    rating: "",
    genre: "",
    address: "",
    shortDescription: "",
    long: "",
    lat: "",
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<RestaurantState>) => {
      state.restaurant = action.payload.restaurant;
    },
    clearRestaurant: (state) => {
      state.restaurant = initialState.restaurant;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant, clearRestaurant } = restaurantSlice.actions;

export const restaurantSelector = (state: RootState) =>
  state.restaurant.restaurant;

export default restaurantSlice.reducer;

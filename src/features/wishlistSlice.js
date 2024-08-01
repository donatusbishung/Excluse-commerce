import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    itemCount: 0,
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
      state.itemCount = state.items.length;
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.itemCount = state.items.length;
    },
    moveToCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToWishlist, removeFromWishlist, moveToCart } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;

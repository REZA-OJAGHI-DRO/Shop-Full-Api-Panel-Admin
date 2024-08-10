import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  ShopProduct: [],
  totalAllProduct: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setShopProduct: (state, action) => {
      state.ShopProduct = action.payload;
    },
    removeFromShopProduct: (state, action) => {
      state.ShopProduct = state.ShopProduct.filter((item) => item.id !== action.payload);
    },
    updateTotalAllProduct: (state, action) => {
      state.totalAllProduct = action.payload;
    },
  },
});

export const { 
  setShopProduct, 
  updateTotalAllProduct,
  removeFromShopProduct
} = productSlice.actions;

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});


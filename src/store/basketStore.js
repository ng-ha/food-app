import { createSelector, createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.product._id === action.payload.product._id
      );
      if (index !== -1) {
        state.items[index].quantity += action.payload.quantity;
      } else {
        state.items = [...state.items, action.payload];
      }
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.product._id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        console.warn(`Cant remove product (id: ${action.payload}) as its not in basket!`);
      }
    },
  },
});
export const { addItem, removeItem } = basketSlice.actions;

export const selectAllItems = (state) => state.basket.items;
export const selectItemsWithId = (id) => (state) =>
  state.basket.items.filter((item) => item.product._id === id);
export const selectTotalPrice = createSelector(selectAllItems, (items) =>
  items.reduce((total, item) => (total += item.product.price), 0)
);
export const selectTotalCount = createSelector(selectAllItems, (items) =>
  items.reduce((total, item) => (total += item.quantity), 0)
);

export default basketSlice.reducer;

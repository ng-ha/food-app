import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: null,
    username: null,
    address: null,
    postalCode: null,
    paymentMethod: null,
  },
  reducers: {
    setEmail: (state, action) => void (state.email = action.payload),
    setUsername: (state, action) => void (state.username = action.payload),
    setAddress: (state, action) => void (state.address = action.payload),
    setPaymentMethod: (state, action) => void (state.paymentMethod = action.payload),
    setPostalCode: (state, action) => void (state.postalCode = action.payload),
  },
});
export const { setAddress, setEmail, setPaymentMethod, setPostalCode, setUsername } =
  userSlice.actions;
export const selectEmail = (state) => state.user.email;
export const selectUsername = (state) => state.user.username;
export const selectAddress = (state) => state.user.address;
export const selectPostalCode = (state) => state.user.postalCode;
export const selectPaymentMethod = (state) => state.user.paymentMethod;

export default userSlice.reducer;

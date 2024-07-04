import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 0,
};

const ticketSlice = createSlice({
  name: 'ticket',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = ticketSlice.actions;

export default ticketSlice.reducer;

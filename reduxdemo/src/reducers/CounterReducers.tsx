import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state: any) {
      state.count++;
    },
    decrement(state: any) {
      state.count--;
    },
    reset(state: any) {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

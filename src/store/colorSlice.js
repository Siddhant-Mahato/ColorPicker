// colorSlice.js

import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: null,
  reducers: {
    setSelectedColor: (state, action) => {
      return action.payload; // Return the payload as the new state
    },
  },
});

export const { setSelectedColor } = colorSlice.actions;
export default colorSlice.reducer;

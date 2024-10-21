import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: 0,
};

export const commonSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = commonSlice.actions;

export default commonSlice.reducer;

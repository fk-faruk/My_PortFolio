import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  color: "white",
  text: "black",
  dark: true,
  // button: "white",
};

export const themeSlice = createSlice({
  name: "ThemeSlice",
  initialState: { value: InitialState },
  reducers: {
    Theme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default themeSlice.reducer;

export const { Theme } = themeSlice.actions;

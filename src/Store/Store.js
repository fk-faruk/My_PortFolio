import { configureStore } from "@reduxjs/toolkit";
import Theme from "../Store/Index";
const Store = configureStore({
  reducer: {
    theme: Theme,
  },
});

export default Store;

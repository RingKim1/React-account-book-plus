import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "../slices/expensesSlice.js";
import activeIndexSlice from "../slices/activeIndexSlice.js";

const store = configureStore({
  reducer: { expenses: expensesSlice, activeIndex: activeIndexSlice },
});

export default store;

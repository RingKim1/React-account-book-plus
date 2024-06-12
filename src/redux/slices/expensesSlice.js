import { createSlice } from "@reduxjs/toolkit";
import fakeData from "../../assets/fakeData";
import Swal from "sweetalert2";

const initialState = fakeData;

const expensesSlice = createSlice({
  name: "expenses",
  initialState: initialState,
  reducers: {
    addExpense: (state, action) => [...state, action.payload],
    removeItem: (state, action) =>
      state.filter((el) => String(el.id) !== action.payload),
    modifyItem: (state, action) =>
      state.map((el) =>
        String(el.id) === action.payload.id
          ? {
              ...el,
              date: action.payload.dateRef,
              category: action.payload.categoryRef,
              amount: action.payload.amountRef,
              content: action.payload.contentRef,
            }
          : el
      ),
  },
});

export const { addExpense, removeItem, modifyItem } = expensesSlice.actions;
export default expensesSlice.reducer;

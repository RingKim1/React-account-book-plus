import { createSlice } from "@reduxjs/toolkit";

const initialState = Number(localStorage.getItem("index")) ?? 0;

const activeIndexSlice = createSlice({
  name: "activeIndex",
  initialState: initialState,
  reducers: { isClick: (state, action) => (state = action.payload) },
});

export const { isClick } = activeIndexSlice.actions;
export default activeIndexSlice.reducer;

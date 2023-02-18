import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ReservationsState {
  value: string[];
}

const initialState: ReservationsState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const {} = reservationsSlice.actions;

export default reservationsSlice;

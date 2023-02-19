import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CustomerState {
  value: Customer[];
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface AddFoodToCustomerPayload {
  id: string;
  food: string;
}

const initialState: CustomerState = {
  value: [
    // { id: "123", name: "John Doe", food: ["Burger", "Pizza"] }
  ],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomerMenu: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addCustomerFood: (
      state,
      action: PayloadAction<AddFoodToCustomerPayload>
    ) => {
      state.value.forEach((itm) => {
        if (itm.id === action.payload.id) {
          itm.food.push(action.payload.food);
        }
      });
    },
    removeCustomerMenu: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCustomerMenu, addCustomerFood, removeCustomerMenu } =
  customerSlice.actions;

export default customerSlice;

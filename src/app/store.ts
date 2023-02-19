import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "../features/customerSlice";
import { reservationsSlice } from "../features/reservationSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsSlice.reducer,
    customer: customerSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

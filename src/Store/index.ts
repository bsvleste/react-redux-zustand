import { player } from "./slices/player";
import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";

// const todoSlice = createSlice({
//   name: "todo",
//   initialState: ["fazer cafe"],
//   reducers: {
//     add: (state, action) => {
//       state.push(action.payload.newTodo);
//     },
//   },
// });
export const store = configureStore({
  reducer: { player },
});
//export const { add } = todoSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

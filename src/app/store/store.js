import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice";
import orderReducer from "./orderSlice";
import usersReducer from "./users";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
  order: orderReducer,
  users: usersReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

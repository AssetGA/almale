import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";
import productReducer from "./products";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

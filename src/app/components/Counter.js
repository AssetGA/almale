"use client";

import React from "react";
import {
  decrement,
  decrementElem,
  increment,
  incrementElem,
} from "../store/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="fle justify-center mx-auto">
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementElem())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrementElem())}
      >
        Decrement
      </button>
    </div>
  );
}

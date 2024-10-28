"use client";

import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { createStore } from "./store/store";
import { loadProductList } from "./store/productSlice";

export default function StoreProvider({ children, lang }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = createStore();
  }

  useEffect(() => {
    // Обновляем список продуктов при изменении языка
    storeRef.current.dispatch(loadProductList({ lang: lang }));
  }, [lang]);

  return <Provider store={storeRef.current}>{children}</Provider>;
}

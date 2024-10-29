import { createSlice } from "@reduxjs/toolkit";
import orderService from "../service/order.service";

// Начальное состояние
const initialState = {
  productOrder: {},
  errorOrder: null,
};

// Слайс для продуктов
const orderSlice = createSlice({
  name: "orderRedux",
  initialState,
  reducers: {
    loadOrderState: (state) => {
      state.orderRedux;
    },
    // Действие для успешной загрузки продуктов
    orderReceived: (state, action) => {
      state.orderRedux = action.payload;
    },
    // Действие при ошибке загрузки
    orderRequestFailed(state, action) {
      state.errorOrder = action.payload;
    },
    // Добавление продукта
    updateOrderProduct(state, action) {
      state.orderRedux = action.payload;
    },
  },
});

const { reducer: orderReducer, actions } = orderSlice;

// Экспортируем действия
const {
  loadOrderState,
  orderRequested,
  orderReceived,
  orderRequestFailed,
  updateOrderProduct,
} = actions;

export const loadOrder = () => async (dispatch) => {
  dispatch(loadOrderState());
};

export const orderCreate = (payload) => async (dispatch) => {
  try {
    const data = await orderService.create(payload);
  } catch (error) {
    dispatch(orderRequestFailed(error.message));
  }
};

// Экспортируем сам редьюсер для использования в store
export default orderReducer;

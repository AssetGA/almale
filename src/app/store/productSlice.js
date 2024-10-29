import { createSlice } from "@reduxjs/toolkit";
import productService from "../service/product.service";

// Начальное состояние
const initialState = {
  entity: [],
  isLoading: false,
  error: null,
  dataLoaded: false,
};

// Слайс для продуктов
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productRequested: (state) => {
      state.isLoading = true;
    },
    // Действие для успешной загрузки продуктов
    productReceived: (state, action) => {
      state.entity = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    // Действие при ошибке загрузки
    productRequestFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Добавление продукта
    addProduct(state, action) {
      state.products.push(action.payload);
    },
  },
});

const { reducer: productReducer, actions } = productSlice;

// Экспортируем действия
const {
  productRequested,
  productReceived,
  productRequestFailed,
  fetchProductsFailure,
} = actions;

export const loadProductList = (payload) => async (dispatch) => {
  dispatch(productRequested());
  try {
    const { content } = await productService.get(payload);
    dispatch(productReceived(content));
  } catch (error) {
    dispatch(productRequestFailed(error.message));
  }
};

export const getProductById = () => (state) => {
  return state.product.entity ? state.product.entity[0] : null;
};

export const productAdd = (payload) => async (dispatch) => {
  try {
    const data = await productService.create(payload);
    dispatch(addProduct(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
export const getProducts = () => (state) => state.product.entity;
export const getProductLoadingStatus = () => (state) => state.product.isLoading;

// Экспортируем сам редьюсер для использования в store
export default productReducer;

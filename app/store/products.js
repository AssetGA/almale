import { createSlice } from "@reduxjs/toolkit";
import productService from "../service/product.service";

// Начальное состояние
const initialState = {
  entities: [],
  loading: false,
  error: null,
};

// Слайс для продуктов
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Действие для начала загрузки продуктов
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    // Действие для успешной загрузки продуктов
    fetchProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    // Действие при ошибке загрузки
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // Добавление продукта
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    // Удаление продукта по ID
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    // Очистка всех продуктов
    clearProducts(state) {
      state.products = [];
    },
  },
});

const { reducer: productReducer, actions } = productSlice;

// Экспортируем действия
const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProduct,
  removeProduct,
  clearProducts,
} = actions;

export const productAdd = (payload) => async (dispatch) => {
  try {
    const data = await productService.create(payload);
    dispatch(addProduct(data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};

// Экспортируем сам редьюсер для использования в store
export default productReducer;

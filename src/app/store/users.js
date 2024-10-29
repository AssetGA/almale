import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../service/auth.service";
import userService from "../service/user.service";

const initialState = {
  entities: null,
  api: null,
  isLoading: false,
  error: null,
  auth: false,
  userId: null,
  isLoggedIn: false,
  isVerify: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersInitialize: (state) => {
      state;
      state.isLoading = false;
    },
    usersClearError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    usersRequested: (state) => {
      state.isLoading = true;
    },
    userGetApi: (state, action) => {
      state.api = action.payload;
      state.isLoading = false;
    },
    userUnauthorize: (state, action) => {
      state.auth = action.payload.auth;
      state.userId = action.payload.userId;
      state.api = action.payload.api;
    },
    usersReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequested: (state) => {
      state.isLoading = true;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    verifyRequestSend: (state) => {
      state.error = null;
      state.isLoading = false;
    },
    verifyRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    userCreated: (state, action) => {
      if (!Array.isArray(state.entities)) {
        state.entities = [];
      }
      if (action.payload.user !== null) {
        state.entities.push(action.payload.user);
      }
      state.auth = action.payload.content;
      state.userId = action.payload.id;
      state.api = action.payload.api;
      state.isLoading = false;
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.isVerify = false;
      state.auth = null;
    },
    userUpdateSuccessed: (state, action) => {
      state.entities[
        state.entities.findIndex((u) => u._id === action.payload._id)
      ] = action.payload;
      state.isLoading = false;
    },
    authRequested: (state) => {
      state.error = null;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  usersRequested,
  usersClearError,
  userCreated,
  usersReceived,
  usersRequestFailed,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  userUpdateSuccessed,
  verifyRequestSend,
  verifyRequestFailed,
  userUnauthorize,
  userGetApi,
} = actions;

const authRequested = createAction("users/authRequested");
const userUpdateRequested = createAction("users/userUpdateRequested");
const userUpdateFailed = createAction("users/userUpdateFailed");

export const initializeUsers = () => async (dispatch) => {
  dispatch(authRequested());
  try {
    const { content } = await userService.get();
    dispatch(usersReceived(content));
  } catch (error) {
    dispatch(verifyRequestFailed(error.message));
  }
};

export const UnauthorizeUser = () => async (dispatch) => {
  dispatch(userUnauthorize({ auth: false, userId: null, api: null }));
};

export const clearUsersError = () => async (dispatch) => {
  dispatch(authRequested());
  dispatch(usersClearError(null));
};

export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.verify(payload);
    if (data.content === null) {
      dispatch(verifyRequestSend(data));
    } else {
      dispatch(verifyRequestSend(data));
    }
  } catch (error) {
    dispatch(verifyRequestFailed(error.message));
  }
};

export const Verify = (payload) => async (dispatch) => {
  dispatch(usersRequested());
  try {
    const data = await authService.verifyGet(payload);
    dispatch(userCreated(data));
  } catch (error) {
    dispatch(
      verifyRequestFailed(
        error?.response.data?.message
          ? error?.response.data.message
          : error?.message
      )
    );
  }
};

export const getApiUrl = (payload) => async (dispatch) => {
  dispatch(usersRequested());
  try {
    console.log("11111");
    const { content } = await userService.getApi(payload);
    console.log("apidata", content);
    dispatch(userGetApi(data.content));
  } catch (error) {
    dispatch(verifyRequestFailed(error.message));
  }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getAuthErrors = () => (state) => state.users.error;
export const getIsVerifyUser = () => (state) => state.users.isVerify;

export default usersReducer;

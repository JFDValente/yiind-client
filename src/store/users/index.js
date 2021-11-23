import { HYDRATE } from "next-redux-wrapper";

const SET_USER_TYPE = "SET_USER_TYPE";

export const setUserAction = (user) => ({
  type: SET_USER_TYPE,
  payload: user,
});

const initialState = {};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user };
    case SET_USER_TYPE:
      const newState = { ...state, ...action.payload };
      return newState;
    default:
      return state;
  }
};

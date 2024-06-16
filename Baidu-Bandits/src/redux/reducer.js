// src/redux/reducer.js
import { FETCH, UPDATE } from "./actionTypes";

const initialState = {
  weeklyData: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        weeklyData: action.payload
      };
    case UPDATE:
      return {
        ...state,
        weeklyData: action.payload
      };
    default:
      return state;
  }
};

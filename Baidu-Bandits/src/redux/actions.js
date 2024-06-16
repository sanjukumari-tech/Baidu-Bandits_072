// src/redux/actions.js
import { FETCH, UPDATE } from './actionTypes';

// Action to fetch data (could be from an API or local storage)
export const fetchUserData = (data) => ({
  type: FETCH,
  payload: data
});

// Action to update data
export const updateUserData = (data) => ({
  type: UPDATE,
  payload: data
});

import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_REQUEST,
} from "./productConst";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

export const fetchSuccess = (prod) => {
  return { type: FETCH_PRODUCT_SUCCESS, payload: prod };
};

export const fetchFailure = (err) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: err,
  };
};

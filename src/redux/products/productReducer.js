import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
  FETCH_REQUEST,
} from "./productConst";

const initState = {
  loading: false,
  products: [],
  err: "",
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return {
        products: [],
        err: "",
        loading: true,
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: payload,
        err: "",
      };
    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        products: [],
        err: payload,
      };
    default:
      return state;
  }
};

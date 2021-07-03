import axios from "axios";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import { kartReduce } from "./kart/kartReducer";
import {
  fetchFailure,
  fetchRequest,
  fetchSuccess,
} from "./products/productAction";
import { productReducer } from "./products/productReducer";

const rootReducer = combineReducers({
  products1: productReducer,
  kart1: kartReduce,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const fetchProduct = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const products = res.data;
        dispatch(fetchSuccess(products));
      })
      .catch((err) => {
        dispatch(fetchFailure(err.message));
      });
  };
};

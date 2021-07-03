import {
  ADD_TO_KART,
  DEC_COUNT_TOTAL,
  DELETE_FROM_KART,
  INC_COUNT_TOTAL,
} from "./kartConst";

export const addToKart = ({ prod, total }) => {
  return {
    type: ADD_TO_KART,
    payload: { prod, total },
  };
};

export const deleteFromKart = ({ updateProd, total }) => {
  return {
    type: DELETE_FROM_KART,
    payload: { updateProd, total },
  };
};

export const incCountTotal = ({ updateProd, total }) => {
  return {
    type: INC_COUNT_TOTAL,
    payload: { updateProd, total },
  };
};

export const decCountTotal = ({ updateProd, total }) => {
  return {
    type: DEC_COUNT_TOTAL,
    payload: { updateProd, total },
  };
};

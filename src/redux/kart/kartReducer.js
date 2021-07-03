import {
  ADD_TO_KART,
  DEC_COUNT_TOTAL,
  DELETE_FROM_KART,
  INC_COUNT_TOTAL,
} from "./kartConst";

const initKartState = {
  kart: [],
  total: 0,
};

export const kartReduce = (state = initKartState, { type, payload }) => {
  switch (type) {
    case ADD_TO_KART:
      return {
        kart: [...state.kart, payload.prod],
        total: state.total + payload.total,
      };
    case DELETE_FROM_KART:
      return {
        kart: [...payload.updateProd],
        total: state.total - payload.total,
      };
    case INC_COUNT_TOTAL:
      return {
        kart: [...payload.updateProd],
        total: state.total + payload.total,
      };

    case DEC_COUNT_TOTAL:
      return {
        kart: [...payload.updateProd],
        total: state.total - payload.total,
      };

    default:
      return state;
  }
};

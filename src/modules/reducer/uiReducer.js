import { types } from "../types/types";

const initialState = {
  errorFormPersonality: {
    email: false,
    password: false
  },
  errorInput: false,
  modalStatus: false,
  filterActive: false,
  whatFilterActive: {
    tipology: false,
    format: false
  },
  validationExtra: false
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.errorFormPersonality:
      return {
        ...state,
        errorFormPersonality: action.payload.errorFormPersonality,
      };
    case types.validationExtra:
      return {
        ...state,
        validationExtra: action.payload.validationExtra,
      };
    case types.uiErrorInput:
      return {
        ...state,
        errorInput: action.payload.state,
      };

    case types.modalStatus:
      return {
        ...state,
        modalStatus: action.payload.modalStatus,
      };
    case types.filterActive:
      return {
        ...state,
        filterActive: action.payload.filterActive,
      };
    case types.whatFilterActive:
      return {
        ...state,
        whatFilterActive: action.payload.whatFilterActive,
      };

    default:
      return state;
  }
};

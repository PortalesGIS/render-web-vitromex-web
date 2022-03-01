import { types } from "../types/types";

const initialState = {
  errorInput: false,
  modalStatus: false,
  filterActive: false,
  validationExtra: false
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
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

    default:
      return state;
  }
};

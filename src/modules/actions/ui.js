import { types } from "../types/types";


export const logoutButton = () => {
  return async (dispatch) => {
    dispatch(modalActive(true));
  }
}


export const modalActive = (value) => {
  return {
    type: types.modalStatus,
    payload: {
      modalStatus: value,
    },
  };
};

export const validationExtraActive = (value) => {
  return {
    type: types.validationExtra,
    payload: {
      validationExtra: value,
    },
  };
};

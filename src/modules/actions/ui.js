import { types } from "../types/types";


export const logoutButton = () => {
  return async (dispatch) => {
    dispatch(modalActive(true));
  }
}
export const showFilterActive = (filterMenu) => {
  return async (dispatch, getState) => {
    const state = getState();
    let newState = state.ui.whatFilterActive
    if(filterMenu === 'Por formato'){
      newState = {
        ...newState,
        format: !newState.format,
        tipology: false
      }
    }else{
      newState = {
        ...newState,
        format: false,
        tipology: !newState.tipology
      }
    }
    dispatch(filterActiveMenu(newState))
  }
}


export const filterActiveMenu = (value) => {
  return {
    type: types.whatFilterActive,
    payload: {
      whatFilterActive: value,
    },
  };
};

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

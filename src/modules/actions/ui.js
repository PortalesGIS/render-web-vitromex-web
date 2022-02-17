import { types } from "../types/types";

export const modalActive = (value) => {
  return {
    type: types.modalStatus,
    payload: {
      modalStatus: value,
    },
  };
};

import { types } from "../types/types";

const initialState = {
    errorInput: false
}


export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiErrorInput:
            return {
                ...state,
                errorInput: true
            }
    
        default:
            return state
    }
}
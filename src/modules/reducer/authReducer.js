

import { types } from "../types/types";

const initialState = {
    authentication: false,
    email: ''
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                authentication: true,
                email: action.payload.email
            }
    
        case types.logout:
            return {
                ...state,
                authentication: false
            }
    
        default:
            return state
    }
}
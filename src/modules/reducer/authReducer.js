

import { types } from "../types/types";

const initialState = {
    authentication: false,
    name: ''
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                authentication: true,
                name: action.payload.name
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
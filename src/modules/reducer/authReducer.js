

import { types } from "../types/types";

const initialState = {
    authentication: false,
    email: '',
    user: ''
}


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                authentication: true,
                user: action.payload.user
            }
    
        case types.logout:
            return {
                ...state,
                authentication: false
            }

        case types.restore:
            return {
                ...state,
                authentication: true,
                user: action.payload.user
            }
        case types.register:
            return {
                ...state,
                authentication: true,
                user: action.payload.user
            }
    
        default:
            return state
    }
}
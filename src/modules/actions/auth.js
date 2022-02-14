import clientAxios from "../../config/axios"
import { types } from "../types/types"


export const loginAxios = (email, password) => {
    return async (dispatch) => {
        const response = await clientAxios.get('users')
        console.log(response);
        // guardar login local store
        dispatch(login(email))
    }
}


export const login = (email) => {
    return {
        type: types.login,
        payload: {
            name: email
        }
    }
}
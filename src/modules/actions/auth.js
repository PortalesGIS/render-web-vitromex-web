// import clientAxios from "../../config/axios"
import fakeData from "../../config/fakeDatabase"
import { types } from "../types/types"


export const authAxios = (type, dataform) => {
    return async (dispatch) => {
        if (type === 'login'){
            const {email, password} = dataform
            const response =  fakeData.users.find(user => (user.email === email && user.password === password))
            if(response === undefined){
                dispatch(errorLogin())
            }else{
                dispatch(login(email))
            }
        }
        // const response = await clientAxios.get('users')
        // console.log(response);
        // guardar login local store
    }
}


export const errorLogin = () => {
    return {
        type: types.uiErrorInput
    }
}

export const login = (email) => {
    return {
        type: types.login,
        payload: {
            email: email
        }
    }
}

export const logout = (email) => {
    return {
        type: types.login
    }
}
export const resgiter = (email) => {
    return {
        type: types.login,
        payload: {
            email: email
        }
    }
}
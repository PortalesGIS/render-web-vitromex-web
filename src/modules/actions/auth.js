// import clientAxios from "../../config/axios"
import fakeData from "../../config/fakeDatabase"
import { types } from "../types/types"
import { typesAuhtButton } from "../types/typesAuthButton"


export const authAxios = (type, dataform) => {
    return async (dispatch) => {
        if (type === typesAuhtButton.login){
            const {email, password} = dataform
            const response =  fakeData.users.find(user => (user.email === email && user.password === password))
            if(response === undefined){
                dispatch(errorLogin())
            }else{
                dispatch(login(email))
            }
        }else if (type === typesAuhtButton.restore){
            console.log(dataform);
            dispatch(restore())
        }else if (type === typesAuhtButton.register){
            console.log(dataform);
            dispatch(resgiter())
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
export const restore = () => {
    return {
        type: types.restore
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
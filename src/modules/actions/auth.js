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
                dispatch(login(response.name))
            }
        }else if (type === typesAuhtButton.restore){
            const {email} = dataform
            const response =  fakeData.users.find(user => (user.email === email))
            if(response === undefined){
                dispatch(errorLogin())
            }else{
                dispatch(restore())
            }
        }else if (type === typesAuhtButton.register){
            const {email, name} = dataform
            const response =  fakeData.users.find(user => (user.email === email))
            if(response === undefined){
                fakeData.users.push(dataform)
                dispatch(resgiter(name))
            }else{
                dispatch(errorLogin())
            }
        }
        // const response = await clientAxios.get('users')
        // console.log(response);
        // guardar login local store
    }
}


export const errorLogin = () => {
    return {
        type: types.uiErrorInput,
        payload: {
            state: true
        }
    }
}

export const errorLoginClean = () => {
    return {
        type: types.uiErrorInput,
        payload: {
            state: false
        }
    }
}

export const login = (user) => {
    return {
        type: types.login,
        payload: {
            user: user
        }
    }
}
export const restore = () => {
    return {
        type: types.restore
    }
}

export const logout = () => {
    // localStorage
    return {
        type: types.logout
    }
}
export const resgiter = (user) => {
    return {
        type: types.login,
        payload: {
            user: user
        }
    }
}
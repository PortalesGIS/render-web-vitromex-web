import clientAxios from "../../config/axios"
import { types } from "../types/types"



export const productAxios = () => {
    return async (dispatch) => {
        dispatch(loadingProduct(true))
        try{
            const response = await clientAxios.get('product')
            const {AlltotalProducts, products} = response.data
            // console.log(res);
            dispatch(productsGeneral(products, AlltotalProducts))
            dispatch(loadingProduct(false))
        }catch(error){
            console.log(error);
            dispatch(productsError())
            dispatch(loadingProduct(false))
        }
    }
}


export const productsGeneral = (productsDatabase, total) => {
    return {
        type: types.products,
        payload: {
            products: productsDatabase,
            totalProducts: total
        }
    }
}
export const productsError = () => {
    return {
        type: types.productsError
    }
}
export const loadingProduct = (value) => {
    return {
        type: types.loading,
        payload: {
            loading: value
        }
    }
}

export const migajasUpdate = (value) => {
    console.log(value);
    return {
        type: types.migajas,
        payload: {
            migajas: value
        }
    }
}
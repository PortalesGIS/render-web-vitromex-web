// import clientAxios from "../../config/axios"
import { types } from "../types/types";
import fakeDatabase from "../../config/fakeDatabase";

export const productAxios = () => {
  return async (dispatch) => {
    dispatch(loadingProduct(true));
    try {
      // const response = await clientAxios.get('product')
      // const {AlltotalProducts, products} = response.data
      const response = fakeDatabase.products;
      let seriesAll = response.serie;
      let totalProducts = response.total;
      let typologie = []
      let formats = []
      let productsView = []
      const separateTypologie = response.serie.reduce((acc, data) => {
        acc[data.typologie] = ++acc[data.typologie] || 0;
        return acc;
      }, {});
      
      for (const type in separateTypologie) {
        if (Object.hasOwnProperty.call(separateTypologie, type)) {
          typologie.push(type)
        }
      }
      productsView = seriesAll.slice(0, 24)
      dispatch(productsGeneral(seriesAll, totalProducts, typologie, formats, productsView))
      dispatch(loadingProduct(false));
    } catch (error) {
      console.log(error);
      dispatch(productsError());
      dispatch(loadingProduct(false));
    }
  };
};

export const productsGeneral = (seriesAll, totalProducts, typologie, formats, productsView) => {
  return {
    type: types.series,
    payload: {
      series: seriesAll,
      totalProducts: totalProducts,
      typologie: typologie,
      formats: formats,
      productsView: productsView
    },
  };
};
export const productsError = () => {
  return {
    type: types.productsError,
  };
};
export const loadingProduct = (value) => {
  return {
    type: types.loading,
    payload: {
      loading: value,
    },
  };
};

export const migajasUpdate = (value, title = "nombre") => {
  return {
    type: types.migajas,
    payload: {
      migajas: value,
      titlePage: title,
    },
  };
};

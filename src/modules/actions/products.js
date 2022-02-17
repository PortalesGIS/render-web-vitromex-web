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
      let typologie = [];
      let formats = [];
      let productsView = [];
      let separetePage =0;
      let residuos = 0;
      let numberPage = 0;
      let separatePage = []

      //* tipologias
      const separateTypologie = response.serie.reduce((acc, data) => {
        acc[data.typologie] = ++acc[data.typologie] || 0;
        return acc;
      }, {});
      for (const type in separateTypologie) {
        if (Object.hasOwnProperty.call(separateTypologie, type)) {
          typologie.push(type);
        }
      }

      //* Los podructos que se ven
      productsView = seriesAll.slice(0, 24);
      //* en cuantos dividir la pagina
      separetePage = (totalProducts/24).toFixed(2)
      residuos = totalProducts % 24
      separetePage = parseInt(separetePage.split('.')[0])
      if(residuos > 0){
        numberPage = separetePage + 1
      }
      let inicial = 0
      let final = 24
      for (let i = 0; i < numberPage; i++) {
        let separate = seriesAll.slice(inicial,final)
        inicial = inicial + 24
        final = final + 24
        separatePage.push(separate)
      }
      
      dispatch(numberPagination(0))
      dispatch(numberPagePagination(separatePage))
      dispatch(
        productsGeneral(
          seriesAll,
          totalProducts,
          typologie,
          formats
        )
      );
      dispatch(productsViewCards(productsView));
      dispatch(loadingProduct(false));
    } catch (error) {
      console.log(error);
      dispatch(productsError());
      dispatch(loadingProduct(false));
    }
  };
};

export const startMigajas = (value, title) => {
  return async (dispatch) => {
    dispatch(migajasUpdate(value));
    dispatch(titlePages(title));
  };
};

export const startPaginationView = (num=1) => {
  return async (dispatch) => {
    dispatch(numberPagination(num))
  };
}

export const numberPagination = (numberPagination) => {
  return {
    type: types.numberpagination,
    payload: {
      numberPagination: numberPagination,
    },
  };
}

export const numberPagePagination = (numberPage) => {
  return {
    type: types.paginationpage,
    payload: {
      numberPage: numberPage,
    },
  };
}

export const productsViewCards = (productsView) => {
  return {
    type: types.productview,
    payload: {
      productsView: productsView,
    },
  };
};

export const productsGeneral = (
  seriesAll,
  totalProducts,
  typologie,
  formats
) => {
  return {
    type: types.series,
    payload: {
      series: seriesAll,
      totalProducts: totalProducts,
      typologie: typologie,
      formats: formats,
    },
  };
};

export const titlePages = (title) => {
  return {
    type: types.titlepages,
    payload: {
      titlePage: title,
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

export const migajasUpdate = (value) => {
  return {
    type: types.migajas,
    payload: {
      migajas: value,
    },
  };
};

// import clientAxios from "../../config/axios"
import { types } from "../types/types";
import fakeDatabase from "../../config/fakeDatabase";
import { separatePageHelper } from "../../helpers/separetePage";

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
      let separatePage = [];

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
      separatePage = separatePageHelper(totalProducts);

      dispatch(productsGeneralAll(seriesAll));
      dispatch(numberPagination(0));
      dispatch(numberPagePagination(separatePage));
      dispatch(productsGeneral(seriesAll, totalProducts, typologie, formats));
      dispatch(productsViewCards(productsView));
      dispatch(loadingProduct(false));
    } catch (error) {
      console.log(error);
      dispatch(productsError());
      dispatch(loadingProduct(false));
    }
  };
};

export const updatePagination = (numPagination, separateData) => {
  return async (dispatch, getState) => {
    const state = getState();
    let seriesAll = state.product.series;
    let separate = separateData[numPagination];
    let productsView = seriesAll.slice(separate.range[0], separate.range[1]);
    dispatch(numberPagination(numPagination));
    dispatch(productsViewCards(productsView));
  };
};

export const startPaginationView = (num = 1) => {
  return async (dispatch) => {
    dispatch(numberPagination(num));
  };
};

export const filterTypology = (type, seriesAll) => {
  return async (dispatch) => {
    let productViewRange = [];
    let productsView = [];
    productsView = seriesAll.filter((serie) => {
      return serie.typologie === type;
    });
    let separatePage = [];
    separatePage = separatePageHelper(productsView.length);
    productViewRange = productsView.slice(0, 24);
    dispatch(selectTypology(type));
    dispatch(seriesUpdate(productsView));
    dispatch(productsViewCards(productViewRange));
    dispatch(numberPagination(0));
    dispatch(numberPagePagination(separatePage));
    dispatch(filterActiveUi(true));
  };
};

export const clearFilter = () => {
  return async (dispatch, getState) => {
    const state = getState();
    let seriesAll = state.product.productsGeneral;
    let productViewRange = seriesAll.slice(0, 24);
    let separatePage = separatePageHelper(seriesAll.length);
    dispatch(seriesUpdate(seriesAll));
    dispatch(productsViewCards(productViewRange));
    dispatch(numberPagination(0));
    dispatch(numberPagePagination(separatePage));
    dispatch(filterActiveUi(false));
  };
};

export const eliminatePagination = (migajas) => {
  return async (dispatch, getState) => {
    dispatch(migajasUpdate(migajas));
    if(migajas.length > 1){
      dispatch(productRoute(true));
    }
  }
}

export const redirectCard = (name, path) => {
  return async (dispatch, getState) => {
    const state = getState();
    let dataMigajas = [];
    dataMigajas.push(...state.product.migajas, {
      path: path,
      name: name,
    });
    let seriesAll = state.product.productsGeneral;
    let productViewRange = seriesAll.slice(0, 24);
    let separatePage = separatePageHelper(seriesAll.length);
    dispatch(migajasUpdate(dataMigajas));
    dispatch(seriesUpdate(seriesAll));
    dispatch(productsViewCards(productViewRange));
    dispatch(numberPagination(0));
    dispatch(numberPagePagination(separatePage));
    dispatch(filterActiveUi(false));
    dispatch(productRoute(true));
  };
};

//* ---- types reducer
export const productRoute = (value) => {
  return {
    type: types.productactive,
    payload: {
      productActive: value,
    },
  };
};
export const filterActiveUi = (filterActive) => {
  return {
    type: types.filterActive,
    payload: {
      filterActive: filterActive,
    },
  };
};
export const selectTypology = (selecttypology) => {
  return {
    type: types.selecttypology,
    payload: {
      selecttypology: selecttypology,
    },
  };
};

export const seriesUpdate = (series) => {
  return {
    type: types.seriesupdate,
    payload: {
      series: series,
    },
  };
};

export const productsGeneralAll = (productsAll) => {
  return {
    type: types.productsGeneral,
    payload: {
      productsGeneral: productsAll,
    },
  };
};

export const numberPagination = (numberPagination) => {
  return {
    type: types.numberpagination,
    payload: {
      numberPagination: numberPagination,
    },
  };
};

export const numberPagePagination = (numberPage) => {
  return {
    type: types.paginationpage,
    payload: {
      numberPage: numberPage,
    },
  };
};

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

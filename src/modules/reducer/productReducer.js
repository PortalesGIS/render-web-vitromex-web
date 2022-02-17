import { types } from "../types/types";

const initialState = {
  series: [], //* Las series totales de response
  productsView: [], //* Productos que se veran
  numberPagination: 0, //* Numero actual paginacion
  numberPage: [], //* En cuanto se divide el array de la paginación
  totalProducts: 0, //* Para hacer la comprobacion a la paginación
  products: [], //* Productos individuales
  typologie: [], //* Tipologias del menu
  formats: [], //* Formatos del menu
  loading: true,
  errorproducts: false,
  migajas: [],
  titlePage: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.series:
      return {
        ...state,
        series: action.payload.series,
        totalProducts: action.payload.totalProducts,
        typologie: action.payload.typologie,
        formats: action.payload.formats,
      };

    case types.productsError:
      return {
        ...state,
        errorproducts: true,
      };

    case types.loading:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case types.migajas:
      return {
        ...state,
        migajas: action.payload.migajas,
        titlePage: action.payload.titlePage,
      };

    case types.titlepages:
      return {
        ...state,
        titlePage: action.payload.titlePage,
      };

    case types.productview:
      return {
        ...state,
        productsView: action.payload.productsView,
      };

    case types.paginationpage:
      return {
        ...state,
        numberPage: action.payload.numberPage,
      };

    case types.numberpagination:
      return {
        ...state,
        numberPagination: action.payload.numberPagination,
      };

    default:
      return state;
  }
};

import { types } from "../types/types";

const initialState = {
  productsGeneral: [], //! Son los productos geneales
  series: [], //* Las series totales de response
  productsView: [], //* Productos que se veran
  numberPagination: 0, //* Numero actual paginacion
  numberPage: [], //* En cuanto se divide el array de la paginación
  totalProducts: 0, //* Para hacer la comprobacion a la paginación
  products: [], //* Productos individuales
  color: [], //* Productos individuales
  typologie: [], //* Tipologias del menu
  formats: [], //* Formatos del menu
  selecttypology: '', //* formator escogida
  selectformat: '', //* tipologia escogida
  productActive: false, //* producto activo
  findActive: false, //* busqueda activada
  loading: true,
  errorproducts: false,
  migajas: [],
  titlePage: "",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.colorSelect:
      return {
        ...state,
        color: action.payload.color,
      }
    case types.productSerie:
      return {
        ...state,
        products: action.payload.products,
      }
    case types.productactive:
      return {
        ...state,
        productActive: action.payload.productActive,
      }
    case types.findActive:
      return {
        ...state,
        findActive: action.payload.findActive,
      }
      
    case types.productsGeneral:
      return {
        ...state,
        productsGeneral: action.payload.productsGeneral,
      }
    case types.seriesupdate:
      return {
        ...state,
        series: action.payload.series,
      }
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

    case types.selecttypology:
      return {
        ...state,
        selecttypology: action.payload.selecttypology,
      };

    default:
      return state;
  }
};

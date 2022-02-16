import { types } from "../types/types";

const initialState = {
  products: [],
  totalProducts: 0,
  loading: true,
  errorproducts: false,
  migajas: [],
  numberPagination: 0,
  titlePage: "Series",
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.products:
      return {
        ...state,
        products: action.payload.products,
        totalProducts: action.payload.totalProducts,
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

    default:
      return state;
  }
};

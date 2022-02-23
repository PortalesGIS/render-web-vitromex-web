import clientAxios from "../../config/axios";
import { types } from "../types/types";
// import fakeDatabase from "../../config/fakeDatabase";
import { separatePageHelper } from "../../helpers/separetePage";
import { separateMigajasHelpers } from "../../helpers/separateMigajas";
import { addRenderIsNoExist } from "../../helpers/addRenderTemporal";
import { filterRender } from "../../helpers/filterRenders";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";

export const productAxios = () => {
  return async (dispatch) => {
    dispatch(loadingProduct(true));
    try {
      const responseDatabase = await clientAxios.get("series");
      // console.log(responseDatabase.data);
      // const {AlltotalProducts, products} = response.data
      // const response = fakeDatabase.products;
      const response = responseDatabase.data;
      let seriesAll = response.series;
      let totalProducts = response.total;
      let typologie = [];
      let formats = [];
      let productsView = [];
      let separatePage = [];

      //* tipologias
      const separateTypologie = response.series.reduce((acc, data) => {
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
      dispatch(
        productsGeneral(seriesAll, totalProducts, typologie.sort(), formats)
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
  return async (dispatch, getState) => {
    const state = getState();
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
    let initial = state.product.migajas.slice(0, 1);
    dispatch(migajasUpdate(initial));
  };
};

export const clearFilter = () => {
  return async (dispatch, getState) => {
    const state = getState();
    let seriesAll = state.product.productsGeneral;
    let productViewRange = seriesAll.slice(0, 24);
    let separatePage = separatePageHelper(seriesAll.length);
    dispatch(selectTypology(""));
    dispatch(seriesUpdate(seriesAll));
    dispatch(productsViewCards(productViewRange));
    dispatch(numberPagination(0));
    dispatch(numberPagePagination(separatePage));
    dispatch(filterActiveUi(false));
    dispatch(titlePages("Series disponibles"));
  };
};

export const eliminatePagination = (migajas) => {
  return async (dispatch, getState) => {
    dispatch(migajasUpdate(migajas));
    if (migajas.length > 1) {
      dispatch(productRoute(true));
    }
  };
};

export const redirectCard = (name, path, id) => {
  return async (dispatch, getState) => {
    //* axios
    dispatch(loadingProduct(true));
    try {
      const { data } = await clientAxios.post("series/products-series", {
        id: id,
      });
      //! Solo es por el momento
      const infoNew = addRenderIsNoExist(data);
      // console.log(infoNew);
      //* Info
      const state = getState();
      let dataMigajas = [];
      dataMigajas.push(...state.product.migajas, {
        path: path,
        name: name,
      });
      // console.log(dataMigajas);
      dispatch(migajasUpdate(dataMigajas));
      dispatch(productSerie(infoNew));
      // dispatch(productSerie(data));
      dispatch(titlePages(name));
      dispatch(filterActiveUi(false));
      dispatch(productRoute(true));
      dispatch(loadingProduct(false));
    } catch (error) {
      console.log(error);
      dispatch(productsError());
      dispatch(loadingProduct(false));
    }
  };
};

export const viewRender = (path, numberRender) => {
  return async (dispatch, getState) => {
    //* axios
    dispatch(loadingProduct(true));
    try {
      //* Info
      const state = getState();
      let dataMigajas = [];
      dataMigajas.push(...state.product.migajas, {
        path: path,
        name: numberRender,
      });
      let render = filterRender(state.product.products, numberRender);
      dispatch(numberSelectProduct(numberRender));
      dispatch(colorProductSelect(render));
      dispatch(migajasUpdate(dataMigajas));
      dispatch(titlePages("variaciones"));
      dispatch(filterActiveUi(false));
      dispatch(productRoute(true));
      dispatch(loadingProduct(false));
    } catch (error) {
      console.log(error);
      dispatch(productsError());
      dispatch(loadingProduct(false));
    }
  };
};

export const realoadPage = (location) => {
  return async (dispatch, getState) => {
    //* axios
    dispatch(loadingProduct(true));
    try {
      const state = getState();
      let serieSelect = [];
      let separatePath = location.split("/");
      if (separatePath.length > 3) {
        serieSelect = state.product.productsGeneral.find(
          (serie) => serie.id === parseInt(separatePath[3])
        );
        const { data } = await clientAxios.post("series/products-series", {
          id: serieSelect.id,
        });
        //! Solo es por el momento
        const infoNew = addRenderIsNoExist(data);
        dispatch(productSerie(data));
        dispatch(productSerie(infoNew));
        if (separatePath.length > 4) {
          dispatch(titlePages("variaciones"));
          let numberColor = parseInt(separatePath[separatePath.length - 1]);
          let render = filterRender(infoNew, 0);
          dispatch(numberSelectProduct(parseInt(numberColor)));
          dispatch(colorProductSelect(render));
        } else {
          dispatch(titlePages(serieSelect.name));
        }
        dispatch(filterActiveUi(false));
        dispatch(productRoute(true));
      } else {
        dispatch(titlePages("series disponibles"));
      }
      let dataMigajas = separateMigajasHelpers(
        separatePath,
        typeof serieSelect.id === "number" ? serieSelect.name : null
      );
      dispatch(migajasUpdate(dataMigajas));
      dispatch(loadingProduct(false));
    } catch (error) {
      console.log(error);
      dispatch(productsError());
      dispatch(loadingProduct(false));
    }
  };
};

export const moveMigajas = (migajas, name, route = true) => {
  return async (dispatch, getState) => {
    dispatch(migajasUpdate(migajas));
    dispatch(titlePages(name === "series" ? "series disponibles" : name));
    dispatch(productRoute(route));
  };
};

export const findProductGeneral = (textFind) => {
  return async (dispatch, getState) => {
    const state = getState();
    let seriesAll = state.product.productsGeneral.filter(
      (serie) => serie.name.toLowerCase().indexOf(textFind.toLowerCase()) > -1
    );
    let productViewRange = seriesAll.slice(0, 24);
    let separatePage = separatePageHelper(seriesAll.length);
    dispatch(seriesUpdate(seriesAll));
    dispatch(productsViewCards(productViewRange));
    dispatch(numberPagination(0));
    dispatch(numberPagePagination(separatePage));
    dispatch(productRoute(false));
    dispatch(filterActiveUi(true));
    dispatch(findActiveProduct(true));
    dispatch(titlePages("Resultados de la búsqueda"));
  };
};

export const downloadZip = (number) => {
  return async (dispatch, getState) => {
    const state = getState();
    let renders = state.product.products[number].renders;

    const parseURI = async (d) => {
      let reader = new FileReader();
      reader.readAsDataURL(d);
      return new Promise((res, rej) => {
        reader.onload = (e) => {
          res(e.target.result);
        };
      });
    };

    const getDataBlob = async (url) => {
      let res = await fetch(url);
      let blob = await res.blob();
      let uri = await parseURI(blob);
      return uri;
    };

    let zip = new JSZip();
    let zipFilename = "zipVitromex.zip";
    let img = zip.folder("renders");
    const dataObject = await Promise.all(
      renders.map(async (render, i) => {
        let url = await getDataBlob(render.url);
        return url;
      })
    );

    let count = 0;
    dataObject.map((url, index) => {
      let filename = "file-" + index + ".jpg";
      JSZipUtils.getBinaryContent(url, async (err, data) => {
        if (err) {
          console.log(err); // or handle the error
        }
        img.file(filename, data, { binary: true });
        count++;
        if (count === dataObject.length) {
          var zipFile = await zip.generateAsync({ type: "blob" });
          saveAs(zipFile, zipFilename);
        }
      });
    });
  };
};

//* ---- types reducer

export const numberSelectProduct = (value) => {
  return {
    type: types.numberProduct,
    payload: {
      numberProduct: value,
    },
  };
};

export const colorProductSelect = (value) => {
  return {
    type: types.colorSelect,
    payload: {
      color: value,
    },
  };
};

export const productSerie = (value) => {
  return {
    type: types.productSerie,
    payload: {
      products: value,
    },
  };
};

export const findActiveProduct = (value) => {
  return {
    type: types.findActive,
    payload: {
      findActive: value,
    },
  };
};
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

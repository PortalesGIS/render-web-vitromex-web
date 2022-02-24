export const addDataJson = (products, series) => {
  let newSeries = [];
  let newProducts = [];
  products.map(({ serie, color, finish, sized, renders, ...data }) => {
    if (newProducts[serie] === undefined) {
      newProducts[serie] = {
        color: [color],
        rectificated: [finish],
        format: [sized],
        renders: renders.length,
        countSerie: 1
      };
    } else {
      let colorsSave = newProducts[serie].color
      let rectificatedSave = newProducts[serie].rectificated
      let formatSave = newProducts[serie].format
      let rendersSave =  newProducts[serie].renders
      let countSerieSave = newProducts[serie].countSerie
      let addData = {
        color: colorsSave,
        rectificated: rectificatedSave,
        format: formatSave,
        renders: rendersSave,
        countSerie: countSerieSave
      }

      if(!colorsSave.includes(color)){
        addData.color = [...colorsSave, color]
      }
      if(!rectificatedSave.includes(finish)){
        addData.rectificated = [...rectificatedSave, finish]
      }
      if(!formatSave.includes(sized)){
        addData.format = [...formatSave, sized]
      }

      newProducts[serie] = {
        color: addData.color,
        rectificated: addData.rectificated,
        format: addData.format,
        renders: addData.renders + renders.length,
        countSerie: addData.countSerie + 1
      };
    }
  });

  newSeries= series.map(serie => {
    let dataProduct = newProducts[serie.name]
    if(dataProduct === undefined){
      serie.color = []  
      serie.rectificated = [] 
      serie.format = [] 
      serie.renders = 0  
      serie.countSerie = 1  
      return serie
    }else {
      serie.color = dataProduct.color  
      serie.rectificated = dataProduct.rectificated  
      serie.format = dataProduct.format  
      serie.renders = dataProduct.renders  
      serie.countSerie = dataProduct.countSerie  
      return serie
    }
  })
  // console.log(newProducts);
  return newSeries;
};

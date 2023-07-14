export const addDataJson = (products, series) => {
  let newSeries = [];
  let newProducts = [];
  // eslint-disable-next-line
  products.map(({ serie, color, finish, sized, renders, rectified, ...data }) => {
    // console.log(serie);
    if (newProducts[serie] === undefined) {
      newProducts[serie] = {
        format: [sized],
        color: [color],
        finish: [finish],
        renders: renders.length,
        countSerie: 1,
        rectified: [rectified]
      };
    } else {
      let colorsSave = newProducts[serie].color
      let finishSave = newProducts[serie].finish
      let formatSave = newProducts[serie].format
      let rendersSave =  newProducts[serie].renders
      let countSerieSave = newProducts[serie].countSerie
      let rectifiedSave = newProducts[serie].rectified
      let addData = {
        color: colorsSave,
        finish: finishSave,
        format: formatSave,
        renders: rendersSave,
        countSerie: countSerieSave,
        rectified: rectifiedSave
      }

      if(!colorsSave.includes(color)){
        addData.color = [...colorsSave, color]
      }
      if(!finishSave.includes(finish)){
        addData.finish = [...finishSave, finish]
      }
      if(!formatSave.includes(sized)){
        addData.format = [...formatSave, sized]
      }
      if(!rectifiedSave.includes(rectified)){
        addData.rectified = [...rectifiedSave, rectified]
      }

      newProducts[serie] = {
        color: addData.color,
        finish: addData.finish,
        format: addData.format,
        renders: addData.renders + renders.length,
        countSerie: addData.countSerie + 1,
        rectified: addData.rectified
      };
    }
  });
  // console.log(newProducts);
  newSeries= series.map(serie => {
    let dataProduct = newProducts[serie.name]
    if(dataProduct === undefined){
      serie.color = []  
      serie.finish = [] 
      serie.format = [] 
      serie.renders = 0  
      serie.countSerie = 0 
      serie.rectified = []
      // console.log(serie.name);  
      return serie
    }else {
      serie.color = dataProduct.color  
      serie.finish = dataProduct.finish  
      serie.format = dataProduct.format  
      serie.renders = dataProduct.renders  
      serie.countSerie = dataProduct.countSerie  
      serie.rectified = dataProduct.rectified  
      return serie
    }
  })

  let dataSeries = newSeries.filter((serie) => serie.countSerie > 0)
  // console.log(newProducts);
  return dataSeries;
};

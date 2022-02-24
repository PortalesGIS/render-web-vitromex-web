export const countFormats = (series) => {
  let formats = [];
  series.map(({ format }) => {
    if(format.length > 0){
      format.map(fort => {
        if(!formats.includes(fort)){
          formats.push(fort)
        }
      })
    }
  });
  return formats;
};

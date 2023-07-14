export const countFormats = (series) => {
  // eslint-disable-next-line
  let formats = [];
  // eslint-disable-next-line
  series.map(({ format }) => {
    // eslint-disable-next-line
    if(format.length > 0){
      // eslint-disable-next-line
      format.map(fort => {
        if(!formats.includes(fort)){
          formats.push(fort)
        }
      })
    }
  });
  return formats;
};

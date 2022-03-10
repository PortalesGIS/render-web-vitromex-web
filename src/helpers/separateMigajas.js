export const separateMigajasHelpers = (separatePath, name = null, nameColor = null) => {
  let dataMigajas = [];
  let textPath = "/products";
  for (let i = 2; i < separatePath.length; i++) {
    const element = separatePath[i];
    textPath = textPath + "/" + element;
    console.log();
    if (i > 2 && i < 5) {
      if (name && i === 3) {
        dataMigajas.push({
          path: textPath,
          name: name,
        });
      }
      if(nameColor && i === 4 ){
        dataMigajas.push({
          path: textPath,
          name: nameColor,
        });
      }
    } else {
      dataMigajas.push({
        path: textPath,
        name: element,
      });
    }
  }
  return dataMigajas;
};

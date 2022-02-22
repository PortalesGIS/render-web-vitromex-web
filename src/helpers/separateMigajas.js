export const separateMigajasHelpers = (separatePath, name = null) => {
  let dataMigajas = [];
  let textPath = "/products";
  for (let i = 2; i < separatePath.length; i++) {
    const element = separatePath[i];
    textPath = textPath + "/" + element;
    if (i === 3) {
      if (name) {
        dataMigajas.push({
          path: textPath,
          name: name,
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

export const separatePageHelper = (total) => {
  let separate = 0;
  let residuos = 0;
  let numberPage = 0;
  let separatePage = []
  separate = (total / 24).toFixed(2);
  residuos = total % 24;
  separate = parseInt(separate.split(".")[0]);
  if (residuos > 0) {
    numberPage = separate + 1;
  }
  let inicial = 0;
  let final = 24;
  for (let i = 0; i < numberPage; i++) {
    separatePage.push({
      numberpage: i,
      range: [inicial, final],
    });
    inicial = inicial + 24;
    final = final + 24;
  }
  return separatePage;
};

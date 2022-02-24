import imageToBase64 from "image-to-base64/browser";

export const imagesBase64 = async (imagenes) => {
  let imagesBase = [];
  const dataObject = await convertBase64(imagenes);
  imagesBase = dataObject;
  return imagesBase;
};

const convertBase64 = (images) => {
  return new Promise(async (resolve, reject) => {
    const dataObject = await Promise.all(
      images.map(async (render, i) => {
        let url = "";
        try {
          // url = await imageToBase64(render.url);
          url = await imageToBase64(
            "https://gisdecoradorvirtualstg.blob.core.windows.net:443/renders/d601379b-2045-4c7d-a8f8-6d3a9834f663oslo-blanco-36-x-50.png"
          );
        } catch (error) {
          console.log(error);
        }
        return url;
      })
    );
    resolve(dataObject);
  });
};

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
          url = await imageToBase64(render.url);
          // console.log(render.url);
          // url = await imageToBase64(
          //   "https://storagedevelopvitromex.blob.core.windows.net:443/storage-render/af885e1b-93c3-452d-b5dc-b3c06d1538ceVITROMEX_PINAR_MOKA_36X50CM_BR_3.jpg"
          // );
        } catch (error) {
          console.log(error);
        }
        return url;
      })
    );
    resolve(dataObject);
  });
};

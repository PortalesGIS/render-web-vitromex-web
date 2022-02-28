import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { CardColor } from "../components/Cards/CardColor";
import { Footers } from "../components/Footers/Footers";
import { titlePages } from "../modules/actions/products";

export const ColorSerie = () => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(titlePages("Variaciones"));
  }, []);
  let product = state.products[state.numberProduct];
  if (state.loading) {
    return (
      <div className="h-full overflow-auto flex justify-between flex-col">
        <div className="mb-4 gap-4 px-4">
          <h1>Cargando</h1>
        </div>
        <Footers />
      </div>
    );
  } else {
    return (
      <div className="h-full overflow-auto flex justify-between flex-col gap-y-8">
        {product !== undefined ?(
          <>
            <div className="xsmall:px-4 medium:px-12">
              <div className="gridCards24 xsmall:gap-y-8 small:gap-y-4 gap-6 w-full">
                {state.color.map((color, i) => (
                  <CardColor
                    color={color}
                    key={i}
                    number={i}
                    product={product}
                  />
                ))}
              </div>
            </div>
            <div className="w-full xsmall:px-4 medium:px-12">
              <div className="medium:h-img_instalation_medium small:h-img_instalation_small xsmall:h-img_instalation_xsmall">
                <img
                  src="https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"
                  alt="Render grande"
                  className="h-full w-full"
                />
              </div>
              <div className="text-12px text-primario/gris text-center">
                <span>
                  {product.name}/{product.color}/{product.sized}
                  /Instalación sugerida
                </span>
              </div>
            </div>
          </>
        ):(
          <div></div>
        )}
        <Footers />
      </div>
    );
  }
};

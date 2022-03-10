import React from "react";
import { useSelector } from "react-redux";
import { CardSeries } from "../components/Cards/CardSeries";
import { Footers } from "../components/Footers/Footers";
import Icono from "../assets/Icono.svg";

export const Series = () => {
  const state = useSelector((state) => state.product);

  if (state.loading) {
    return (
      <div className="h-full overflow-auto flex justify-between flex-col">
        <div className="flex justify-center items-center flex-col min-h-full">
          <h1>Cargando</h1>
        </div>
        <Footers />
      </div>
    );
  } else if (state.productsView.length > 0) {
    return (
      <div className="h-full overflow-auto">
        <div className="flex flex-col justify-between min-h-full gap-8">
          <div className="xsmall:px-4 medium:px-12">
            <div className="gridCards24 xsmall:gap-y-8 small:gap-y-4 xsmall:gap-6 large:gap-10 w-full">
              {state.productsView.map((data, i) => (
                <CardSeries data={data} key={i} />
              ))}
            </div>
          </div>
          <Footers />
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-full overflow-auto flex justify-between flex-col">
        <div className="flex justify-center items-center flex-col min-h-full">
          <div>
            <img src={Icono} alt="icono" />
          </div>
          <div>
            <p className="text-neutral40">
              Desafortunadamente la búsqueda no tiene resultados{" "}
            </p>
          </div>
        </div>
        <Footers />
      </div>
    );
  }
};

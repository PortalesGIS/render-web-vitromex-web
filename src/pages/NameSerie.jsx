import React from "react";
import { useSelector } from "react-redux";
import { CardProduct } from "../components/Cards/CardProduct";
import { Footers } from "../components/Footers/Footers";

export const NameSerie = () => {
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
  } else {
    return (
      <div className="h-full overflow-auto flex justify-between flex-col gap-y-8">
        <div className="xsmall:px-4 medium:px-12">
          <div className="gridCardsNameSerie gap-y-6">
            {state.products.map((product, i) => (
              <CardProduct product={product} key={i} number={i} />
            ))}
          </div>
        </div>
        <Footers />
      </div>
    );
  }
};

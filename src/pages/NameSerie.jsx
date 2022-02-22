import React from "react";
import { useSelector } from "react-redux";
import { CardProduct } from "../components/Cards/CardProduct";
import { Footers } from "../components/Footers/Footers";

export const NameSerie = () => {
  const state = useSelector((state) => state.product)
  
  if (state.loading) {
    return (
      <div className="h-full overflow-auto flex justify-between flex-col">
        <div className="mb-4 gap-4 px-4">
          <h1>Cargando</h1>
        </div>
        <Footers />
      </div>
    );
  }else{
    return (
      <div className="h-full overflow-auto flex justify-between flex-col">
        <div className="gridCardsNameSerie mb-4 gap-4 px-4">
          {state.products.map((product, i) => (
            <CardProduct product={product} key={i} />
          ))}
        </div>
        <Footers />
      </div>
    );
  }
};

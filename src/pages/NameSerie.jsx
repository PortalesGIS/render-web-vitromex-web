import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CardProduct } from "../components/Cards/CardProduct";
import { migajasUpdate, productRoute, titlePages } from "../modules/actions/products";

export const NameSerie = () => {
  const state = useSelector((state) => state.product)
  const dispatch = useDispatch();
  const { name } = useParams();
  useEffect(() => {
    if(state.migajas.length > 2){
      let initial = state.migajas
      initial = initial.slice(0, 2)
      dispatch(productRoute(false));
      dispatch(migajasUpdate(initial));
    }
    dispatch(titlePages(name));
  }, []);
  
  let numViesta = [
    { name },
    { name },
    { name },
    { name },
    { name },
    { name },
    { name },
    { name },
    { name },
    { name },
  ];
  return (
    <div className="h-full overflow-auto">
      <div className="gridCardsNameSerie mb-4 gap-8">
        {numViesta.map((product, i) => (
          <CardProduct product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

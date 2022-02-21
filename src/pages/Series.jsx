import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CardSeries } from "../components/Cards/CardSeries";
import { Footers } from "../components/Footers/Footers";
import { migajasUpdate, productRoute, titlePages } from "../modules/actions/products";

export const Series = () => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch()
  useEffect(() => {
    if(state.migajas.length > 2){
      let initial = state.migajas
      initial = initial.slice(0, 1)
      dispatch(productRoute(false));
      dispatch(migajasUpdate(initial));
    }
    dispatch(titlePages('series'));
  }, [])
  
  return (
    <div className="h-full overflow-auto flex justify-between flex-col">
      <div className="gridCards24 mb-4 gap-8 px-4">
        {state.productsView.map((data, i) => (
          <CardSeries data={data} key={i} />
        ))}
      </div>
      <Footers />
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CardSeries } from "../components/Cards/CardSeries";
import { titlePages } from "../modules/actions/products";

export const Series = () => {
  const state = useSelector((state) => state.product.productsView);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(titlePages('series'));
  }, [])
  
  return (
    <div className="h-full overflow-auto">
      <div className="min-h-full gap-8 grid medium:grid-cols-card_grid_medium small:grid-cols-card_grid_small xsmall:grid-cols-card_grid_xsmall">
        {state.map((data, i) => (
          <CardSeries data={data} key={i} />
        ))}
      </div>
    </div>
  );
};

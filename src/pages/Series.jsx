import React from "react";
import { useSelector } from "react-redux";
import { CardSeries } from "../components/Cards/CardSeries";

export const Series = () => {
  const state = useSelector((state) => state.product.productsView);
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

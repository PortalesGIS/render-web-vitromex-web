import React from "react";
import { useSelector } from "react-redux";
import { CardSeries } from "../components/Cards/CardSeries";

export const Series = () => {
  const state = useSelector((state) => state.product.productsView);
  return (
    <div className="h-full overflow-auto">
      <div className="gridLayout min-h-full gap-y-4">
        {state.map((data, i) => (
          <CardSeries data={data} key={i} />
        ))}
      </div>
    </div>
  );
};

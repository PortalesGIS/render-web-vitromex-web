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
      <div className="gridCards24 mb-4">
        {state.map((data, i) => (
          <CardSeries data={data} key={i} />
        ))}
      </div>
    </div>
  );
};

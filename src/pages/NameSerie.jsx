import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { CardProduct } from "../components/Cards/CardProduct";
import { titlePages } from "../modules/actions/products";

export const NameSerie = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  useEffect(() => {
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
      <div className="min-h-full gap-8 grid medium:grid-cols-card_grid_medium small:grid-cols-card_grid_small xsmall:grid-cols-card_grid_xsmall">
        {numViesta.map((product, i) => (
          <CardProduct product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

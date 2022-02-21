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
      <div className="gridCards24 mb-4">
        {numViesta.map((product, i) => (
          <CardProduct product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

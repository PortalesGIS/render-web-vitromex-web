import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import { CardColor } from "../components/Cards/CardColor";
import { titlePages } from "../modules/actions/products";

export const ColorSerie = () => {
  const dispatch = useDispatch()
  // const params = useParams();
  // console.log(params);
  useEffect(() => {
    dispatch(titlePages('Variaciones'))
  }, [])
  
  let numViesta = [1,2,3,4,5,6,7,8,10]
  return <div className="h-full overflow-auto">
  <div className="gridCards24">
    {numViesta.map((color, i) => (
      <CardColor color={color} key={i}/>
    ))}
  </div>
</div>
};

import React from "react";
import { useForm } from "../../hooks/useForm";
import zoom from "../../assets/zoom.svg";

export const FindProduct = () => {
  const [formValues, handleInputChange] = useForm({
    product: "",
  });
  const { product } = formValues;
  return (
    <div className="relative flex items-center text-white">
      <input
        type="text"
        placeholder="Buscar producto"
        name="product"
        className="w-full appearance-none border-b-2 border-white bg-transparent focus:outline-none"
        value={product}
        onChange={handleInputChange}
      />
      <span
        id="visiblity-toggle"
        className="absolute right-0 h-5 w-5 cursor-pointer"
      >
        <img src={zoom} alt="ojoabierto" />
      </span>
      {/* <div className="absolute w-full h-20 bg-white top-7 text-black">
        <p className="text-14px">Busqueda de productos</p>
      </div> */}
    </div>
  );
};

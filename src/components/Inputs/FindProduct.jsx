import React, { useState } from "react";
import zoom from "../../assets/zoom.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Path } from "../../utils/route";
import { useDispatch } from "react-redux";
import { findProductGeneral } from "../../modules/actions/products";

export const FindProduct = () => {
  const state = useSelector((state) => state.product.productsGeneral);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    product: "",
  });
  const [productsFilter, setproductsFilter] = useState([]);
  const { product } = formValues;

  const handleInputChange = ({ target }) => {
    let find = [];
    find = state.filter(
      (serie) =>
        serie.name.toLowerCase().indexOf(target.value.toLowerCase()) > -1
    );
    if(target.value === ''){
      setproductsFilter([])
    }else{
      let viewFind = find.slice(0, 10);
      setproductsFilter(viewFind);
    }
    setFormValues({
      product: target.value,
    });
  };

  const findObject = (e) => {
    e.preventDefault();
    if (product !== "") {
      dispatch(findProductGeneral(product))
      navigate(`${Path.PRODUCT}/${Path.SERIES}`)
    }
  };
  return (
    <form
      className="flex items-center text-white"
      onSubmit={findObject}
    >
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
      {productsFilter.length > 0 && (
        <div className="absolute z-20 w-full bg-white top-7 text-black">
          {productsFilter.map((serie, i) => (
            <p className="text-14px" key={i}>{serie.name}</p>
          ))}
        </div>
      )}
    </form>
  );
};

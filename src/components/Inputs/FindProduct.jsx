import React, { useEffect, useState } from "react";
import zoom from "../../assets/zoom.svg";
import tache from "../../assets/tache.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Path } from "../../utils/route";
import { useDispatch } from "react-redux";
import {
  clearFilter,
  findProductGeneral,
  moveMigajas,
} from "../../modules/actions/products";

export const FindProduct = () => {
  const state = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    product: "",
  });
  const [productsFilter, setproductsFilter] = useState([]);
  const { product } = formValues;

  useEffect(() => {
    if (state.migajas.length > 1) {
      setFormValues({
        product: "",
      });
      dispatch(clearFilter());
      setFormValues({
        product: "",
      });
    }
  }, [state.migajas]);

  const handleInputChange = ({ target }) => {
    let find = [];
    find = state.productsGeneral.filter(
      (serie) =>
        serie.name.toLowerCase().indexOf(target.value.toLowerCase()) > -1
    );
    if (target.value === "") {
      setproductsFilter([]);
    } else {
      let viewFind = find.slice(0, 10);
      setproductsFilter(viewFind);
    }
    setFormValues({
      product: target.value,
    });
  };

  const findObject = (productSelect = null) => {
    if (product !== "") {
      if (state.migajas.length > 1) {
        let initial = state.migajas;
        initial = initial.slice(0, 1);
        dispatch(moveMigajas(initial, 'Series', false));
      }
      if (productSelect) {
        dispatch(findProductGeneral(productSelect));
      } else {
        dispatch(findProductGeneral(product));
      }
      setproductsFilter([]);
      navigate(`${Path.PRODUCT}/${Path.SERIES}`);
    }
  };
  const inputEnter = (e) => {
    e.preventDefault();
    findObject();
  };

  const clickObject = (serie = null) => {
    if (serie) {
      findObject(serie);
      setFormValues({
        product: serie.toLowerCase(),
      });
    } else {
      if (state.titlePage !== "Resultados de la búsqueda") {
        findObject();
      } else {
        dispatch(clearFilter());
        setFormValues({
          product: "",
        });
      }
    }
  };
  return (
    <form className="flex items-center text-white" onSubmit={inputEnter}>
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
        onClick={() => {
          clickObject();
        }}
      >
        <img
          src={state.titlePage !== "Resultados de la búsqueda" ? zoom : tache}
          alt="ojoabierto"
        />
      </span>
      {productsFilter.length > 0 && (
        <div className="absolute z-20 w-full bg-white top-7 text-black">
          {productsFilter.map((serie, i) => (
            <div
              className="text-14px hover:bg-neutral hover:text-white cursor-pointer"
              key={i}
              onClick={() => {
                clickObject(serie.name);
              }}
            >
              <p>{serie.name}</p>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

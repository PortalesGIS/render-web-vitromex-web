import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { moveMigajas, realoadPage } from "../../modules/actions/products";

export const Migajas = () => {
  const state = useSelector((state) => state.product);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.productsGeneral.length > 0) {
      if(state.migajas.length === 0){
        dispatch(realoadPage(location.pathname));
      }
    }
    // eslint-disable-next-line
  }, [state.productsGeneral]);
  const redirectPath = (data, i) => {
    if (i === 0) {
      let initial = state.migajas
      initial = initial.slice(0, i+1)
      dispatch(moveMigajas(initial, initial[i].name ,false));
      navigate(data.path);
    }else {
      if(i < state.migajas.length-1){
        let removeData = state.migajas
        removeData = removeData.slice(0, i+1)
        dispatch(moveMigajas(removeData, removeData[i].name));
        navigate(data.path);
      }
    }
  };
  return (
    <div>
      {state.migajas.length > 0 &&
        state.migajas.map((paths, i) => (
          <span key={paths.name}>
            <span
              className={`capitalize cursor-pointer text-[15px] ${i === state.migajas.length-1 ? 'font-bold' : 'text-neutral40'}`}
              onClick={() => {
                redirectPath(paths, i);
              }}
            >
              {paths.name}
            </span>
            {i !== state.migajas.length - 1 && (
              <span className="text-black font-medium"> | </span>
            )}
          </span>
        ))}
    </div>
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { eliminatePagination, migajasUpdate, productRoute } from "../../modules/actions/products";

export const Migajas = () => {
  const state = useSelector((state) => state.product.migajas);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.length === 0) {
      let separatePath = location.pathname.split("/");
      let dataMigajas = [];
      let textPath = "/products";
      for (let i = 2; i < separatePath.length; i++) {
        const element = separatePath[i];
        textPath = textPath + "/" + element;
        dataMigajas.push({
          path: textPath,
          name: element,
        });
      }
      dispatch(eliminatePagination(dataMigajas));
    }
  }, []);
  const redirectPath = (data, i) => {
    if (i === 0) {
      let initial = state
      initial = initial.slice(0, i+1)
      dispatch(productRoute(false));
      dispatch(migajasUpdate(initial));
      navigate(data.path);
    }else {
      if(i < state.length-1){
        let removeData = state
        removeData = removeData.slice(0, i+1)
        dispatch(migajasUpdate(removeData));
        navigate(data.path);
      }
    }
  };
  return (
    <div>
      {state.length > 0 &&
        state.map((paths, i) => (
          <span key={paths.name}>
            <span
              className="capitalize cursor-pointer"
              onClick={() => {
                redirectPath(paths, i);
              }}
            >
              {paths.name}
            </span>
            {i !== state.length - 1 && (
              <span>/</span>
            )}
          </span>
        ))}
    </div>
  );
};

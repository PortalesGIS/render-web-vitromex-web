import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { migajasUpdate } from "../../modules/actions/products";

export const Migajas = () => {
  const state = useSelector((state) => state.product.migajas);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.length === 0) {
      let separatePath = location.pathname.split("/");
      let nametitle = ''
      let namePath = separatePath[separatePath.length - 1];
      let dataMigajas = [
        {
          path: location.pathname,
          name: namePath,
        },
      ];
      if(namePath !== 'series'){
        nametitle = 'Nose'
      }else{
        nametitle = 'Series disponibles'
      }
      dispatch(migajasUpdate(dataMigajas, nametitle));
    }
  }, []);
  
  return (
    <div>
      {state.length > 0 &&
        state.map((paths, i) => (
          <div key={paths.name}>
            <Link to={paths.path} className="" >
              <span className="capitalize">
              {paths.name}
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
};

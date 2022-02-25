import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { redirectCard } from "../../modules/actions/products";
import { Path } from "../../utils/route";

export const CardSeries = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigateParams = () => {
    dispatch(
      redirectCard(
        data.name,
        `${Path.PRODUCT}/${Path.SERIES}/${data.id}`,
        data.id
      )
    );
    navigate(`${Path.PRODUCT}/${Path.SERIES}/${data.id}`);
  };
  // console.log(data.rectified);
  return (
    <div
      className={`cursor-pointer px-3`}
      onClick={navigateParams}
    >
      <div className="h-full overflow-hidden">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={
              data.img
                ? data.img
                : "https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png"
            }
            alt="serie"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="">
          <div>
            <h1 className="medium:text-Text-xl small:text-14px text-black font-semibold">
              {data.name}
            </h1>
          </div>
          <div className="medium:text-12px xsmall:text-10px text-primario/gris">
            {data.format.map((format, i) => (
              <span  key={format}>
                {i < 2 && `${format}`}
                {i !== format.length - 1 && i < 1&& ','}
                {i === 2 && '...'}
              </span>

            ))}
            <span>/</span>
            {data.rectified.map((rectified, i) => (
              <span key={rectified}>
                {i > 0 && <span> y </span>}
                {rectified === "0" && "Rectificado"}
                {rectified === "1" && "No rectificado"}
              </span>
            ))}
            <span>/</span>
            {data.finish.map((finish) => (
              <span key={finish}>{finish} </span>
            ))}
            <span>/</span>
            <span>Hasta {data.renders} variaciones</span>
          </div>
        </div>
      </div>
    </div>
  );
};

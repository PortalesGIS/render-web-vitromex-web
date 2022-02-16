import React from "react";

export const CardSeries = ({ data }) => {
  return (
    <div className="col-span-2 medium:col-span-3 flex justify-center items-center">
      <div className="cardSeries flex flex-col gap-y-2">
        <div className="imgCardSeries overflow-hidden self-center">
          <img src={data.img} alt="serie" className="h-full w-full" />
        </div>
        <div>
          <div>
            <h1>{data.name}</h1>
          </div>
          <div>texto</div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useSelector } from "react-redux";
import { Migajas } from "../shared/Migajas";
import { Pagination } from "../shared/Pagination";
// import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";

export const HeaderSeries = () => {
  const state = useSelector((state) => state.product.productActive)

  return (
    <div className="flex justify-between small:items-center xsmall:flex-col small:flex-row">
      <div>
        <Migajas />
      </div>
      <div className="xsmall:flex xsmall:justify-between">
        <div className="small:hidden">
          {/* <ButtonDownloadZip /> */}
        </div>
        {!state && (
          <Pagination />
        )}
      </div>
    </div>
  );
};

import React from "react";
import { Migajas } from "../shared/Migajas";
import { Pagination } from "../shared/Pagination";
import { ButtonDownload } from "../Buttons/ButtonDownload";

export const HeaderSeries = () => {
  return (
    <div className="flex justify-between small:items-center h-full xsmall:flex-col small:flex-row">
      <div>
        <Migajas />
      </div>
      <div className="xsmall:flex xsmall:justify-between">
        <div className="small:hidden">
          {/* <ButtonDownload /> */}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

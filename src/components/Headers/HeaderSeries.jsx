import React from "react";
import { Migajas } from "../shared/Migajas";
import { Pagination } from "../shared/Pagination";
// import { ButtonDownloadZip } from "../Buttons/ButtonDownloadZip";

export const HeaderSeries = () => {
  return (
    <div className="flex justify-between small:items-center xsmall:flex-col small:flex-row">
      <div>
        <Migajas />
      </div>
      <div className="xsmall:flex xsmall:justify-between">
        <div className="small:hidden">
          {/* <ButtonDownloadZip /> */}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

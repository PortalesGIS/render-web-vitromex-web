import React from "react";

export const ImagesLinks = ({ img, url }) => {
  return (
    <div className="h-5 w-5 large:h-6 large:w-6 flex justify-center items-center">
      <a href={url} className="h-full w-full">
        <img src={img} alt="icono" className="h-full w-full"/>
      </a>
    </div>
  );
};

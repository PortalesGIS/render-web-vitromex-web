import React from "react";

export const ImagesLinks = ({ img, url }) => {
  return (
    <div className="h-5 w-5 flex justify-center items-center">
      <a href={url}>
        <img src={img} alt="icono" />
      </a>
    </div>
  );
};

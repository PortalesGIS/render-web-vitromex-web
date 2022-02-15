import React from "react";
import { HeaderProduct } from "../components/Headers/HeaderProduct";
import { Menu } from "../components/Menus/Menu";

export const ProductLayout = () => {
  return (
    <div className="gridLayout h-screen grid-rows-layout_product">
      <HeaderProduct />
      {/* menu */}
      <Menu />
      {/* cuerpo */}
      <div className="bg-red-300 medium:col-span-10 col-span-full">Body</div>
    </div>
  );
};

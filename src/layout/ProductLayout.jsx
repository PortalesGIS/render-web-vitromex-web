import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HeaderProduct } from "../components/Headers/HeaderProduct";
import { Menu } from "../components/Menus/Menu";
import { useShowMenu } from "../hooks/useShowMenu";
import { useDispatch } from "react-redux";
import { productAxios } from "../modules/actions/products";
import { HeaderSeries } from "../components/Headers/HeaderSeries";
import { HeaderTitlePage } from "../components/Headers/HeaderTitlePage";

export const ProductLayout = () => {
  const dispatch = useDispatch();
  const [menuNavbar, showMenu] = useShowMenu();

  useEffect(() => {
    dispatch(productAxios());
  }, []);

  return (
    <div className="gridLayout h-screen grid-rows-layout_product">
      <HeaderProduct menuValue={menuNavbar} actionmenu={showMenu} />
      {/* menu */}
      <Menu menuResponsive={menuNavbar} actionmenu={showMenu} />
      {/* cuerpo */}
      <div className="medium:col-span-10 col-span-full">
        <div className="gridLayout h-full grid-rows-layout_header px-4 pt-4 gap-y-12 small:gap-y-4">
          <div className="col-span-full h-full">
            <div className="flex justify-between flex-col h-full gap-4">
              <HeaderSeries />
              <HeaderTitlePage />
            </div>
          </div>
          <div className="col-span-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

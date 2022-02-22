import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HeaderProduct } from "../components/Headers/HeaderProduct";
import { Menu } from "../components/Menus/Menu";
import { useShowMenu } from "../hooks/useShowMenu";
import { useDispatch } from "react-redux";
import { productAxios } from "../modules/actions/products";
import { HeaderSeries } from "../components/Headers/HeaderSeries";
import { HeaderTitlePage } from "../components/Headers/HeaderTitlePage";
import { ExitModal } from "../components/Modal/ExitModal";
import { useSelector } from "react-redux";
import { HeaderSub } from "../components/Headers/HeaderSub";

export const ProductLayout = () => {
  const state = useSelector((state) => state.ui.modalStatus);
  const dispatch = useDispatch();
  const [menuNavbar, showMenu] = useShowMenu();

  useEffect(() => {
    dispatch(productAxios());
  }, []);

  return (
    <>
      {state && <ExitModal />}
      <div className="gridLayout grid-rows-layout_product fixed inset-0 h-full">
        <HeaderSub />
        <HeaderProduct menuValue={menuNavbar} actionmenu={showMenu} />
        {/* menu */}
        <Menu menuResponsive={menuNavbar} actionmenu={showMenu} />
        {/* cuerpo */}
        <div className="medium:col-span-10 col-span-full">
          <div className="gridLayout h-full grid-rows-layout_header">
            <div className="col-span-full h-full px-4 pt-2 small:pt-4">
              <div className="flex justify-between flex-col h-full gap-4">
                <HeaderSeries />
                <HeaderTitlePage />
              </div>
            </div>
            <div className="col-span-full h-full w-full pt-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

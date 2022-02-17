import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../modules/actions/auth";
import { modalActive } from "../../modules/actions/ui";
import { Path } from "../../utils/route";

export const ExitModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Cancel = () => {
    dispatch(modalActive(false));
  };
  const Exit = () => {
    dispatch(logout())
    navigate(Path.LANDING);
  };
  return (
    <div className="absolute z-40 h-full w-full">
      <div className="relative h-full">
        <div className="bg-black opacity-25 h-full w-full absolute" />
        <div className="absolute h-full w-full flex justify-center items-center">
          <div className="bg-white h-40 w-72 pt-6">
            <div className="px-6">
              <h1 className="text-black text-20px font-bold">Salir</h1>
              <p className="text-Text-sm">¿Estás seguro que deseas salir?</p>
            </div>
            <div className="pt-9 pr-2">
              <div className="flex justify-end items-end gap-2">
                <button
                  className="h-8 w-20 flex justify-center items-center bg-black text-white "
                  onClick={Cancel}
                >
                  <span>Cancelar</span>
                </button>
                <button
                  className="h-8 w-20 flex justify-center items-center border border-black"
                  onClick={Exit}
                >
                  <span>Salir</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

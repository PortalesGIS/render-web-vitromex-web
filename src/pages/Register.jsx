import React, { useEffect } from "react";
import { FormRegister } from "../components/Form/FormRegister";
import { TitleForm } from "../components/Form/TextForm/TitleForm";
import { Path } from "../utils/route";
import logovitrolab from "../assets/VitroLab.svg";
import { useDispatch } from "react-redux";
import { isPassRecover } from "../modules/actions/ui";

export const Register = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(isPassRecover(false))
    // eslint-disable-next-line
  }, [])
  return (
    <div className="min-h-full gridLayout">
      <div className="bg-register bg-cover bg-no-repeat bg-center hidden medium:block medium:col-span-3 animate__animated animate__fadeIn" />
      <RegistroMedium />
    </div>
  );
};

const RegistroMedium = () => {
  return (
    <div className="medium:col-span-9 xsmall:col-span-full flex justify-center items-center bg-neutral80">
      <div className="flex flex-col gap-y-14 xsmall:pt-20 medium:pt-10 mb-28">
        <div>
        <div className="flex animate__animated animate__fadeIn mb-5">
          <img src={logovitrolab} alt="vitrolab" className=" medium:w-[40%]"/>
        </div>
          <TitleForm
            direction={`${Path.FORM}/${Path.LOGIN}`}
            title={"registro"}
            text={"¿Ya tienes cuenta?"}
            textdirection={"Iniciar sesión"}
          />
        </div>
        <FormRegister />
      </div>
    </div>
  );
};

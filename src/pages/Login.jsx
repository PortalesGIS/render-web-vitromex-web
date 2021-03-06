import React from "react";
import { FormLogin } from "../components/Form/FormLogin";
import logovitrolab from "../assets/VitroLab.svg";
import { useSelector } from "react-redux";

export const Login = () => {
  return (
    <div className="min-h-full gridLayout">
      <div className={`bg-landing bg-cover bg-no-repeat bg-center hidden medium:block medium:col-span-5 animate__animated animate__fadeIn`} />
      <LoginMedium />
    </div>
  );
};

const LoginMedium = () => {
  const state = useSelector(state => state.ui.isFadeRegister)
  return (
    <div className="medium:col-span-7 xsmall:col-span-full flex justify-center pt-20 bg-neutral80 ">
      <div className="flex flex-col gap-y-14">
      <div className={`flex ${!state && ' animate__fadeIn'}  animate__animated`}>
          <img src={logovitrolab} alt="vitrolab"/>
        </div>
        <FormLogin />
      </div>
    </div>
  );
};

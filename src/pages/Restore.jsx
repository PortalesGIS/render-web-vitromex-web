import React, { useEffect } from 'react'
import { FormRestore } from '../components/Form/FormRestore'
import logovitrolab from "../assets/VitroLab.svg";
import { useDispatch } from 'react-redux';
import { isPassRecover } from '../modules/actions/ui';

export const Restore = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(isPassRecover(true))
  }, [])
  
  return (
    <div className="min-h-full gridLayout">
      <div className="bg-restore bg-cover bg-no-repeat bg-center hidden medium:block medium:col-span-5 animate__animated animate__fadeIn" />
      <RestoreMedium />
    </div>
  )
}


const RestoreMedium = () => {
  return (
    <div className="medium:col-span-7 xsmall:col-span-full flex justify-center pt-20 bg-neutral80 ">
      <div className="flex flex-col gap-y-14">
      <div className="flex">
          <img src={logovitrolab} alt="vitrolab" className=""/>
        </div>
        <FormRestore />
      </div>
    </div>
  );
};

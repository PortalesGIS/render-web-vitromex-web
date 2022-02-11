import React from 'react'
import { ButtonRedirect } from '../components/Buttons/ButtonRedirect'
import { FormRegister } from '../components/Form/FormRegister'
import { Path } from '../utils/route'

export const Register = () => {
  return (
    <div className="grid-cols-xsmall small:grid-cols-small  grid">
      <div className="small:col-start-2 small:col-span-6 medium:col-start-3 medium:col-span-4 col-span-4 px-4">
        <div className="">
          <FormRegister />
          <div className="my-12 flex justify-center items-center">
            <ButtonRedirect
              text={"Crear Usuario"}
              direction={`${Path.LANDING}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

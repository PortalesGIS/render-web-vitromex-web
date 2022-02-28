import React from 'react'
import { FormRestore } from '../components/Form/FormRestore'

export const Restore = () => {
  return (
    <div className="min-h-full gridLayout">
      <div className="bg-restore bg-cover bg-no-repeat bg-center hidden medium:block medium:col-span-5" />
      <div className="medium:col-span-7 xsmall:col-span-full flex justify-center items-center bg-primario60 ">
        <div className="flex flex-col gap-y-14">
          <div className="uppercase text-center font-bold text-Text-4xl text-white">
            <h1>Vitrorender</h1>
          </div>
          <FormRestore />
        </div>
      </div>
    </div>
  )
}

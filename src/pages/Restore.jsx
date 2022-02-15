import React from 'react'
import { FormRestore } from '../components/Form/FormRestore'

export const Restore = () => {
  return (
    <div className="grid-cols-xsmall small:grid-cols-small  grid">
      <div className="small:col-start-2 small:col-span-6 medium:col-start-3 medium:col-span-4 col-span-4 px-4">
        <div className="">
          <FormRestore />
        </div>
      </div>
    </div>
  )
}

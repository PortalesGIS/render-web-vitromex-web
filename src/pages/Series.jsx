import React from 'react'
import { useSelector } from "react-redux";
export const Series = () => {
  const state = useSelector((state) => state.product)
  console.log(state);
  return (
    <div className='gridLayout'>
      series
    </div>
  )
}

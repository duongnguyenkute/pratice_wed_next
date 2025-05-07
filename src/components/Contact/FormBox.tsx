import React from 'react'
interface Title {
    title: String;
}
const FormBox = ( { title }: Title ) => {
  return (
    <div className='w-full flex flex-col gap-3.5'>
      <label className='text-lg font-semibold leading-relaxed w-full' htmlFor=""> { title } </label>
      <input className='px-4 py-3 bg-quaternary w-full' type="text"/>
    </div>
  )
}

export default FormBox
import React from 'react'

const Message = () => {
  return (
    <div className='w-full'>
        <label className='text-lg leading-relaxed font-semibold pb-6 block' htmlFor="">Message*</label>
        <textarea className='bg-quaternary p-12 w-full' name="" id=""></textarea>
    </div>
  )
}

export default Message
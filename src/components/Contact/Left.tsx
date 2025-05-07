import React from 'react'

const Left = () => {
  return (
    <div className=''>
      <p className='text-2xl font-semibold leading-7 text-tertiary'>Contact Information</p>
      <div className='pt-7'>
        <p className='text-lg font-semibold leading-relaxed'>Mailing Address:</p>
        <p className='pb-3 border-b-1 border-secondary text-base font-normal leading-normal'>
          American Respiratory Care Foundation  
          <br/>
          Attn: Crystal Leighton 
          <br/>
          9425 North MacArthur Blvd, Suite 100 
          <br/>
          Irving, TX 75063-4706
        </p>
        <p className='py-3 border-b-1 border-secondary text-base font-normal leading-normal'><strong>Phone</strong>: (972) 484-2720</p>
        <p className='pt-3 text-base font-normal leading-normal'><strong>Fax</strong>: (972) 484-2720</p>
      </div>
    </div>
  )
}

export default Left
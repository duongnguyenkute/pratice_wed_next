import React from 'react'
import InformLeft from './InformLeft'
import InformRight from './InformRight'

const UpcomingInform = () => {
  return (
    <div className='absolute left-0 top-1/2 px-35 flex'>
      <InformLeft/>
      <InformRight/>
    </div>
  )
}

export default UpcomingInform
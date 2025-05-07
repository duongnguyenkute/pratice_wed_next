import React from 'react'
import TrusteesContent from './TrusteesContent'
import TrusteesCard from './TrusteesCard'
import TrusteesList from './TrusteesList'


const Trustees = () => {
  return (
    <div className='px-35 pt-23.5 pb-25'>
        <TrusteesContent/>
        <TrusteesList/>   
    </div>
  )
}

export default Trustees
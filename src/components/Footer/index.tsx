import React from 'react'
import Infomation from './Infomation'
import About from './About'
import HowWeGive from './HowWeGive'
import Donations from './Donations'
import FooterBot from './FooterBot'


const index = () => {
  return (
    <div>
      {/* Footer Top */}
      <div className='px-18 py-25 flex gap-13'>
        <Infomation/>
        <About/>
        <HowWeGive/>
         <Donations/>
      </div>
      {/* Footer Bot */}
      <FooterBot/>

    </div>
  )
}

export default index
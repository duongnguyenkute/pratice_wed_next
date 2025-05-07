import React from 'react'
import { TitlePage } from "@/components/TitlePage"
import Left from "@/components/Contact/Left"
import Right from "@/components/Contact/Right"
const index = () => {
  return (
    <div className=''>
        <TitlePage title={"Contact Us"}/>
        <div className='px-35 pt-17.5 pb-25 flex gap-47'>
          <Left/>
          <Right/>
        </div>
    </div>
  )
}

export default index
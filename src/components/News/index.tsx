import React from 'react'
import { TitlePage } from "@/components/TitlePage";
import Left from "@/components/News/Left"
import Right from "@/components/News/Right"
const index = () => {
  return (
    <div>
        <TitlePage title={"ARCF 2024 Fundraising Event"}/>
        <div className='px-35 pt-17.5 pb-20 flex gap-16'>
          <Left/>
          <Right/>
        </div>
    </div>
  )
}

export default index
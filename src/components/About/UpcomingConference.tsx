import React from 'react'
import UpcomingContent from './UpcomingContent'
import UpcomingInform from './UpcomingInform'

const UpcomingConference = () => {
  return (
    <div className="pt-17.5 pb-25 px-35 mb-82 bg-[url('/background.png')] bg-cover bg-center relative">
        <UpcomingContent/>
        <UpcomingInform/>     
    </div>
  )
}

export default UpcomingConference
import React from 'react'
import FoundationItem from "@/components/News/FoundationItem"
const EventFoundation = () => {
  return (
    <div>
        <p className='text-lg font-bold leading-snug pb-3'>Foundation News</p>
        <div className='flex flex-col  gap-3'>
            <FoundationItem title1={"ARCF Fundraising Event"} title2={""} date={"August 15, 2024"} />
            <FoundationItem title1={"59th Respiratory Care"} title2={"Journal Conference"} date={"May 27, 2020"} />
            <FoundationItem title1={"Support ARCF When You Use the"} title2={"Amazon App"} date={"September 29, 2019"} />
            <FoundationItem title1={"ARCF Fundraiser Gala:"} title2={"A Night Under the Sea"} date={"May 30, 2019"} />
            <FoundationItem title1={"58th Respiratory Care"} title2={"Journal Conference"} date={"April 5, 2019"} />
            <FoundationItem title1={"7th Annual ARCF Fundraising:"} title2={"Save the Date!"} date={"April 5, 2019"} />
        </div>
    </div>
  )
}

export default EventFoundation
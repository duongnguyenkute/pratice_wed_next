import React from 'react'
import EventCard from "@/components/News/EventCard"
import EventDetail from "@/components/News/EventDetail"
import EventSponsorship from "@/components/News/EventSponsorship"

const Left = () => {
  return (
    <div className='w-3/4'>
        <EventCard/>
        <EventDetail/>
        <EventSponsorship/>
    </div>
  )
}

export default Left
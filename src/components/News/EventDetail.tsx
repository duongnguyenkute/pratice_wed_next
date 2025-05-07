import React from 'react'
import { Button } from "@/components/Button";
const EventDetail = () => {
  return (
    <div>
      <div className="pb-6">
        <h2 className="text-tertiary text-3xl font-semibold leading-10 pb-3.5">Event Details</h2>
        <p className="text-lg font-normal leading-relaxed">
          <strong>Date</strong>: Nov. 19
          <br/>
          <br/>
          <strong>Time</strong>: 6:30 p.m.9:30 p.m., registration opens at 5:30 p.m.
          <br/>
          <br/>
          <strong>Location</strong>: Cuba Libra Restaurant & Rum Bar, Orlando, FL
          <br/>
          <br/>
          <strong>Dress Code</strong>: Business casual (salsa dancing attire encouraged)
          <br/>
          <br/>
          <strong>Tickets</strong>: $125 includes dinner, and two drinks. Seating is limited, purchase your tickets in advance.
          <br/>
          <strong>Deadline to purchase tickets is Oct. 31.</strong> No tickets will be sold at the door. Purchase a table of 10 for your team and
            receive special recognition and reserved seating.
        </p>
      </div>
      <Button text={"Purchase Tickets"}></Button>
    </div>
  )
}

export default EventDetail
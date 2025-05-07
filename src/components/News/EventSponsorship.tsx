import React from 'react'
import SponsorshipTable from "@/components/News/SponsorshipTable"
import Slider from "@/components/News/Slider"
const EventSponsorship = () => {
  return (
    <div className="pt-17.5">
      <h2 className="text-tertiary text-3xl font-semibold leading-1 pb-4">Event Sponsorship</h2>
      <p className="text-lg font-normal leading-relaxed">Take your support to the next level with a sponsorship/table purchase for the event. See details below.</p>
      <SponsorshipTable/>   
      <Slider/>
      <div className="pt-7.5 flex gap-4.5">
        <button className="cursor-pointer transition duration-300 hover:opacity-70"><img src="ArrowCircleLeft.png" alt="" /></button>
         <div>
          <p className="text-lg font-normal leading-relaxed text-[#6B6D75BF]">Previous Link</p>
           <p className="text-lg font-bold uppercase leading-relaxed">59th RESPIRATORY CARE Journal Conference</p>
        </div>
      </div>
    </div>
  )
}

export default EventSponsorship
import React from 'react'
import OurMissionSection from "@/components/Mission/OurMissionSection"
import HowWeGiveSection from "@/components/Mission/HowWeGiveSection"
import SponsorshipSection from "@/components/Mission/SponsorshipSection"
import NewsSection from "@/components/Mission/NewsSection"

const index = () => {
  return (
    <div>
        <OurMissionSection/>
        <HowWeGiveSection/>
        <SponsorshipSection/>
        <NewsSection/>
    </div>
  )
}

export default index
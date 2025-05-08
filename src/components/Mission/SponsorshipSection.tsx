import React from 'react'
import SponsorshipItem from './SponsorshipItem'

const SponsorshipSection = () => {
  return (
    <div className="bg-secondary">
      <div className="flex flex-col gap-4 items-center
                      pt-4 px-4 pb-6 
                      sm:pt-6 sm:px-6 sm:pb-8 
                      md:pt-8 md:px-6 md:pb-10 
                      xl:pt-16 xl:px-32 xl:pb-24 xl:gap-18.5
      ">
        <h3 className="font-bold leading-10 items-center text-5xl text-white">What We Gave in 2020</h3>
        <div className="flex flex-col flex-wrap md:flex-row justify-between w-full gap-1">
          <SponsorshipItem money='$23,766' title1='In Student' title2='Education Awards'/>
          <SponsorshipItem money='$9,216' title1='In Research' title2='Awards & Grants'/>
          <SponsorshipItem money='$8,041' title1='In Achievement' title2='Awards'/>
          <SponsorshipItem money='$3,900' title1='In Fellowships' title2='Given'/>
        </div>
      </div>
    </div>
  )
}

export default SponsorshipSection
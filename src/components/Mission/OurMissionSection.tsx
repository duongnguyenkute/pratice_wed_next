import React from 'react'
import OurMissionLeft from "@/components/Mission/OurMissionLeft"
import OurMissionRight from "@/components/Mission/OurMissionRight"
const OurMissionSection = () => {
  return (
    <div className="h-full bg-[url('/background.png')] bg-cover bg-center flex justify-between">
        <OurMissionLeft/>
        <OurMissionRight/>
    </div>
  )
}

export default OurMissionSection
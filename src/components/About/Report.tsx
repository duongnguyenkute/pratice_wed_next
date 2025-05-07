import React from 'react'
import { Button } from "@/components/Button"
const Report = () => {
  return (
    <div className="py-14 px-64.5 bg-secondary flex justify-between items-center">
        <div>
            <h3 className="text-white text-5xl font-bold leading-10"> Financial Reports</h3>
            <p className="text-white text-lg leading-relaxed pt-5">ARCF regularly files IRS Form 900. These forms are available online at GuideStar.</p>
        </div>
        <div>
            <Button text="View Forms"/>
        </div>
    </div>
  )
}

export default Report
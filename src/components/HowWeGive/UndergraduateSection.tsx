import React from 'react'
import { Award } from "@/components/Award"
const UndergraduateSection = () => {
  return (
    <div className="py-17.5">
      <h3 className="text-5xl font-bold leading-[3.5rem] px-[140px]">Undergraduate Student Awards</h3>
      <Award key="1" text="Morton B. Duggan, Jr. Memorial Education Recognition Award"/>
      <Award key="2" text="Jimmy A. Young Memorial Education Recognition Award"/>
      <Award key="3" text="NBRC William W. Burgin, Jr., MD and Robert M. Lawrence, MD Education Recognition Award"/>
      <Award key="4" text="Morton B. Duggan, Jr. Memorial Education Recognition Award"/>
    </div>
  )
}

export default UndergraduateSection
import React from 'react'
import TrusteesCard from './TrusteesCard'
const TrusteesListARCF = () => {
  return (
    <div>
        <div className='pt-8.5 pb-17.5 flex gap-4 border-b-1 border-secondary'>
        <TrusteesCard
            img = "avt14.png"
            position = "Executive Director"
            name = "Daniel Garrett"
            title = ""
            university = {["Irving, TX"]}
            highlight = ""
        />
        <TrusteesCard
            img = "avt15.png"
            position = "ARCF CFO"
            name = "LaVerne Davis"
            title = ""
            university = {["Irving, TX"]}
            highlight = ""
        />

        <TrusteesCard
            img = "avt16.png"
            position = "ARCF Executive Assistant"
            name = "Crystal Leighton"
            title = ""
            university = {["Irving, TX"]}
            highlight = ""
        />
      </div>
    </div>
  )
}

export default TrusteesListARCF
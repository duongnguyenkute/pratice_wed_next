import React from 'react'
import TrusteesCard from './TrusteesCard'

const TrusteesList = () => {
  return (
    <div className='pt-8.5 pb-17.5 flex gap-4 border-b-1 border-secondary '>
        <TrusteesCard
            img = "carl-hinkson%201.png"
            position = "CHAIR"
            name = "Carl R. Hinkson"
            title = ""
            university = ""
            highlight = ""
        />

        <TrusteesCard
            img = "avt1.png"
            position = "Vice-chair"
            name = "Dana Evans"
            title = ""
            university = ""
            highlight = ""
        />

        <TrusteesCard
            img = "avt2.png"
            position = "secretary/treasurer"
            name = "Kari Neville, BSRC, RRT, RRT-NPS, FAARC"
            title = ""
            university = ""
            highlight = "Kari has been a respiratory therapist and AARC member for over 27 years. She is currently a Senior Clinical Specialist for Bunnell, Incorporated. Her primary job responsibility is education on high frequency ventilation for neonatal and pediatric patients. Kari has worked mostly in pediatric and neonatal care, transport, ECMO, management/leadership, and education. She has been in volunteer leadership roles for the past 23 years within the Colorado Society for Respiratory Care, AARC House of Delegates, and the AARC Board of Directors. Kari is currently serving as Secretary/Treasurer of the AARC and is involved in various committees within the organization."
        />
    </div>
  )
}

export default TrusteesList
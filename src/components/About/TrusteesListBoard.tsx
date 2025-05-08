

import React from 'react'
import TrusteesCard from './TrusteesCard'

const TrusteesList = () => {
  return (
    <div>
      <div className='pt-8.5 pb-17.5 flex gap-4 border-b-1 border-secondary'>
        <TrusteesCard
            img = "carl-hinkson%201.png"
            position = "CHAIR"
            name = "Carl R. Hinkson"
            title = ""
            university = {[]}
            highlight = ""
        />
        <TrusteesCard
            img = "avt1.png"
            position = "Vice-chair"
            name = "Dana Evans"
            title = ""
            university = {[]}
            highlight = ""
        />

        <TrusteesCard
            img = "avt2.png"
            position = "secretary/treasurer"
            name = "Kari Neville, BSRC, RRT, RRT-NPS, FAARC"
            title = ""
            university = {[]}
            highlight = "Kari has been a respiratory therapist and AARC member for over 27 years. She is currently a Senior Clinical Specialist for Bunnell, Incorporated. Her primary job responsibility is education on high frequency ventilation for neonatal and pediatric patients. Kari has worked mostly in pediatric and neonatal care, transport, ECMO, management/leadership, and education. She has been in volunteer leadership roles for the past 23 years within the Colorado Society for Respiratory Care, AARC House of Delegates, and the AARC Board of Directors. Kari is currently serving as Secretary/Treasurer of the AARC and is involved in various committees within the organization."
        />
      </div>

      <div className='pt-8.5 pb-17.5 flex gap-4 border-b-1 border-secondary'>
        <TrusteesCard
            img = "avt3.png"
            position = "TRUSTEE"
            name = "Neil MacIntyre, MD, FAARC"
            title = "Professor of Medicine, Medical Director of Respiratory Care (Emeritus)"
            university = {["Duke University Medical Center Durham, NC"]}
            highlight = "Excellent communication skills with experience collaborating in Agile environments"
        />
        <TrusteesCard
            img = "avt4.png"
            position = "TRUSTEE"
            name = "Teri Miller, MEd, RRT, CPFT, FAARC"
            title = ""
            university = {["Middle Georgia State University Macon, Georgia"]}
            highlight = "Excellent communication skills with experience collaborating in Agile environments"
        />

        <TrusteesCard
            img = "avt5.png"
            position = "TRUSTEE"
            name = "Georgianna Sergakis, PhD, RRT, RCP, AE-C, FAARC, FNAP"
            title = ""
            university = {["The Ohio State University Columbus, OH"]}
            highlight = "Excellent communication skills with experience collaborating in Agile environments"
        />

        <TrusteesCard
            img = "avt6.png"
            position = "TRUSTEE"
            name = "Sheri Tooley, RRT-NPS, CPFT, AE-C"
            title = ""
            university = {["Draeger-STIMIT"]}
            highlight = "Excellent communication skills with experience collaborating in Agile environments"
        />
      </div>

      <div className='pt-8.5 pb-17.5 flex gap-4 border-b-1 border-secondary'>
        <TrusteesCard
            img = "avt7.png"
            position = "Emeritus"
            name = "Michael T. Amato, MBA"
            title = "Chief Executive Officer"
            university = {["InspiRx", "Durham, NC"]}
            highlight = "Excellent communication skills with experience collaborating in Agile environments"
        />
        <TrusteesCard
            img = "avt8.png"
            position = "Emeritus"
            name = "Dale Eiserman"
            title = "Vice President of International Sales, Critical Care Division"
            university = {["VIASYS Healthcare", "Palm Springs, CA"]}
            highlight = "Excellent communication skills with experience collaborating in Agile environments"
        />

        <TrusteesCard
            img = "avt9.png"
            position = "Emeritus"
            name = "Sam P. Giordano, MBA, RRT, FAARC"
            title = "Chief Executive Officer"
            university = {["Carrollton, TX"]}
            highlight = "Excellent communication skills with experience collaborating in Agile environments"
        />

        <TrusteesCard
            img = "avt10.png"
            position = "Emeritus"
            name = "David J. Pierson, MD, FAARC"
            title = "Chief Executive Officer"
            university = {["Harborview Medical Center", "Seattle, WA"]}
            highlight = "Excellent communication skills with experience collaborating in Agile environments"
        />
      </div>

      <div className='pt-8.5 pb-17.5 flex gap-4 border-b-1 border-secondary'>
        <TrusteesCard
            img = "avt11.png"
            position = "Emeritus"
            name = "Bruce Rubin, MEngr, MD, MBA, FRCPC, FAARC"
            title = "Professor and Chair, Department of Pediatrics"
            university = {["Virginia Commonwealth University", "School of Medicine", "Richmond, VA"]}
            highlight = ""
        />
        <TrusteesCard
            img = "avt12.png"
            position = "Emeritus"
            name = "Gary A. Smith, RRT(HON), FAARC"
            title = ""
            university = {["Olathe, KS"]}
            highlight = ""
        />

        <TrusteesCard
            img = "avt13.png"
            position = "Emeritus"
            name = "James K. Stoller, MD, MS, FCCP, ATSF, FAARC"
            title = "Chair, Education Institute Jean Wall Bennett Professor of Medicine"
            university = {["Cleveland, OH"]}
            highlight = "Excellent communication skills with experience collaborating in Agile environments"
        />

      </div>
    </div>
  )
}

export default TrusteesList
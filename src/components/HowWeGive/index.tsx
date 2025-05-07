import React from 'react'
import { TitlePage } from "@/components/TitlePage"
import UndergraduateSection from "@/components/HowWeGive/UndergraduateSection"
const index = () => {
  return (
    <div>
        <TitlePage  title={"Student Awards"}/>
        <div className="py-9.5 bg-secondary">
          <h3 className="text-white font-bold uppercase leading-relaxed text-center">UNDERGRADUATE <span className="p-3">|</span> POST GRADUATE</h3>
        </div>
        <UndergraduateSection/>
        <div className="bg-[#F1F5FA] px-36 py-15">
                <p className="text-secondary text-lg font-normal leading-relaxed">
                    The above listed awards, grants and fellowships may have tax implications to the recipient. Depending on the circumstance and filing 
                    requirements, an information tax form (i.e. 1099) may or may not be issued from the ARCF. In any case, we recommend that all recipients 
                    consult with their tax advisor to ensure compliance with IRS regulations.
                </p>
            </div>
    </div>
  )
}

export default index
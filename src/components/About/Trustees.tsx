import React from 'react'
import TrusteesContent from './TrusteesContent'
import TrusteesCard from './TrusteesCard'
import TrusteesListBoard from './TrusteesListBoard'
import TrusteesListARCF from './TrusteesListARCF'
import TrusteesListAward from './TrusteesListAward'


const Trustees = () => {
  return (
    <div className='px-35 pt-23.5 pb-25'>
        <TrusteesContent 
          title = {"Board of Trustees"}
          desribe1 = {"The American Respiratory Care Foundation is a nonprofit organization formed for the purpose of supporting research, education, and charitable activities."} 
          desribe2 = {"The ARCF seeks to educate the public about respiratory health, assist in the training and continuing education of health care providers, and improve the quality of our environment."} 
        />
        <TrusteesListBoard/> 
        <TrusteesContent
          title = {"ARCF Executive Office"}
          desribe1 = {"The Board of Trustees shall appoint an Executive Office to oversee day-to-day operations of the ARCF. The Executive Office will be charged by the ARCF Trustees to execute agreed upon duties and will be empowered by to represent the ARCF in agreed upon negotiations, program development, financial matters and other administrative duties."}
          desribe2 = {""}
        />
        <TrusteesListARCF/>
        <TrusteesContent title = {"2024 Awards Recipients"} desribe1={""} desribe2 = {""}/>
        <TrusteesListAward/>

    </div>
  )
}

export default Trustees
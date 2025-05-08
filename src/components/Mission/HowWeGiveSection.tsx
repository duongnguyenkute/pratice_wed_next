import React from 'react'
import Award from './Award'

const HowWeGiveSection = () => {
  return (
    <div 
      className="flex flex-col gap-4 items-center
                pt-4 px-4 pb-6 
                sm:pt-6 sm:px-6 sm:pb-8 
                md:pt-8 md:px-6 md:pb-10 
                xl:pt-16 xl:px-32 xl:pb-24 xl:gap-10
      ">
      <h3 className="font-bold leading-10 items-center text-5xl">How We Give</h3>
      <div 
        className="flex flex-col flex-wrap justify-between w-full sm:flex-row lg:flex-nowrap lg:gap-4">
        <Award img = "GraduationCap.svg" title1 = "Student" title2 = "Awards" />
        <Award img = "BookOpenText.svg" title1 = "Research Awards" title2 = "& Grants" />
        <Award img = "Trophy.svg" title1 = "Achievement" title2 = "Awards" />
        <Award img = "Globe.png" title1 = "International" title2 = "Fellowships" />
      </div>
    </div>
  )
}

export default HowWeGiveSection
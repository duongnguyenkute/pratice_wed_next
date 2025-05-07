import React from 'react'

const OurMissionLeft = () => {
  return (
    <div className="pt-24 pr-3 pb-40 pl-36 flex flex-col gap-4 w-1/2">
      <h3 className="text-white font-bold leading-16 text-6xl">Our Mision</h3>
      <p className="text-white font-normal leading-snug text-2xl">ARCF is dedicated to promoting respiratory health through research, 
         education, and patient-focused philanthropic activities.
      </p>
      <div className="py-2.5 flex items-center gap-10 ">
        <button className="pt-3 pb-3.5 bg-white px-9 text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">Apply</button>
        <button className="pt-3 pb-3.5 bg-white px-9 text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">Donate</button>
      </div>
    </div>
  )
}

export default OurMissionLeft
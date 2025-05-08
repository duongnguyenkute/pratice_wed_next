import React from 'react'
interface AwardProps {
  img: string
  title1: string
  title2: string
}

const Award = ( { img, title1, title2 }: AwardProps) => {
  return (
    <div className="flex flex-col justify-center items-center pt-4
                  sm:w-9/20
                  lg-w-auto
        ">
      <img src={ img } alt="" />
      <h3 className="text-2xl font-semibold inline"> { title1 } </h3>
      <h3 className="text-2xl font-semibold pb-6"> { title2 } </h3>
      <button className="pt-3 pb-3.5 px-9 bg-primary text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">Apply Now</button>
    </div>
   
  )
}

export default Award
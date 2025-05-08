import React from 'react'
interface SponsorshipItemProps {
  money: string
  title1: string
  // INSERT_YOUR_REWRITE_HERE
  title2: string
}
const SponsorshipItem = ( { money, title1, title2 }: SponsorshipItemProps ) => {
  return (
    <div className='md:w-8/20 xl:w-auto w-full'>
      <div className="flex flex-col justify-center items-center pt-5">
        <h3 className="text-primary text-7xl font-light leading-20"> { money } </h3>
        <h3 className="text-3xl font-semibold text-white pt-3 lg:pt-6"> { title1 } </h3>
        <h3 className="text-3xl font-semibold text-white"> { title2 } </h3>
      </div> 
    </div>
  )
}

export default SponsorshipItem
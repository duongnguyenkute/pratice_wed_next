import React from 'react'

const SponsorshipSection = () => {
  return (
    <div className="bg-secondary">
      <div className="pt-16 px-36 pb-24 flex flex-col items-center gap-[4.625rem]">
        <h3 className="font-bold leading-10 items-center text-5xl text-white">What We Gave in 2020</h3>
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-center items-center">
                            <h3 className="text-primary text-7xl font-light leading-20">$23,766</h3>
                            <h3 className="text-3xl font-semibold text-white pt-6">In Student </h3>
                            <h3 className="text-3xl font-semibold text-white">Education Awards</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
                            <h3 className="text-primary text-7xl font-light leading-20">$9,216</h3>
                            <h3 className="text-3xl font-semibold text-white pt-6">In Research</h3>
                            <h3 className="text-3xl font-semibold text-white">Awards & Grants</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
                            <h3 className="text-primary text-7xl font-light leading-20">$8,041</h3>
                            <h3 className="text-3xl font-semibold text-white pt-6">In Achievement</h3>
                            <h3 className="text-3xl font-semibold text-white">Awards</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
                            <h3 className="text-primary text-7xl font-light leading-20">$3,900</h3>
                            <h3 className="text-3xl font-semibold text-white pt-6">In Fellowships</h3>
                            <h3 className="text-3xl font-semibold text-white">Given</h3>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default SponsorshipSection
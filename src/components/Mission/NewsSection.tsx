import React from 'react'

const NewsSection = () => {
  return (
    <div className="pt-[4.375rem] pb-[4.625rem] px-36">
      <h3 className="text-5xl font-bold leading-10 text-center">Foundation News</h3>
      <div className="flex justify-between flex-nowrap w-full pt-[4.75rem] gap-[5.375rem]">
                    <div className="pb-[19.125rem] w-1/3">
                        <div className="relative">
                            <img src="news1.jpg" alt="" className="w-max-full block rounded-lg object-cover aspect-[3/2]"/>
                            <div className="px-7 py-11 flex flex-col gap-3 bg-quaternary absolute top-4/5 left-1/20 w-9/10">
                                <h4 className="text-base uppercase font-bold leading-tight text-tertiary">AUGUST 15, 2024</h4>
                                <h4 className="text-2xl font-semibold leading-7">ARCF 2024 Fundraising Event</h4>
                                <p className="text-lg font-normal leading-relaxed">Come together on Nov. 19 with the ARCF and your colleagues and friends to support and advance the 
                                    respiratory care profession..
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-[19.125rem] w-1/3">
                        <div className="relative">
                            <img src="news2.jpg" alt="" className="w-max-full block rounded-lg object-cover aspect-[3/2]"/>
                            <div className="px-7 py-11 flex flex-col gap-3 bg-quaternary absolute top-4/5 left-1/20 w-9/10">
                                <h4 className="text-base uppercase font-bold leading-tight text-tertiary">AUGUST 15, 2024</h4>
                                <h4 className="text-2xl font-semibold leading-7">ARCF 2024 Fundraising Event</h4>
                                <p className="text-lg font-normal leading-relaxed">Come together on Nov. 19 with the ARCF and your colleagues and friends to support and advance the 
                                    respiratory care profession..
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-[19.125rem] w-1/3">
                        <div className="relative">
                            <img src="news3.png" alt="" className="w-max-full block rounded-lg object-cover aspect-[3/2]"/>
                            <div className="px-7 py-11 flex flex-col gap-3 bg-quaternary absolute top-4/5 left-1/20 w-9/10">
                                <h4 className="text-base uppercase font-bold leading-tight text-tertiary">AUGUST 15, 2024</h4>
                                <h4 className="text-2xl font-semibold leading-7">ARCF 2024 Fundraising Event</h4>
                                <p className="text-lg font-normal leading-relaxed">Come together on Nov. 19 with the ARCF and your colleagues and friends to support and advance the 
                                    respiratory care profession..
                                </p>
                            </div>
                        </div>
                    </div>     
      </div>
      <div className="pt-13 flex justify-center ">
                    <button className="rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">
                        <img src="ArrowCircleLeft.png" alt="" />
                    </button>

                    <button className="rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">
                        <img src="ArrowCircleRight.svg" alt="" />
                    </button>
      </div>
    </div>
  )
}

export default NewsSection
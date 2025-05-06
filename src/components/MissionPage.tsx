export function MissionPage() {
    return(
        <div>
            {/* Mission Section */}
            <div className="bg-[url('/background.png')] bg-cover bg-center flex justify-between">
            {/* Left content */}
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

            {/* Right content */}
            <div>
                <img src="mission.png" alt="" />
            </div>
            </div>
            {/* How We Give Seciton */}
            <div className="pt-16 px-36 pb-24 flex flex-col gap-10 items-center">
                <h3 className="font-bold leading-10 items-center text-5xl">How We Give</h3>
                <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-center items-center">
                        <img src="GraduationCap.svg" alt="" />
                        <h3 className="text-3xl font-semibold">Student</h3>
                        <h3 className="text-3xl font-semibold pb-6">Awards</h3>
                        <button className="pt-3 pb-3.5 px-9 bg-primary text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">Apply Now</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="GraduationCap.svg" alt="" />
                        <h3 className="text-3xl font-semibold">Research Awards</h3>
                        <h3 className="text-3xl font-semibold pb-6">& Grants</h3>
                        <button className="pt-3 pb-3.5 px-9 bg-primary text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">Apply Now</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="GraduationCap.svg" alt="" />
                        <h3 className="text-3xl font-semibold">Achievement</h3>
                        <h3 className="text-3xl font-semibold pb-6">Awards</h3>
                        <button className="pt-3 pb-3.5 px-9 bg-primary text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">Apply Now</button>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <img src="GraduationCap.svg" alt="" />
                        <h3 className="text-3xl font-semibold">International</h3>
                        <h3 className="text-3xl font-semibold pb-6">Fellowships</h3>
                        <button className="pt-3 pb-3.5 px-9 bg-primary text-xl font-semibold rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">Apply Now</button>
                    </div>
                </div>
            </div>
            {/* Sponsorship Section */}
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
            {/* News */}
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
        </div>
    )
}
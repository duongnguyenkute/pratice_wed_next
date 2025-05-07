import React from 'react'

const AboutInfo = () => {
  return (
    <div className="px-35 pt-14 pb-23 bg-[url('/background.png')] bg-cover bg-center flex">
        {/* About Left */}
        <div className="pt-11.5 pr-16 pb-27.5 w-1/2">
                <h1 className="text-6xl font-bold leading-16 text-white pb-2">About</h1>
                <p className="text-white text-xl font-normal leading-loose">
                    The American Respiratory Foundation is dedicated to promoting
                    respiratory health throughout the support of research, education,
                    and patient-focused philanthropic activities in respiratory care.
                </p>
        </div>
        {/* About Right */}
        <div className="">
            <img src="video.png" alt="" />
        </div>  
    </div>
  )
}

export default AboutInfo
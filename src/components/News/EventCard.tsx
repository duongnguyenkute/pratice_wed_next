import React from 'react'

const EventCard = () => {
  return (
    <div className='w-full'>
        <div className="w-full h-full object-cover "><img className='rounded-xl w-full' src="news1.jpg" alt="" /></div>
        <div className="py-17.5">
            <p className="text-lg font-bold uppercase leading-relaxed text-secondary">August 15, 2024</p>
            <h3 className="text-2xl font-normal leading-9 py-6">Come together on Nov. 19 with the American Respiratory Care Foundation (ARCF) and your
                respiratory care colleagues and friends from around the world for an “Evening in Havana” 
                to support and advance the respiratory care profession!
            </h3>
            <p className="text-lg font-normal leading-relaxed">
                Mark your calendar now and get your dancing shoes ready for an evening of <span className="underline">live music</span>, and 
                an unique opportunity for professional <span className="underline">salsa lessons</span>,a mojito mixology class, rum sampling, 
                and networking, all while supporting the important work of the ARCF. The event will also include 
                recognition of Foundation donors, and updates on ARCF accomplishments in the past year.
                <br/>
                Proceeds from the event support the ARCF’s ongoing mission, to build funding and support for respiratory 
                research, education, and patient-focused philanthropic activities. Benefits of event sponsorship are noted below.              
            </p>
        </div>
    </div>
  )
}

export default EventCard
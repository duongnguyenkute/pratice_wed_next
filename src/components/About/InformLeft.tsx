import React from 'react'

const InformLeft = () => {
  return (
    <div className='w-1/2 bg-secondary pt-20 pb-19 pl-22 pr-6 rounded-tl-3xl rounded-bl-3xl'>
        <div>
            <h3 className='text-lg font-bold uppercase leading-relaxed text-primary'> UPCOMING CONFERENCE </h3>
            <p className='text-white text-2xl font-normal leading-9'> 61st Respiratory Care Journal Conference </p>
        </div>

        <h3 className='pt-5 pb-6 text-white font-bold text-3xl leading-10'>
            Pediatric Asthma: Management Across
            <br />
            the Continuum of Care
        </h3>

        <div>
            <p className='text-white text-lg font-bold uppercase leading-relaxed'> CONFERENCE CO-CHAIRS </p>
            <p className='text-white text-2xl font-normal leading-9'>
                Andrew Miller MSc RRT RRT-NPS RRT-ACCS FAARC
                <br />
                Denise Willis MSc RRt RRT-NPS AE-C FAARC
                <br />
                Ariel Berlinski MD FAAR
            </p>
            <br />
            <br />
            <p className='text-white text-2xl font-semibold leading-9'> June 19-21, 2024 | Tampa, FL </p>
        </div>


    </div>
  )
}

export default InformLeft
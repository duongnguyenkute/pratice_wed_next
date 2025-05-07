import React from 'react'
interface ConferenceItemProps {
    title: string
    subtitle: string
    date: string
}

const ConferenceItem = ( { title, subtitle, date }: ConferenceItemProps ) => {
  return (
    <div className='w-1/3'>
        <h3 className='text-base font-bold uppercase leading-normal'> {title} </h3>
        <p className='text-base font-normal leading-normal'> {subtitle} </p>
        <p className='text-base font-normal leading-normal'> {date} </p>
    </div>
  )
}

export default ConferenceItem
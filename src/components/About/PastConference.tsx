import React from 'react'
import ConferenceItem from './ConferenceItem'
import ConferenceList from './ConferenceList'

const PastConference = () => {
  return (
    <div className='px-35 pt-17.5 p-19.5'>
        <h3 className='pb-6 border-b-1 border-secondary text-3xl font-bold leading-10'> Past Conferences </h3>
        <ConferenceList/>

    </div>
  )
}

export default PastConference
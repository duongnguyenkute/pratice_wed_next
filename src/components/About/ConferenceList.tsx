import React from 'react'
import ConferenceItem from './ConferenceItem'

const ConferenceList = () => {
  return (
    <div className='pt-9 flex flex-col gap-9'>
        <div className='flex gap-15 justify-between'>
            <ConferenceItem 
                title="60th respiratory care Journal Conference" 
                subtitle="“Pulmonary Rehabilitation: Current Evidence and Future Directions”" 
                date="June 22-23, 2023 | St. Petersburg, FL"
            />

            <ConferenceItem 
                title="59th respiratory care Journal Conference" 
                subtitle="“COPD: Current Evidence and Implications for Practice”" 
                date="June 21-22, 2022 | St. Petersburg, FL"
            />   

            <ConferenceItem 
                title="58th respiratory care Journal Conference" 
                subtitle="“Monitoring Respiratory Function in Adult Acute Care”" 
                date="June 10-11, 2019 | St. Petersburg, FL"
            />          
        </div>

        <div className='flex gap-15 justify-between'>
            <ConferenceItem 
                title="57th respiratory care Journal Conference" 
                subtitle="“Noninvasive Respiratory Support in Adults”" 
                date="June 14-15, 2018 | St. Petersburg, FL"
            />

            <ConferenceItem 
                title="56th respiratory care Journal Conference" 
                subtitle="“Respiratory Medications for COPD and Adult Asthma: Pharmacologic Actions to Clinical Applications”" 
                date="June 22-23, 2017 | St. Petersburg, FL"
            />   

            <ConferenceItem 
                title="55th respiratory care Journal Conference" 
                subtitle="“Pediatric Respiratory Care”" 
                date="June 10-11, 2016 | St. Petersburg, FL"
            />          
        </div>

        <div className='flex gap-15 justify-between'>
            <ConferenceItem 
                title="54th respiratory care Journal Conference" 
                subtitle="“Respiratory Care Controversies III”" 
                date="June 5-6, 2015 | St. Petersburg, FL"
            />

            <ConferenceItem 
                title="53rd respiratory care Journal Conference" 
                subtitle="“Aerosol Drug Delivery in Respiratory Care”" 
                date="June 6-7, 2014 | St. Petersburg, FL"
            />   

            <ConferenceItem 
                title="52nd respiratory care Journal Conference" 
                subtitle="“Adult Artificial Airways and Airways Adjuncts”" 
                date="June 14-15, 2013 | St. Petersburg, FL"
            />          
        </div>

        <div className='flex gap-15 justify-between'>
            <ConferenceItem 
                title="51st respiratory care Journal Conference" 
                subtitle="“Adult Mechanical Ventilation in Acute Care: Issues and Controversies”" 
                date="September 7-8, 2012 | St. Petersburg, FL"
            />

            <ConferenceItem 
                title="50th respiratory care Journal Conference" 
                subtitle="“Oxygen”" 
                date="April 13-14, 2012 | San Francisco, CA"
            />   

            <ConferenceItem 
                title="49th respiratory care Journal Conference" 
                subtitle="“The Chronically Critically Ill”" 
                date="June 9–10, 2011 | St. Petersburg, FL"
            />          
        </div>
        
    </div>
  )
}

export default ConferenceList
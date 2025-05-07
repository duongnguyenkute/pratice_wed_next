import React from 'react'
import CheckBox from "@/components/Contact/CheckBox"
const Subject = () => {
  return (
    <div className='w-full'>
        <label className='text-lg leading-relaxed font-semibold pb-6 block' htmlFor="">Subject*</label>
        <CheckBox option= { "Website Issues" }/>
        <CheckBox option= { "Sponsorship" }/>
        <CheckBox option= { "Donations" }/>
        <CheckBox option= { "International Fellowships" }/>
        <CheckBox option= { "Applications" }/>
        <CheckBox option= { "Suggestions or Comments" }/>
    </div>
  )
}

export default Subject
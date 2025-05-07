import React from 'react'
interface Paragraph {
    title1: String;
    title2: String;
    date: String;
}
const FoundationItem = ( { title1, title2, date }: Paragraph ) => {
  return (
    <div>
        <p className='text-base font-normal leading-normal'> {title1} <br/> {title2} </p>
        <p className='text-base font-normal leading-normal text-[#6B6D75BF] pb-3 border-b-1 border-secondary'> {date} </p>
    </div>
  )
}

export default FoundationItem
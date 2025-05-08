import React from 'react'
interface TrusteesContentProps {
  title : String;
  desribe1: String
  desribe2: String
}
const TrusteesContent = ( { title, desribe1, desribe2 }: TrusteesContentProps ) => {
  return (
    <div className='w-5/10 pb-12.5'>
        <h3 className='pt-5 pb-3 text-5xl font-bold leading-14'> {title}</h3>
        { desribe1 && (
          <div>
            <p className='text-lg font-normal leading-relaxed'>
            {desribe1}
            <br />
            <br />
            {desribe2}
        </p>
          </div>
        )}
    </div>
  )
}

export default TrusteesContent
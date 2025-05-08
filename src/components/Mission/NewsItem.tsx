import React from 'react'
interface NewsItemProps {
  img: string
  date: string
  title: string
  describe: string
}
const NewsItem = ( { img, date, title, describe }: NewsItemProps ) => {
  return (
    <div className="xl:pb-78 xl:w-1/3 w-full ">
      <div className="xl:relative">
        <img src= { img } alt="" className="w-max-full block rounded-lg object-cover aspect-[3/2]"/>
        <div className="px-7 py-11 flex flex-col gap-3 bg-quaternary xl:absolute top-4/5 left-1/20 xl:w-9/10">
          <h4 className="text-base uppercase font-bold leading-tight text-tertiary"> { date } </h4>
          <h4 className="text-2xl font-semibold leading-7"> { title } </h4>
          <p className="text-lg font-normal leading-relaxed"> { describe} </p>
        </div>
      </div>
    </div>

  )
}

export default NewsItem
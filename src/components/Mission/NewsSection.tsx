import React from 'react'
import NewsItem from './NewsItem'

const NewsSection = () => {
  return (
    <div className="p-4 xl:pt-[4.375rem] xl:pb-[4.625rem] xl:px-36">
      <h3 className="text-5xl font-bold leading-10 text-center">Foundation News</h3>
      <div className="flex xl:flex-row justify-between flex-nowrap w-full xl:pt-19 gap-21.2 pt-4 flex-col gap-8">
        <NewsItem 
          img='news1.jpg' 
          date='AUGUST 15, 2024' 
          title='ARCF 2024 Fundraising Event' 
          describe='"Come together on Nov. 19 with the ARCF and your colleagues and friends to support and advance the 
          espiratory care profession..'
        />
        <NewsItem 
          img='news2.jpg' 
          date='MAY 27, 2020' 
          title='59th Respiratory Care Journal Conference' 
          describe='The American Respiratory Care Foundation is again honored to provide and unrestricted education 
          grant to the American Association for...'
        />
        <NewsItem 
          img='news3.png' 
          date='SEPTEMBER 23, 2019' 
          title='Support ARCF When You Use the Amazon Shopping App' 
          describe='You can now support the American Respiratory Care Foundation when you make purchases with the Amazon...'
        />
        
                     
      </div>
      <div className="pt-20 flex justify-center ">
        <button className="rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">
          <img src="ArrowCircleLeft.png" alt="" />
        </button>
        <button className="rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70">
          <img src="ArrowCircleRight.svg" alt="" />
        </button>
      </div>
    </div>
  )
}

export default NewsSection
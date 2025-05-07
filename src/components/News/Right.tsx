import React from 'react'
import Search from "@/components/News/Search"
import EventCategories from "@/components/News/EventCategories"
import EventFoundation from "@/components/News/EventFoundation"

const Right = () => {
  return (
    <div className='w-1/4'>
        <Search/>
        <EventCategories/>
        <EventFoundation/>
    </div>
  )
}

export default Right
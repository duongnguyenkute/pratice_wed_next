'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import NavMobileItem from './NavMobileItem'

const NavMobile = () => {
  const [ Open, setOpen ] = useState(false)
  const titles = [
    'About',
    'How We Give',
    'Donations & Support',
    'News',
    'Contact',
  ]
  return (
    <div className=''>
      <div className='xl:hidden block cursor-pointer hover:opacity-45 transition duration-300'>
        <img className='w-20 h-20' src="menu.svg" alt="" />
      </div>
      <nav className='py-10 px-18 fixed top-0 right-0 w-7/10 h-full bg-white shadow-2xl z-[1000] 
        transform translate-x-full transition-transform duration-300 ease-in-out'
      >
        <ul className="flex flex-col space-y-4">
          {titles.map((title) => (
            <NavMobileItem key={title} title={title} />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavMobile
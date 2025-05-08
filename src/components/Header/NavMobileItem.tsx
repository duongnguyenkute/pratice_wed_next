import React from 'react'
import Link from 'next/link'

interface Title {
  title: string
}

const NavMobileItem = ({ title }: Title) => {
    const routes: { [key: string]: string } = {
        Home: '/',
        About: '/about',
        'How We Give': '/how-we-give',  
        'Donations & Support': '/',  
        News: '/news',
        Contact: '/contact',
      }
  return (
    <li className="text-xl font-semibold hover:bg-blue-200 rounded-2xl transition duration-300 
        cursor-pointer bg-[#f9f9f9] px-4 py-5 text-center"
    > 
      <Link href={routes[title] || '/'}>{title}</Link>
    </li>
  )
}

export default NavMobileItem

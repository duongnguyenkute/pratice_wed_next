import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className='lg:hidden xl:block'>
      <ul className='flex gap-7'>
        <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/about">About</Link></li>
        <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/how-we-give">How We Give</Link></li>
        <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/">Donations & Support</Link></li>
        <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/news">News</Link></li>
        <li className='text-xl font-semibold hover:text-gray-400 transition duration-300'><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
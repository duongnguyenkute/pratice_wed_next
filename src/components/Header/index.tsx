import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import NavMobile from './NavMobile'


const index = () => {
  return (
    <div className='px-[4.5rem] py-[2.5rem] flex justify-between justify-items-center items-center'>
      <Logo/>
      <Nav/>
      <NavMobile/>
      <button 
        className='lg:hidden xl:block py-[0.875rem] px-[3.25rem] bg-primary text-xl font-semibold 
        rounded-[3.125rem] cursor-pointer transition duration-300 hover:opacity-70'>
        Donate
      </button>
    </div>
  )
}

export default index
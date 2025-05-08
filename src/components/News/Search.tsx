import React from 'react'

const Search = () => {
  return (
    <div className='p-4.5 flex w-full justify-between gap-3.5 bg-quaternary '>
        <input 
            className='bg-quaternary' 
            type="text"
            placeholder='Search'
        />
        <img className='cursor-pointer' src="MagnifyingGlass.svg" alt="" />
        
    </div>
  )
}

export default Search
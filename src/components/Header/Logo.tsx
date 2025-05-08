import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link href={'/'}><img src="logo.png" alt=""className=""/></Link>
    </div>
  )
}

export default Logo
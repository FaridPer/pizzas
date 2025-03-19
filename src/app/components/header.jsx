import React from 'react'
import NavLinks from './links'
import Image from 'next/image'

function header() {
  return (
    <div  className="navbar w-nav">
        <div className="container-2 w-container">
            <Image src='/pizza-logo.jpg' width={0} height={0} alt='logo'
            className='brand w-nav-brand' sizes="100vw"></Image>
            <nav role="navigation" className="nav-menu">
                    <NavLinks/>
            </nav>
           
        </div>
    </div>
  )
}

export default header
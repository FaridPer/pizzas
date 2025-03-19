import React from 'react'
import NavLinks from './links'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'

function header() {
  return (
    <div  className="navbar w-nav">
        <div className="container-2 w-container">
            <Image src='/pizza-logo.jpg' width={0} height={0} alt='logo'
            className='brand w-nav-brand' sizes="100vw"></Image>
          {/* <div className="social-icons" id="iconos">
              <a href="https://www.facebook.com/share/16GPxc3FCi/" target="_blank" ><FaFacebookF /></a>
              </div> */} 
            <nav role="navigation" className="nav-menu">
                    <NavLinks/>
            </nav>
        </div>
    </div>
  )
}

export default header
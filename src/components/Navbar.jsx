import React from 'react'

// import icon
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTelegram } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6 mb-20'>
        <div className="flex flex-shrink-0 items-center text-xl">
            English | فارسی
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaGithub />
            <FaLinkedin />
            <FaTelegram />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar
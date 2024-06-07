import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-between items-center px-[90px]'>
        <img src="images/logo.svg" alt="" />
        <ul className='flex gap-[20px]'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About us</Link>
            </li>
            <li>
                <Link to="/blog">Testimonials</Link>
            </li>
        </ul>
        <button className='bg-red-500 px-[30px] py-[10px] rounded-[50px] text-white hover:bg-gray-500'>Get started</button>
      </nav>
  )
}

export default Nav

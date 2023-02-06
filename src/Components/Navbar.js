import React from 'react'
import { NavLink } from 'react-router-dom'
import './component.css';



const Navbar = () => {
  return (
    <>
        
            <nav className='navbar flex'>
                <ul>
                    <li>
                        <NavLink to='/' className='link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/students' className='link'>Student</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='link'>Contact Us</NavLink>
                    </li>
                </ul>
            </nav>
       
    </>
  )
}

export default Navbar
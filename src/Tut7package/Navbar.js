
//rafce
//to show use whether they led to the currently active page or not,react-router-dom has an alternative to the link component.
//the Navlink is used.it works just like a link. but has a special feature in it.

import React from 'react'

import  './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='header'>
      <nav className='list'>

     
           <NavLink to="/"  className={({isActive})=>isActive ? 'active' :undefined} end>Home</NavLink>
           <NavLink  to="/Products"  className={({isActive})=>isActive ? 'active' :undefined}>Products</NavLink>
        <NavLink  to="/About"  className={({isActive})=>isActive ? 'active' :undefined}>About us</NavLink>

        </nav>

    </div>
  )
}

export default Navbar
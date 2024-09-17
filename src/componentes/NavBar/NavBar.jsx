import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img  className='logoMars' src={"/img/logo.png"} alt="Logo Mars" />
      </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                
                </li>

                <li>
                  <NavLink to="/categoria/sunflash"> Sunflash </NavLink>
                  
                </li>

                <li>
                 <NavLink to="/categoria/machine"> Machine </NavLink> 
                </li>

                <li>
                 <NavLink to="/categoria/orbiter"> Orbiter </NavLink> 
                </li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar
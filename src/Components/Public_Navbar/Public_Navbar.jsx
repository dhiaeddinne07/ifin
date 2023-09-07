import React, { useState } from 'react';

//import Icons ======>
import {CgMenuGridO} from'react-icons/cg'
import {BsCalendarCheck} from'react-icons/bs'
//import Images ======>

import logo from '../../assets/logo-ifin.png'

function Public_Navbar() {


//remove navbar in the small screen
const[active, setActive] = useState('navBarMenu')
const showNavBar = ()=> {
   setActive('navBarMenu showNavBar') 
}

const removeNavBar = ()=> {
    setActive('navBarMenu') 
 }


  return (
    <div className='navBar flex'>
        <div className='navBartTwo flex'>
            <div className='logoDiv'>
                <img src={logo} className='Logo' />
            </div>

            <div className={active}>
                <ul className='Menu flex'>
                    <li onClick={removeNavBar} className='listItem'> <BsCalendarCheck className='icon'/>Campaigns</li>
                    <li onClick={removeNavBar} className='listItem'>Become a Customer</li>
                    <li onClick={removeNavBar} className='listItem'>Become a Partner</li>
                    <li onClick={removeNavBar} className='listItem'>Register</li>
                    <button onClick={removeNavBar} className='btn flex btnOne'>
                    Login
                    </button>
                </ul>

               
                

            </div>

            <div onClick={showNavBar} className='toggleIcon'>
                <CgMenuGridO className='icon' />
            </div>


        </div>
    </div>
  )
}

export default Public_Navbar
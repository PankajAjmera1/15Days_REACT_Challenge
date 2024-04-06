import React from 'react'
import {RxCaretDown} from "react-icons/rx";
import { useState } from 'react';
import {IoIosSearch} from 'react-icons/io';
import {CiDiscount1} from 'react-icons/ci';

function Header() {
    const [toggle, setToggle] = useState(false);
    const showSideMenu = () => {
        setToggle(true);
    }
    const hideShowMenu = () => {
        setToggle(false);
    }
    const links =[
        {
            icons : <IoIosSearch />,
            name : 'Search'
        },
        {
            icons : <CiDiscount1 />,
            name : 'Offers',
            superScript : 'New'
        },
        {
            icons : "",
            name : 'Help'
        },
        {
            icons : "",
            name : 'Sign In'
        },
        {
            icons : "",
            name : 'Cart',
            superScript : '(0)'
        },

    ]
  return (
   <>
   <div className='black-overlay w-full h-full fixed duration-500  ' onClick={hideShowMenu} style={{
    opacity: toggle ? 1 : 0,
    visibility: toggle ? 'visible' : 'hidden',
    zIndex: 99999999,
   }}>
    <div onClick={(e)=>{
        e.stopPropagation();
    }} className="w-[400px] bg-white h-full absolute duration-[400ms]"
    style={{
        left: toggle ? 0 : '-100%',
    }}
    ></div>

   </div>
   <header className='p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]'>
    <div className='max-w-[1200px] mx-auto flex items-center'>
        <div className='w-[100px] '>
            <img src="images/SWIG.png" className="w-full "alt="logo" />

        </div>
        <div className=''>
           <span className='font-bold border-b-[3px] border-[black]'>Jodhpur</span>, Rajasthan, India
           <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline  font-bold text-[#fc8019]  cursor-pointer'/>

        </div>
        <nav className='hidden md:flex list-none gap-10 ml-auto font-semibold text-[18px] '>
           
            {
                links.map(
                    (link, index) => {
                       return <li key={index} className='flex items-center hover:text-[#fc8019] cursor-pointer gap-2' >
                            {link.icons}
                            {link.name}
                            <sup>{link.superScript}</sup>
                            </li>
                    }
                )
            }
        </nav>
    </div>

   </header>
   </>
  )
}

export default Header
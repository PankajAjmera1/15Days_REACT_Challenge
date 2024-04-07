import React from 'react'
import {RxCaretDown} from "react-icons/rx";
import { useState } from 'react';
import {IoIosSearch} from 'react-icons/io';
import {CiDiscount1} from 'react-icons/ci';
import { RxCross2 } from "react-icons/rx";
import { MdGpsFixed } from "react-icons/md";

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
    >    <div className='pt-[50px]'>
            <button onClick={hideShowMenu} className="ml-2 p-2  rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none">
                
                <RxCross2 />
            </button>
            </div>
        <div className="flex items-center justify-between p-5 ml-7 "> 
          
            <input type="text" placeholder="Search for area,street name..." className="border border-gray-300 rounded-md px-3 py-2 w-[300px] focus:outline-none " />
        </div>
        <div className='h-[100px] w-[300px] border to-black ml-[50px]' >
             
            <div className='text-[black]  pt-3 '> <MdGpsFixed className='inline  ml-3' /> <span className='ml-2 hover:text-orange-400 font-bold '>Get Current Location</span></div>
            <div className='text-[black]  text-[12px] flex items-center ml-11 pt-3 '>Using GPS</div>

        </div>
    </div>

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
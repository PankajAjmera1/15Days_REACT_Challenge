import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'
import { VscFilter } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";

function Online() {
    const componentRef = React.useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if(componentRef.current){
                setIsAtTop(componentRef.current.getBoundingClientRect().top < 0)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    } ,[]);





    const[data,setData] = useState([])


    const fetchTopRest = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains')
        const apidata = await response.json()
        setData(apidata)
    
    }

    useEffect(() => {
        fetchTopRest()
    }, [])
  return (
    <> 
 <div className='max-w-[1200px] mx-auto  ' ref={componentRef}>
        <div div className='flex items-center justify-between my-3'>
          <div className='text-[25px]'>Resturants with online Food Delivery in Mathura</div>  
          </div>
          <div  className={isAtTop ? 'fixed top-0 z-[9999999] bg-white w-full left-0 ': ''}>
            <div className='max-w-[1200px] mx-auto flex my-4 gap-3  '>
                <div className='p-3 rounded-md shadow '>
                    Filter  <VscFilter  className='inline'/>
                </div>
                <div className='p-3 rounded-md shadow '>
                    Sort By <IoIosArrowDown className='inline' />
                </div>
                <div className='p-3 rounded-md shadow '>
                    Fast Delivery
                </div>
                <div className='p-3 rounded-md shadow '>
                    New on Swiggy
                </div>
                <div className='p-3 rounded-md shadow '>
                    Rating 4.0+
                </div>
                <div className='p-3 rounded-md shadow '>
                    Pure-veg
                </div>
                <div className='p-3 rounded-md shadow '>
                     Offers
                </div>
                <div className='flex ml-[25px] w-[350px] relative'>
                
                
                        <input type="text" className='bg-slate-100 w-full pl-10 rounded-xl' placeholder="Search for resturant for food" />
                        <GoSearch className='absolute left-2 top-1/2 transform -translate-y-1/2 ' />
              
                    
                
                </div>
            </div>
            
          </div>
<div className='md:grid grid-cols-4 gap-3 '>
    {
        data.map(
            (d,i) =>{
                return <Card key={i} {...d} />
            }
        )
    }

</div>

          </div>
    </>
  )
}

export default Online
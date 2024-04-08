import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'
import { VscFilter } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import Card2 from './Card2';
import Fotter from './Fotter';

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
         <hr className='my-6 border-[1px]' />

          </div>

          <div className='font-bold ml-[190px] text-[25px]'>
            Best Places to Order from Near You
          </div>

          <div className='max-w-[1200px] pt-5 ml-[200px] mb-4 md:grid grid-rows-3 grid-flow-col gap-4 '>

            <Card2 description="Explore Resturants Near Me"  />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />

          </div>
          <div className='font-bold ml-[190px] text-[25px]'>
            Best CUsines Near Me
          </div>

          <div className='max-w-[1200px] pt-5 ml-[200px] mb-4 md:grid grid-rows-3 grid-flow-col gap-4 '>

            <Card2 description="Explore Resturants Near Me"  />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />
            <Card2 description="Explore Resturants Near Me" />

          </div>
          <div className='font-bold ml-[190px] text-[25px]'>
            Explore Every Resturanats Near Me
          </div>

          <div className='max-w-[1200px] pt-5 ml-[200px] mb-4 md:grid grid-rows-1 grid-flow-col gap-4 '>

            <Card2 description="Explore Resturants Near Me"  />
            <Card2 description="Explore Resturants Near Me" />
            

          </div>

          <div className='mt-[150px]'>
            <div className='bg-slate-300 w-full h-[100px] rounded-md  flex flex-wrap items-center justify-around'>
                <h2 className='text-slate-800 text-[25px] font-bold ml-[25px] items-center '>For better experience,
                <br />
                download the Swiggy app now</h2>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" className='h-[80px] ml-7' />
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" className='h-[80px] mr-[25px]' />


            </div>
          </div>
          <div>
          <Fotter/>
          </div>
       
         



    </>
  )
}

export default Online
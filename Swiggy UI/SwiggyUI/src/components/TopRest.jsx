import React, { useEffect } from 'react'
import {FaArrowRight ,FaArrowLeft} from 'react-icons/fa'
import { useState } from 'react'
import Card from './Card'

function TopRest() {
    const[data,setData] = useState([])
    const fetchTopRest = async () => {
        const response = await fetch('http://localhost:5000/top-restaurant-chains')
        const apidata = await response.json()
        setData(apidata)
    
    }

    useEffect(() => {
        fetchTopRest()
    }, [])

    const [slide,setSlide] = useState(0)

    const nextSlide = () => {
      if(data.length-4 == slide) return false;
       
        setSlide(slide +2);
    }
    const prevSlide = () => {
      if(slide === 0) return false;
        setSlide(slide -3);
    }
  return (
    <>
    <div className='max-w-[1200px] mx-auto  mb-[100px] px-2'>
        < div className='flex items-center justify-between my-3'>
          <div className='text-[25px]'>Top Resturant Chains in Jodhpur</div>  
        
        <div className='flex'>
         <div className=' cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide} > <FaArrowLeft/> </div>
         <div className=' cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}> <FaArrowRight/> </div>
        
        </div>
    </div  >
    <div className='flex gap-5 overflow-hidden'>
    {
      data.map(
        (item,index) => {
        return(
          <div className='duration-500' style={{
            transform:`translateX(-${slide * 100}%)`
          }}>
          <Card width= "w-[273px] " {...item} key={index} />
          </div>
        )
      })
    }
    
    </div>
    <hr className='my-6 border-[1px]' />

    </div>
    </>
  )
}

export default TopRest
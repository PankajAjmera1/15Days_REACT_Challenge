import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'

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
                    Filter
                </div>
                <div className='p-3 rounded-md shadow '>
                    Sort By
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
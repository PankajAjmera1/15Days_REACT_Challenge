import React from 'react'

function Card2({description ="Explore Resturants Near Me",width="350px"}) {
return (
    <> 
    <div className={`w-${width} h-[50px] border-2 border-slate-200 flex justify-center p-5 rounded-xl`}>
            <div className='text-[18px] flex items-center  ml-6  '>
                    {description}
            </div>
         
         
    </div>
 </>
)}

export default Card2
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const{userid} =useParams()
  return (
    <h1 className='text-center text-white bg-slate-600 p-10 ml-5 '>User : {userid}</h1>
  )
}

export default User
import React from 'react'
import { Link } from 'react-router-dom'
const Temp = () => {

  return (
<div className='bg-gradient-to-r from-blue-400 to-blue-900  flex flex-col justify-center items-center h-screen  overflow-hidden'>
    <h1 className='font-extrabold text-center text-4xl md:text-4xl text-white tracking-widest '>SHOP VUE</h1>
    <div className='m-10 flex gap-4'>
    <Link to='/login' className='py-2 px-4 rounded-md text-white font-semibold mt-4 bg-black tracking-widest'>
        LOGIN
      </Link>
      <Link to='/signUp'  className='py-2 px-4 rounded-md text-white font-semibold mt-4 bg-black tracking-widest'>
        SIGNUP
      </Link>
      <Link to='/dashboard'  className='py-2 px-4 rounded-md text-white font-semibold mt-4 bg-black tracking-widest'>
        Dashboard
      </Link>
    </div>



</div>
  )
}

export default Temp
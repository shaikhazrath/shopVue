import React from 'react'
import {Link} from 'react-router-dom'
import { Icon } from '@iconify/react';
const Nav = () => {
  return (
    <div>
    <nav className='flex gap-5 justify-around  bg-blue-400 text-white p-4  text-xs'>
    <Link className=' flex flex-col justify-center items-center'>
    <Icon icon="solar:shop-outline" width="35" />

      </Link>
      <Link className=' flex flex-col justify-center items-center'>
      <Icon icon="mdi:art" width="35" />

      </Link>
      <Link className=' flex flex-col justify-center items-center'>
      <Icon icon="carbon:analytics" width="35"  />
      </Link>
      <Link className=' flex flex-col justify-center items-center '> 
      <Icon icon="iconamoon:profile" width="35"  />
      </Link>
    </nav>
  </div>
  )
}

export default Nav
import React from 'react'
import Header from './Header'
import { FaPlus } from "react-icons/fa6";
import { Tooltip, Button } from '@nextui-org/react';

export default function Body() {
  return (
    <div className='px-10'>
      <Header />
      <div>
        <div className='text-white flex items-center justify-between'>
          <h1 className=' text-4xl font-bold'>Welcome Sharad,</h1>
          <Tooltip content='Add New Device' size='sm' color='primary' shadow='md' showArrow placement='bottom' closeDelay={100}>
            <div className=''>
              <Button className='text-white bg-transparent border-[1px] border-[#808080] font-medium' radius="full"><FaPlus /> Add Device</Button>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

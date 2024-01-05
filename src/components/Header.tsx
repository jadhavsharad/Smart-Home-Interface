import { Divider, Tooltip } from '@nextui-org/react';

import { FaBell } from "react-icons/fa6";

export default function Header() {
    return (
        <div className='py-5 '>
            <div className='flex items-center justify-between'>
                <div className='text-white'>
                    <h1 className='text-4xl font-bold'>09:00</h1>
                    <p className='font-semibold'>Thrusday</p>
                </div>
                <div className='text-white text-3xl'>
                    <Tooltip content="Notifications" placement='left' showArrow color='warning' size='sm'><button className='rounded-full'><FaBell /></button></Tooltip>
                </div>
            </div>
            <Divider className='bg-[#808080] my-3' />
        </div>
    )
}

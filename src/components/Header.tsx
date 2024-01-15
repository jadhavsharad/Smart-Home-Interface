import { Divider, Tooltip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from '@nextui-org/react';
import { FaBell } from "react-icons/fa6";

export default function Header() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const time = new Date().getHours().toString().padStart(2, "0") + ":" + new Date().getMinutes().toString().padStart(2, "0");
    return (
        <div className='py-5 '>
            <div className='flex items-center justify-between'>
                <div className='text-white'>
                    <h1 className='text-4xl font-Inter font-bold'>{time}</h1>
                    <p className='font-semibold font-Inter'>{days[new Date().getDay()] + " " + new Date().getDate() + " " + months[new Date().getMonth()]}</p>
                </div>

                <div className='text-white text-3xl flex gap-3'>
                    <Tooltip content="Notifications" placement='left' showArrow color='warning' size='sm'><button className='rounded-full'><FaBell /></button></Tooltip>
                    <div className='rounded-full cursor-pointer'>
                        <Dropdown placement="bottom-end" className='' size='md'>
                            <DropdownTrigger>
                                <Avatar
                                    as="button"
                                    className="transition-transform"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat" className='p-0 '>
                                <DropdownItem key="logout" color="danger" className='px-4 py-2.5'>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <Divider className='bg-[#808080] my-3' />
        </div>
    )
}


import rooms from '../assets/rooms.svg'
import home from '../assets/home.svg'
import device from '../assets/device.svg'
import setting from '../assets/setting.svg'
import { Tooltip } from "@nextui-org/react";

export default function Nav() {
    const nav = [
        {
            title: "Home",
            img: home,
            content:"Go to Home",
            index:"1",
        },
        {
            title: "Rooms",
            img: rooms,
            content:"Modify Rooms",
            index:"2",

        },
        {
            title: "Device Management",
            img: device,
            content:"Manage Your Devices",
            index:"3",

        },
        {
            title: "User Account",
            img: setting,
            content:"Settings",
            index:"4",

        },
    ]

    return (
        <div className='px-4 flex flex-col'>
            {nav.map((nav, index) => (
                <Tooltip showArrow={true} key={index} shouldFlip={false} placement='right' color='secondary' content={nav.content} closeDelay={100} size='sm' className="capitalize">
                    <a href=''  className='w-full overflow-hidden my-1 font-sans flex gap-4 hover:bg-[#454545] duration-100 text-md py-3 px-4 rounded-md border-[1px] text-sm border-[#454545] font-medium bg-transparent text-white'>
                        <img src={nav.img} className='w-[24px]' alt="" /> {nav.title}
                    </a>
                </Tooltip>

            ))}

        </div>
    )
}

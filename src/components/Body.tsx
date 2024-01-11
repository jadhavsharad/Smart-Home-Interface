
import Header from './Header'
import { FaPlus } from "react-icons/fa6";
import { Tooltip, Button, Divider, CircularProgress, Switch } from '@nextui-org/react';
import lamp from '../assets/lamp.svg'
import React from 'react';

export default function Body() {
  const [isSelected, setIsSelected] = React.useState(true);

  return (
    <div className='px-10'>
      <Header />
      <div>
        <div className='text-white flex items-center justify-between h-20'>
          <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Welcome Sharad,</h1>
          <Tooltip content='Add New Device' size='sm' color='primary' shadow='md' showArrow placement='bottom' closeDelay={100}>
            <div className=''>
              <Button size='sm' className='text-white bg-transparent border-[1px] border-[#808080] font-medium' radius="full"><FaPlus /> Add Device</Button>
            </div>
          </Tooltip>
        </div>
      </div>
      <Divider className='my-3' />
      <div className='w-full rounded-xl p-2 lg:p-0 gap-4 h-fit lg:h-96  flex flex-col lg:flex-row'>
        <div className="lg:w-1/4 w-full md:h-72 overflow-hidden flex flex-col md:flex-row lg:justify-normal lg:flex-col lg:items-center lg:h-[inherit] rounded-[inherit] border-[1px] border-[#454545]">

          <div className='h-full w-full md:w-1/2 lg:h-1/3 lg:w-1/2 flex justify-center items-center'>
            <img src={lamp} className='w-full h-32 md:h-3/4 lg:h-full lg:w-full' alt="" />
          </div>
          <Divider className='my-3 md:hidden' />
          <div className='w-full md:w-1/2 h-full lg:w-full lg:h-3/4'>
            <div className='w-full h-1/2 flex items-center justify-center'>
              <h1 className=' font-black text-yellow-400 text-3xl md:text-6xl lg:text-4xl'>Lamp</h1>
            </div>
            <div className='w-full h-1/2 flex md:flex-col justify-center items-center gap-4 md:gap-6 py-6'>
              <small className='text-zinc-400 font-semibold md:text-lg'>Current Status: {isSelected ? "ON" : "OFF"}</small>
              <Switch isSelected={isSelected} onValueChange={setIsSelected}></Switch>  
            </div>
          </div>
        </div>


        <div className="lg:w-1/2 h-72 lg:h-[inherit] rounded-[inherit] flex flex-col md:flex-row lg:flex-col gap-4">
          <div className="lg:w-full lg:h-1/2 md:w-1/2 w-full h-fit border-[1px] border-[#454545] rounded-[inherit]"></div>
          <div className="lg:w-full lg:h-1/2 md:w-1/2 w-full h-fit border-[1px] border-[#454545] rounded-[inherit]"></div>
        </div>


        <div className="lg:w-1/4 lg:h-[inherit] rounded-[inherit] flex flex-col md:flex-row lg:flex-col gap-4">
          <div className="lg:w-full lg:h-1/2 md:w-1/2 w-full h-fit rounded-[inherit] border-[1px] border-[#454545] flex flex-col items-center justify-center py-4">
            <CircularProgress
              className='text-white font-bold'
              maxValue={50}
              minValue={0}
              value={25}
              strokeWidth={2}
              label='Temperature'
              showValueLabel={true}
              formatOptions={{ style: "unit", unit: "celsius" }}
              classNames={{
                svg: "w-24 h-24 drop-shadow-md",
                indicator: "stroke-white",
                track: "stroke-white/10",
                value: "text-xl font-semibold text-white",
              }} />
          </div>

          <div className="lg:w-full lg:h-1/2 md:w-1/2 w-full h-fit text-white font-bold rounded-[inherit] border-[1px] border-[#454545] flex flex-col items-center justify-center py-4">
            <CircularProgress
              color='success'
              maxValue={50}
              minValue={0}
              value={25}
              strokeWidth={8}
              label='Humidity'
              showValueLabel
              formatOptions={{ style: "unit", unit: "percent" }}
              classNames={{
                svg: "w-24 h-24 drop-shadow-md",
                track: "stroke-white/20",
                value: "text-xl font-semibold text-white",
              }} />
          </div>
        </div>
      </div>
    </div>
  )
}

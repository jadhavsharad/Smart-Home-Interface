
import Header from './Header'
import { FaPlus } from "react-icons/fa6";
import { Tooltip, Button, Divider, CircularProgress, Chip, Card, CardBody, CardFooter } from '@nextui-org/react';


export default function Body() {

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
        <div className="lg:w-1/4 h-72 lg:h-[inherit] rounded-[inherit] border-[1px] border-[#454545]"></div>
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
            color='warning'
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

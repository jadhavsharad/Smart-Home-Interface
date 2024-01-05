
import Header from './Header'
import { FaPlus } from "react-icons/fa6";
import { Tooltip, Button, Divider, CircularProgress, Card, CardBody, CardFooter } from '@nextui-org/react';


export default function Body() {

  return (
    <div className='px-10'>
      <Header />
      <div>
        <div className='text-white flex items-center justify-between h-20'>
          <h1 className='sm:text-2xl md:text-3xl lg:text-4xl font-bold'>Welcome Sharad,</h1>
          <Tooltip content='Add New Device' size='sm' color='primary' shadow='md' showArrow placement='bottom' closeDelay={100}>
            <div className=''>
              <Button size='sm' className='text-white bg-transparent border-[1px] border-[#808080] font-medium' radius="full"><FaPlus /> Add Device</Button>
            </div>
          </Tooltip>
        </div>
      </div>
      <Divider className='my-3' />
      <div className=''>
        <h1 className='text-md md:text-xl text-white font-bold'>Overview</h1>
        <Divider className='my-2' />
        <div className='lg:flex items-center gap-6'>
          <div className='lg:h-96 h-44 lg:min-w-64 lg:w-64 md:w-[50vw] mx-auto lg:mx-0 bg-[#181818] border-[1px] border-[#353535] rounded-2xl'></div>
          <div className='lg:flex flex-col gap-8'>
            <div className='h-44 lg:w-96 sm:w-[90] md:w-[50vw]  bg-[#181818] lg:mx-0 mx-auto lg:my-0 my-3 border-[1px] border-[#353535] rounded-2xl'></div>
            <div className='h-44 lg:w-96 sm:w-[90] md:w-[50vw]  bg-[#181818] lg:mx-0 mx-auto lg:my-0 my-3 border-[1px] border-[#353535] rounded-2xl'></div>
          </div>
          <div className='w-full  text-white flex lg:flex-col lg:items-center lg:gap-8 justify-center lg:h-96'>
            <Card className='bg-transparent'>
              <CardBody className='text-white'>
                <CircularProgress
                  classNames={{
                    svg: "w-40 h-40 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                    value: "text-3xl font-semibold text-white",
                  }}
                  value={70}
                  strokeWidth={4}
                  showValueLabel={true}
                />

              </CardBody>
            </Card>
            <Card className='bg-transparent'>
              <CardBody className='text-white'>
                <CircularProgress
                  classNames={{
                    svg: "w-40 h-40 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                    value: "text-4xl font-semibold text-white",
                  }}
                  value={70}
                  strokeWidth={40}
                  showValueLabel={true}
                />

              </CardBody>
              
            </Card>

            

          </div>
        </div>
      </div>
    </div>
  )
}

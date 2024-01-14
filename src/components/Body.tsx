import db from './Firebase'
import Header from './Header'
import AC from '../assets/AC.svg'
import lamp from '../assets/lamp.svg'
import React, { useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";
// import Warning from '../assets/Warning.svg'
import Checked from '../assets/Checked.svg'
import { DataSnapshot, onValue, ref, set, } from 'firebase/database';
import { Tooltip, Button, Divider, CircularProgress, Switch } from '@nextui-org/react';

export default function Body() {


  // Control Swtiches
  const [isSelected, setIsSelected] = React.useState(true);
  const [temp, setTemp] = React.useState(0);
  const [humid, setHumidity] = React.useState(0);


  const statusRef = ref(db, '/Pins/16/16');
  const tempRef = ref(db, '/Temperature');
  const humidityRef = ref(db, '/Humidity');

  useEffect(() => {
    onValue(statusRef, (snapshot: DataSnapshot) => {
      const status = snapshot.val();
      setIsSelected(status);
    })

    onValue(tempRef, (snapshot: DataSnapshot) => {
      const temperature = snapshot.val();
      setTemp(temperature);
    })

    onValue(humidityRef, (snapshot: DataSnapshot) => {
      const humidity = snapshot.val();
      setHumidity(humidity);
    })
  })


  const handleCheckboxChange = () => {
    const newStatus = !isSelected; // Toggle the value
    setIsSelected(newStatus); // Update the local state

    // Update the status in the database
    set(statusRef, newStatus)
      .then(() => {
        console.log(newStatus)
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      });
  };

  let color
  if (temp < 20) {
    color = "stroke-primary"
  } else if (temp >= 20 && temp <= 25) {
    color = "stroke-default"
  } else if (temp > 25 && temp <= 30) {
    color = "stroke-warning"
  } else if (temp > 30) {
    color = "stroke-danger"
  }

  const SwitchActiveBg = "bg-gradient-to-t from-blue-900 to-blue-500"
  const SwitchActiveBd = "border-zinc-500"

  // Fetch Time and Temp data

  return (
    <div className='px-5 md:px-10'>
      <Header />
      <div>
        <div className='text-white block md:flex items-center justify-between h-20'>
          <h1 className='text-2xl md:text-4xl font-bold font-Poppins'>Welcome Sharad,</h1>
          <Divider className='my-3 md:hidden' />
          <Tooltip content='Add New Device' size='sm' color='primary' shadow='md' showArrow placement='bottom' closeDelay={100}>
            <div className='float-right'>
              <Button size='sm' className='text-white bg-transparent border-[1px] border-[#808080] font-medium' radius="full"><FaPlus /> Add Device</Button>
            </div>
          </Tooltip>
        </div>
      </div>
      <Divider className='my-3' />

      <div>
        <h1 className='bg-gradient-to-tr from-blue-500 to-white saturate-150 text-transparent bg-clip-text text-5xl font-Inter font-bold'>Overview</h1>
      </div>

      <Divider className='my-3' />

      <div className='w-full rounded-xl p-2 lg:p-0 gap-4 h-fit lg:h-96  flex flex-col lg:flex-row'>

        <div className=" w-full  lg:w-1/4 lg:h-[inherit] overflow-hidden flex justify-center flex-col gap-4 md:flex-row lg:justify-normal lg:flex-col lg:items-center  rounded-[inherit]">
          <div className={`border-[1.25px] w-full rounded-[inherit] p-5 md:w-full h-fit lg:h-full  text-white font-Inter font-medium ${isSelected ? SwitchActiveBd : 'border-zinc-800'}`}>
            <div className='flex lg:text-base text-xl md:text-2xl items-center  gap-4 lg:gap-0 lg:justify-around rounded-[inherit]'>
              <img src={AC} className={`w-14 h-14 rounded-[inherit] ${isSelected ? SwitchActiveBg : 'bg-gradient-to-t from-zinc-900 to-zinc-700'}`} alt="" />
              <h1>Air Conditioner</h1>
            </div>
            <Divider className='my-3' />
            <div>
              <h3>Current Status: {isSelected ? "ON" : "OFF"}</h3>
              <Switch size='sm' className='float-right' isSelected={isSelected} onValueChange={setIsSelected} onChange={handleCheckboxChange}></Switch>
            </div>
          </div>


          <div className={`border-[1.25px] w-full rounded-[inherit] p-5 md:w-full h-fit lg:h-full  text-white font-Inter font-medium ${isSelected ? SwitchActiveBd : 'border-zinc-800'}`}>
            <div className='flex lg:text-base text-xl md:text-2xl items-center  gap-4 lg:gap-0 lg:justify-around rounded-[inherit]'>
              <img src={lamp} className={`w-14 h-14 p-2 rounded-[inherit] ${isSelected ? SwitchActiveBg : 'bg-gradient-to-t from-zinc-900 to-zinc-700'}`} alt="" />
              <h1>Ceiling Light</h1>
            </div>
            <Divider className='my-3' />
            <div>
              <h3>Current Status: {isSelected ? "ON" : "OFF"}</h3>
              <Switch size='sm' className='float-right' isSelected={isSelected} onValueChange={setIsSelected} onChange={handleCheckboxChange} color='primary'></Switch>
            </div>
          </div>
        </div>


        <div className="lg:w-1/2 lg:h-[inherit] rounded-[inherit] flex flex-col md:flex-row lg:flex-col gap-4">
          <div className="lg:w-full lg:h-1/2 md:w-1/2 w-full h-fit border-[1px] border-[#454545] rounded-[inherit]">
            <div className='text-white flex justify-center items-center h-full'>
              <div className="w-1/2 h-full flex flex-col justify-center items-center text-center gap-2 p-6">
                <h1 className='text-2xl font-bold lg:text-3xl capitalize'>You are good to go</h1>
                <small className='text-[1rem] text-zinc-400 font-Poppins'>No Problems Detected</small>
              </div>
              <div className="w-1/2 h-full p-4 lg:p-10 flex justify-center items-center">
                <img src={Checked} className='max-h-36' alt="" />
                {/* <img src={Warning} className='max-h-32' alt="" /> */}
              </div>
            </div>
          </div>
          <div className="lg:w-full lg:h-1/2 md:w-1/2 w-full h-fit border-[1px] border-[#454545] rounded-[inherit]">
          </div>
        </div>


        <div className="lg:w-1/4 lg:h-[inherit] rounded-[inherit] flex flex-col md:flex-row lg:flex-col gap-4">
          <div className="lg:w-full lg:h-1/2 md:w-1/2 w-full h-fit rounded-[inherit] border-[1px] border-[#454545] flex flex-col items-center justify-center py-4">
            <CircularProgress
              className='text-white font-bold'
              maxValue={50}
              minValue={0}
              value={temp}
              strokeWidth={2}
              label='Room Temperature'
              showValueLabel={true}
              formatOptions={{ style: "unit", unit: "celsius" }}
              classNames={{
                svg: "w-24 h-24 drop-shadow-md",
                indicator: color,
                track: "stroke-white/10",
                value: "text-xl font-semibold text-white",
              }} />
          </div>

          <div className="lg:w-full lg:h-1/2 md:w-1/2 w-full h-fit text-white font-bold rounded-[inherit] border-[1px] border-[#454545] flex flex-col items-center justify-center py-4">
            <CircularProgress
              color='success'
              maxValue={50}
              minValue={0}
              value={humid}
              strokeWidth={8}
              label='Room Humidity'
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

import db from './Firebase'
import Header from './Header'
import Fan from '../assets/fan.svg'
import lamp from '../assets/lamp.svg'
import React, { useEffect } from 'react';
import { FaPlus } from "react-icons/fa6";
import Warning from '../assets/Warning.svg'
import Checked from '../assets/Checked.svg'
import Fire from '../assets/fire.svg'

import { DataSnapshot, onValue, ref, set, } from 'firebase/database';
import { Tooltip, Button, Divider, CircularProgress, Switch } from '@nextui-org/react';


export default function Body() {

  // Controls
  const [switchone, setSwitchone] = React.useState(0);
  const [switchtwo, setSwitchtwo] = React.useState(0);
  const [temp, setTemp] = React.useState(0);
  const [humid, setHumidity] = React.useState(0);
  const [fireAlert, setFireAlert] = React.useState(0);

  const [icon, setIcon] = React.useState(Checked);
  const [alerttext, setAlertText] = React.useState('')

  // Fetching From Database
  const switch1Ref = ref(db, '/Devices/Device 1/');
  const switch2Ref = ref(db, '/Devices/Device 2/');
  const tempRef = ref(db, '/Sensors/Temperature');
  const humidityRef = ref(db, '/Sensors/Humidity');
  const fireRef = ref(db, "/Sensors/fireAlert/");


  useEffect(() => {
    onValue(switch1Ref, (snapshot: DataSnapshot) => {
      setSwitchone(snapshot.val() ? 0 : 1);
    })

    onValue(switch2Ref, (snapshot: DataSnapshot) => {
      setSwitchtwo(snapshot.val() ? 1 : 0)
    })

    onValue(tempRef, (snapshot: DataSnapshot) => {
      setTemp(snapshot.val());
    })

    onValue(humidityRef, (snapshot: DataSnapshot) => {
      setHumidity(snapshot.val());
    })

    onValue(fireRef, (snapshot: DataSnapshot) => {
      setFireAlert(snapshot.val());
    })

    if (fireAlert == 1){
      setIcon(Warning);
      setAlertText('Multiple Problems Detected')
    } else if (fireAlert === 1) {
      setIcon(Fire);
      setAlertText('Fire Detected');
    } 
    else {
      setIcon(Checked)
      setAlertText('You Are Good To Go')
    }
  })

  // Function to toggle switches and send to database
  const switchOneToggle = () => {
    const newValue = switchone === 1 ? 0 : 1; // Toggle between 0 and 1
    setSwitchone(newValue);
    set(switch1Ref, newValue);
  };

  const switchTwoToggle = () => {
    const newValue = switchtwo === 1 ? 0 : 1; // Toggle between 0 and 1
    setSwitchtwo(newValue);
    set(switch2Ref, newValue);
  };

  // Temp Monitoring Color
  let color
  if (temp < 20) {
    color = "stroke-primary"
  } else if (temp >= 20 && temp <= 25) {
    color = "stroke-default"
  } else if (temp > 25 && temp <= 34) {
    color = "stroke-warning"
  } else if (temp > 34) {
    color = "stroke-danger"
  }

  // Switch On and Off Container Colors
  const SwitchActiveBg = "bg-gradient-to-t from-blue-900 to-blue-500"
  const SwitchActiveBd = "border-zinc-500"

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
        <h1 className='bg-gradient-to-tr from-blue-500 to-white saturate-150 text-transparent bg-clip-text text-4xl font-Inter font-bold'>Overview</h1>
      </div>

      <Divider className='my-3' />

      <div className='w-full rounded-xl p-2 lg:p-0 gap-4 h-fit lg:h-96  flex flex-col lg:flex-row'>

        <div className=" w-full  lg:w-1/4 lg:h-[inherit] overflow-hidden flex justify-center flex-col gap-4 md:flex-row lg:justify-normal lg:flex-col lg:items-center  rounded-[inherit]">
          <div className={`border-[1.25px] w-full rounded-[inherit] p-5 md:w-full h-fit lg:h-full  text-white font-Inter font-medium ${switchone ? SwitchActiveBd : 'border-zinc-800'}`}>
            <div className='flex lg:text-base text-xl md:text-2xl items-center  gap-4 lg:gap-0 lg:justify-around rounded-[inherit]'>
              <img src={lamp} className={`w-14 h-14 p-2 rounded-[inherit] ${switchone ? SwitchActiveBg : 'bg-gradient-to-t from-zinc-900 to-zinc-700'}`} alt="" />
              <h1>Ceiling Light</h1>
            </div>
            <Divider className='my-3' />
            <div>
              <h3>Current Status: {switchone ? "ON" : "OFF"}</h3>
              <Switch size='sm' className='float-right' isSelected={switchone == 1 ? true : false} onChange={switchOneToggle}></Switch>
            </div>
          </div>


          <div className={`border-[1.25px] w-full rounded-[inherit] p-5 md:w-full h-fit lg:h-full  text-white font-Inter font-medium ${switchtwo ? SwitchActiveBd : 'border-zinc-800'}`}>
            <div className='flex lg:text-base text-xl md:text-2xl items-center  gap-4 lg:gap-0 lg:justify-around rounded-[inherit]'>
              <img src={Fan} className={`w-14 h-14 p-2 rounded-[inherit] ${switchtwo ? SwitchActiveBg : 'bg-gradient-to-t from-zinc-900 to-zinc-700'}`} alt="" />
              <h1>Ceiling Fan</h1>

            </div>
            <Divider className='my-3' />
            <div>
              <h3>Current Status: {switchtwo ? "ON" : "OFF"}</h3>
              <Switch size='sm' className='float-right' isSelected={switchtwo == 1 ? true : false} onChange={switchTwoToggle} color='primary'></Switch>
            </div>
          </div>
        </div>


        <div className="lg:w-1/2 lg:h-[inherit] rounded-[inherit] flex flex-col md:flex-row lg:flex-col gap-4">
          <div className="lg:w-full lg:h-full md:w-1/2 w-full h-fit border-[1px] border-[#454545] rounded-[inherit]">
            <div className='text-white flex justify-center items-center h-full'>
              <div className="w-1/2 h-full flex flex-col justify-center items-center text-center gap-2 p-6">
                <h1 className={`text-2xl font-bold  capitalize ${(fireAlert == 1) ? 'text-orange-400 text-3xl'  : 'text-white' }`}>{alerttext}</h1>
                <small className='text-[1rem] text-zinc-400 font-Poppins'>{fireAlert == 1  || ((fireAlert == 1) ) ? 'Problems Detected' : 'No Problems Detected'}</small>
              </div>
              <div className="w-1/2 h-full p-4 lg:p-10 flex justify-center items-center">
                <img src={icon} className='max-h-36' alt="" />
                {/* <img src={Warning} className='max-h-32' alt="" /> */}
              </div>
            </div>
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
              maxValue={80}
              minValue={0}
              value={humid}
              strokeWidth={2}
              label='Room Humidity'
              showValueLabel
              formatOptions={{ style: "unit", unit: "percent" }}
              classNames={{
                svg: "w-24 h-24 drop-shadow-md",
                track: "stroke-white/10",
                value: "text-xl font-semibold text-white",
              }} />
          </div>
        </div>
      </div>
    </div>
  )
}
